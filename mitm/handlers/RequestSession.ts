import * as http from 'http';
import { createPromise, IResolvablePromise } from '@secret-agent/commons/utils';
import ResourceType from '@secret-agent/core-interfaces/ResourceType';
import IHttpRequestModifierDelegate from '@secret-agent/commons/interfaces/IHttpRequestModifierDelegate';
import IHttpResourceLoadDetails from '@secret-agent/commons/interfaces/IHttpResourceLoadDetails';
import IResourceRequest from '@secret-agent/core-interfaces/IResourceRequest';
import IResourceHeaders from '@secret-agent/core-interfaces/IResourceHeaders';
import * as http2 from 'http2';
import IResourceResponse from '@secret-agent/core-interfaces/IResourceResponse';
import net from 'net';
import { CanceledPromiseError, TypedEventEmitter } from '@secret-agent/commons/eventUtils';
import MitmRequestAgent from '../lib/MitmRequestAgent';
import IMitmRequestContext from '../interfaces/IMitmRequestContext';

export default class RequestSession extends TypedEventEmitter<IRequestSessionEvents> {
  public static sessions: { [sessionId: string]: RequestSession } = {};
  public static proxyPortSessionIds: { [port: number]: string } = {};

  public websocketBrowserResourceIds: {
    [headersHash: string]: IResolvablePromise<string>;
  } = {};

  public delegate: IHttpRequestModifierDelegate = {};

  public isClosing = false;
  public blockedResources: {
    types: ResourceType[];
    urls: string[];
    handlerFn?: (
      request: http.IncomingMessage | http2.Http2ServerRequest,
      response: http.ServerResponse | http2.Http2ServerResponse,
    ) => boolean;
  } = {
    types: [],
    urls: [],
  };

  public requestAgent: MitmRequestAgent;
  public requests: IHttpResourceLoadDetails[] = [];

  // use this to bypass the mitm and just return a dummy response (ie for UserProfile setup)
  public bypassAllWithEmptyResponse: boolean;

  public browserRequestIdToTabId = new Map<string, string>();

  private readonly pendingResources: IPendingResourceLoad[] = [];

  constructor(
    readonly sessionId: string,
    readonly useragent: string,
    readonly upstreamProxyUrlProvider: Promise<string>,
  ) {
    super();
    RequestSession.sessions[sessionId] = this;
    this.requestAgent = new MitmRequestAgent(this);
  }

  public async waitForBrowserResourceRequest(ctx: IMitmRequestContext) {
    const referer = ctx.requestLowerHeaders.referer as string;
    const origin = ctx.requestLowerHeaders.origin as string;
    const url = ctx.url.href;
    const method = ctx.method;

    let resource = this.getPendingResource(url, method, origin, referer, ctx.isHttp2Push);
    if (!resource) {
      resource = {
        url,
        method,
        origin,
        referer,
        isHttp2Push: ctx.isHttp2Push,
        load: createPromise<IPendingResourceLoad>(),
      };
      this.pendingResources.push(resource);

      // new tab anchor navigations have an issue where they won't trigger on the new tab, so we have to make it move forward
      if (
        ctx.requestLowerHeaders['sec-fetch-mode'] === 'navigate' &&
        ctx.requestLowerHeaders['sec-fetch-dest'] === 'document'
      ) {
        this.registerResource({
          browserRequestId: 'fallback-navigation',
          resourceType: 'Document',
          referer,
          origin,
          url,
          method,
          hasUserGesture: resource.hasUserGesture,
          isUserNavigation: !!ctx.requestLowerHeaders['sec-fetch-user'],
          documentUrl: url,
        });
      }
    }

    await resource.load.promise;

    const idx = this.pendingResources.indexOf(resource);
    if (idx >= 0) this.pendingResources.splice(idx, 1);

    return {
      browserRequestId: resource.browserRequestId,
      resourceType: resource.resourceType,
      originType: ctx.originType,
      hasUserGesture: resource.hasUserGesture,
      isUserNavigation: resource.isUserNavigation,
      documentUrl: resource.documentUrl,
    };
  }

  public registerResource(params: Omit<IPendingResourceLoad, 'load'>) {
    if (this.isClosing) return;

    this.browserRequestIdToTabId.set(params.browserRequestId, params.tabId);
    const { url, method, referer, origin } = params;

    let resource = this.getPendingResource(url, method, origin, referer);

    // don't re-resolve same asset
    if (resource?.load?.isResolved) resource = null;

    if (!resource) {
      resource = {
        url,
        method,
        origin,
        referer,
        load: createPromise<IPendingResourceLoad>(),
      } as IPendingResourceLoad;
      this.pendingResources.push(resource);
    }

    resource.tabId = params.tabId;
    resource.browserRequestId = params.browserRequestId;
    resource.documentUrl = params.documentUrl;
    resource.resourceType = params.resourceType;
    resource.hasUserGesture = params.hasUserGesture;
    resource.isUserNavigation = params.isUserNavigation;
    resource.load.resolve(resource);
  }

  public trackResource(resource: IHttpResourceLoadDetails) {
    this.requests.push(resource);
    const redirect = this.requests.find(x => x.redirectedToUrl === resource.url.href);
    resource.isFromRedirect = !!redirect;
    if (redirect) {
      resource.previousUrl = redirect.url.href;
      resource.firstRedirectingUrl = redirect.url.href;
      if (redirect.isFromRedirect) {
        const seen = new Set();
        const findRequest = req => this.requests.find(x => x.redirectedToUrl === req.url.href);
        let prev = redirect;
        while (prev.isFromRedirect) {
          prev = findRequest(prev);
          if (seen.has(prev)) break;
          seen.add(prev);
          if (!prev) break;
        }
        if (prev) {
          resource.firstRedirectingUrl = prev.url.href;
        }
      }
    }
  }

