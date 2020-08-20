(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{UQSp:function(t,s,e){"use strict";s.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},Ui1s:function(t,s,e){"use strict";e.r(s);var a=e("KHd+"),n=e("UQSp"),r=e("oCYn");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var p={VueRemarkRoot:n.a},c=function(t){var s=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?s[t]=p[t]:e[t]=function(){return p[t]}}))},i=r.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",l={excerpt:null,title:"Configuration"};var _=function(t){t.options[v]&&(t.options[v]=l),r.a.util.defineReactive(t.options,v,l),t.options.computed=i.computed({$frontmatter:function(){return t.options[v]}},t.options.computed)},u=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("VueRemarkRoot",[e("h1",{attrs:{id:"configuration"}},[e("a",{attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v("Configuration")]),e("h3",{attrs:{id:"max-window-count-div-classspecsisecretagentidiv"}},[e("a",{attrs:{href:"#max-window-count-div-classspecsisecretagentidiv","aria-hidden":"true"}},[t._v("#")]),t._v("Max Window Count "),e("div",{staticClass:"specs"},[e("i",[t._v("SecretAgent")])])]),e("h3",{attrs:{id:"local-proxy-port-start-div-classspecsisecretagentidiv"}},[e("a",{attrs:{href:"#local-proxy-port-start-div-classspecsisecretagentidiv","aria-hidden":"true"}},[t._v("#")]),t._v("Local Proxy Port Start "),e("div",{staticClass:"specs"},[e("i",[t._v("SecretAgent")])])]),e("h3",{attrs:{id:"sessions-directory-div-classspecsisecretagentidiv"}},[e("a",{attrs:{href:"#sessions-directory-div-classspecsisecretagentidiv","aria-hidden":"true"}},[t._v("#")]),t._v("Sessions Directory "),e("div",{staticClass:"specs"},[e("i",[t._v("SecretAgent")])])]),e("p",[t._v("This can only be set on BrowserInstance at time of creation.")]),e("h3",{attrs:{id:"rendering-options-div-classspecsisecretagentiibrowserinstanceidiv"}},[e("a",{attrs:{href:"#rendering-options-div-classspecsisecretagentiibrowserinstanceidiv","aria-hidden":"true"}},[t._v("#")]),t._v("Rendering Options "),e("div",{staticClass:"specs"},[e("i",[t._v("SecretAgent")]),e("i",[t._v("BrowserInstance")])])]),e("p",[t._v("One of the best ways to optimize SecretAgent's memory and CPU is limiting the "),e("code",{pre:!0},[t._v("renderingOptions")]),t._v(" to only what you need. The following are valid options.")]),e("p",{staticClass:"show-table-header show-bottom-border minimal-row-height"}),e("table",[e("thead",[e("tr",[e("th",[t._v("Options")]),e("th",[t._v("Description")])])]),e("tbody",[e("tr",[e("td",[e("code",{pre:!0},[t._v("AwaitedDOM")])]),e("td",[t._v("Uses Chromium to attach AwaitedDOM to window.document.")])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("JsRuntime")])]),e("td",[t._v("Executes JS in webpage. Requires "),e("code",{pre:!0},[t._v("AwaitedDOM")]),t._v(".")])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("LoadJsAssets")])]),e("td",[t._v("Loads all referenced script assets. Requires "),e("code",{pre:!0},[t._v("JsRuntime")]),t._v(".")])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("LoadCssAssets")])]),e("td",[t._v("Loads all referenced CSS assets. Requires "),e("code",{pre:!0},[t._v("JsRuntime")]),t._v(".")])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("LoadImages")])]),e("td",[t._v("Loads all referenced images on page. Requires "),e("code",{pre:!0},[t._v("JsRuntime")]),t._v(".")])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("LoadAssets")])]),e("td",[t._v("Shortcut for "),e("code",{pre:!0},[t._v("LoadJsAssets")]),t._v(", "),e("code",{pre:!0},[t._v("LoadCssAssets")]),t._v(" and "),e("code",{pre:!0},[t._v("LoadImages")]),t._v(".")])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("All")])]),e("td",[t._v("Activates all features listed above.")])]),e("tr",[e("td",[e("code",{pre:!0},[t._v("None")])]),e("td",[t._v("No AwaitedDOM or assets. Only retrieves window.response.")])])])]),e("p",[t._v("As you'll notice above, some features are dependent on others and therefore automatically enable other features.")]),e("p",[t._v("Setting an empty features array is the same as setting its default.")]),e("p",[t._v("The following example disables all browser rendering options and loads the raw response into "),e("a",{attrs:{href:"../core-interfaces/local-dom"}},[t._v("DetachedDOM")]),t._v(":")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret-agent'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browser "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("createBrowser")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" renderingOptions"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'None'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" resource "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.org'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" responseHtml "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" resource"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("response")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token dom variable"}},[t._v("document")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[e("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("DetachedDOM")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("load")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("responseHtml"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token console class-name"}},[t._v("console")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token dom variable"}},[t._v("document")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("querySelector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'title'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("h3",{attrs:{id:"user-profiles-div-classspecsisecretagentidiv"}},[e("a",{attrs:{href:"#user-profiles-div-classspecsisecretagentidiv","aria-hidden":"true"}},[t._v("#")]),t._v("User Profiles "),e("div",{staticClass:"specs"},[e("i",[t._v("SecretAgent")])])]),e("p",[t._v("The serialized user profile passed into a SecretAgent instance is never modified.")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",{pre:!0,attrs:{class:"language-js"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rawProfileJson "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("readFileSync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'profile.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" profile "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token known-class-name class-name"}},[t._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("parse")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rawProfileJson"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { cookies: { sessionId: 'test' }}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browser "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("createBrowser")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" userProfile"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" profile "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" latestUserProfile "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("export")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { cookies, emulatorPlugin, humanoidPlugin, cache, IP } ")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://example.com'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" latestUserProfile "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("user")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword module"}},[t._v("export")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\n\nfs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("writeFileSync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'profile.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token known-class-name class-name"}},[t._v("JSON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("stringify")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("latestUserProfile"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword null nil"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),e("h3",{attrs:{id:"emulators-div-classspecsisecretagentiibrowserinstanceidiv"}},[e("a",{attrs:{href:"#emulators-div-classspecsisecretagentiibrowserinstanceidiv","aria-hidden":"true"}},[t._v("#")]),t._v("Emulators "),e("div",{staticClass:"specs"},[e("i",[t._v("SecretAgent")]),e("i",[t._v("BrowserInstance")])])]),e("h3",{attrs:{id:"humanoids-div-classspecsisecretagentiibrowserinstanceidiv"}},[e("a",{attrs:{href:"#humanoids-div-classspecsisecretagentiibrowserinstanceidiv","aria-hidden":"true"}},[t._v("#")]),t._v("Humanoids "),e("div",{staticClass:"specs"},[e("i",[t._v("SecretAgent")]),e("i",[t._v("BrowserInstance")])])])])}),[],!1,null,null,null);"function"==typeof c&&c(u),"function"==typeof _&&_(u);s.default=u.exports}}]);