  public async getUpstreamProxyUrl() {
    return this.upstreamProxyUrlProvider ? this.upstreamProxyUrlProvider : null;
  }

  public getProxyCredentials() {
    return `secret-agent:${this.sessionId}`;
  }

  public async close() {
    this.isClosing = true;
    for (const pending of this.pendingResources) {
      pending.load.reject(new CanceledPromiseError('Canceling: Mitm Request Session Closing'));
    }
    await this.requestAgent.close();

    // give it a second for lingering requests to finish
    setTimeout(() => delete RequestSession.sessions[this.sessionId], 1e3);
  }

  public shouldBlockRequest(url: string) {
    if (!this.blockedResources?.urls) {
      return false;
    }
    for (const blockedUrlFragment of this.blockedResources.urls) {
      if (url.includes(blockedUrlFragment)) {
        return true;
      }
    }
    return false;
  }

  // function to override for
  public blockHandler(
    request: http.IncomingMessage | http2.Http2ServerRequest,
    response: http.ServerResponse | http2.Http2ServerResponse,
  ) {
    if (this.blockedResources?.handlerFn) return this.blockedResources.handlerFn(request, response);
    return false;
  }

  public recordDocumentUserActivity(documentUrl: string) {
    if (this.delegate?.documentHasUserActivity) {
      this.delegate?.documentHasUserActivity(documentUrl);
    }
  }

  /////// Websockets ///////////////////////////////////////////////////////////

  public async getWebsocketUpgradeRequestId(headers: IResourceHeaders) {
    const key = this.getWebsocketHeadersKey(headers);
    if (!this.websocketBrowserResourceIds[key]) {
      this.websocketBrowserResourceIds[key] = createPromise<string>(30e3);
    }

    return this.websocketBrowserResourceIds[key].promise;
  }

  public registerWebsocketHeaders(
    tabId: string,
    message: {
      browserRequestId: string;
      headers: IResourceHeaders;
    },
  ) {
    this.browserRequestIdToTabId.set(message.browserRequestId, tabId);
    const key = this.getWebsocketHeadersKey(message.headers);
    if (!this.websocketBrowserResourceIds[key]) {
      this.websocketBrowserResourceIds[key] = createPromise<string>();
    }
    this.websocketBrowserResourceIds[key].resolve(message.browserRequestId);
  }

  private getWebsocketHeadersKey(headers: IResourceHeaders) {
    let websocketKey: string;
    let host: string;
    for (const key of Object.keys(headers)) {
      const lowerKey = key.toLowerCase();
      if (lowerKey === 'sec-websocket-key') websocketKey = headers[key] as string;
      if (lowerKey === 'host') host = headers[key] as string;
    }
    return [host, websocketKey].join(',');
  }

  private getPendingResource(
    url: string,
    method: string,
    origin: string,
    referer: string,
    isHttp2Push?: boolean,
  ) {
    const matches = this.pendingResources.filter(x => {
      return x.url === url && x.method === method;
    });

    // if http2 push, we don't know what referer/origin headers the browser will use
    const h2Push = matches.find(x => x.isHttp2Push);
    if (h2Push) return h2Push;
    if (isHttp2Push && matches.length) return matches[0];

    if (method === 'OPTIONS') {
      return matches.find(x => x.origin === origin);
    }

    // otherwise, use referer
    return matches.find(x => x.referer === referer);
  }

  public static async close() {
    await Promise.all(Object.values(RequestSession.sessions).map(x => x.close()));
  }

  public static readSessionId(
    requestHeaders: { [key: string]: string | string[] | undefined },
    remotePort: number,
  ) {
    const authHeader = requestHeaders['proxy-authorization'] as string;
    if (!authHeader) {
      return RequestSession.proxyPortSessionIds[remotePort];
    }

    const [, sessionId] = Buffer.from(authHeader.split(' ')[1], 'base64')
      .toString()
      .split(':');
    return sessionId;
  }

  public static registerProxySession(socket: net.Socket, sessionId: string) {
    this.proxyPortSessionIds[socket.remotePort] = sessionId;
  }

  public static sendNeedsAuth(socket: net.Socket) {
    socket.end(
      'HTTP/1.1 407 Proxy Authentication Required\r\n' +
        'Proxy-Authenticate: Basic realm="sa"\r\n\r\n',
    );
  }
}

interface IRequestSessionEvents {
  response: IRequestSessionResponseEvent;
  request: IRequestSessionRequestEvent;
  httpError: IRequestSessionHttpErrorEvent;
}

export interface IRequestSessionResponseEvent extends IRequestSessionRequestEvent {
  browserRequestId: string;
  response: IResourceResponse;
  wasCached: boolean;
  resourceType: ResourceType;
  body: Buffer;
  redirectedToUrl?: string;
  executionMillis: number;
}

export interface IRequestSessionRequestEvent {
  id: number;
  request: IResourceRequest;
  serverAlpn: string;
  clientAlpn: string;
  isHttp2Push: boolean;
  didBlockResource: boolean;
  originalHeaders: IResourceHeaders;
  localAddress: string;
}

export interface IRequestSessionHttpErrorEvent {
  url: string;
  method: string;
  error: Error;
}

interface IPendingResourceLoad {
  url: string;
  method: string;
  origin: string;
  referer: string;
  load: IResolvablePromise<IPendingResourceLoad>;
  tabId?: string;
  browserRequestId?: string;
  resourceType?: ResourceType;
  documentUrl?: string;
  hasUserGesture?: boolean;
  isUserNavigation?: boolean;
  isHttp2Push?: boolean;
}