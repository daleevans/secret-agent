(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{"2s6V":function(t,e,s){"use strict";s.r(e);var n=s("KHd+"),r=s("UQSp"),a=s("oCYn");function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var p={VueRemarkRoot:r.a},c=function(t){var e=t.options.components=t.options.components||{},s=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===o(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?e[t]=p[t]:s[t]=function(){return p[t]}}))},i=a.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",v={excerpt:null,title:"SecretAgent"};var _=function(t){t.options[u]&&(t.options[u]=v),a.a.util.defineReactive(t.options,u,v),t.options.computed=i.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},l=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VueRemarkRoot",[s("h1",{attrs:{id:"secretagent"}},[s("a",{attrs:{href:"#secretagent","aria-hidden":"true"}},[t._v("#")]),t._v("SecretAgent")]),s("p",[t._v("This is the primary entry point for launching SecretAgent. The following is a simple example:")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret-agent'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("createBrowser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.google.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other actions...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("p",[t._v("SecretAgent itself has no instances. It is a static singleton whose primary purpose is spinning up new "),s("a",{attrs:{href:"./browser-window"}},[t._v("browser instances")]),t._v(".")]),s("h2",{attrs:{id:"class-methods"}},[s("a",{attrs:{href:"#class-methods","aria-hidden":"true"}},[t._v("#")]),t._v("Class Methods")]),s("h3",{attrs:{id:"secretagentconfigureoptions-configure"}},[s("a",{attrs:{href:"#secretagentconfigureoptions-configure","aria-hidden":"true"}},[t._v("#")]),t._v("SecretAgent.configure"),s("em",[t._v("(options)")]),t._v(" {#configure}")]),s("p",[t._v("Update existing settings.")]),s("h4",{attrs:{id:"arguments"}},[s("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("options "),s("code",{pre:!0},[t._v("object")]),t._v(" Accepts any of the following:"),s("ul",[s("li",[t._v("maxActiveSessionCount "),s("code",{pre:!0},[t._v("number")]),t._v(" defaults to "),s("code",{pre:!0},[t._v("10")]),t._v(". Limit windows open at any given time.")]),s("li",[t._v("localProxyPortStart "),s("code",{pre:!0},[t._v("number")]),t._v(" defaults to "),s("code",{pre:!0},[t._v("10000")]),t._v(". Starting proxy port.")]),s("li",[t._v("sessionsDir "),s("code",{pre:!0},[t._v("string")]),t._v(" defaults to "),s("code",{pre:!0},[t._v("os.tmpdir()")]),t._v(". Where session files are stored.")]),s("li",[t._v("defaultRenderingOptions "),s("code",{pre:!0},[t._v("string[]")]),t._v(" defaults to "),s("code",{pre:!0},[t._v("[All]")]),t._v(". Controls browser functionality.")]),s("li",[t._v("defaultUserProfile "),s("code",{pre:!0},[t._v("IUserProfile")]),t._v(". Define user cookies, session, and more.")]),s("li",[t._v("replayServerPort "),s("code",{pre:!0},[t._v("number")]),t._v('. Port to start a live replay server on. Defaults to "any open port".')])])])]),s("h4",{attrs:{id:"returns-promise"}},[s("a",{attrs:{href:"#returns-promise","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise")])]),s("p",[t._v("See the "),s("a",{attrs:{href:"../overview/configuration"}},[t._v("Configuration")]),t._v(" page for more details on "),s("code",{pre:!0},[t._v("options")]),t._v(" and its defaults.")]),s("p",[t._v("Note: Changing any of these configurations options after "),s("code",{pre:!0},[t._v("createBrowser")]),t._v(" has been called will not affect any windows already created. It only affects future windows.")]),s("h3",{attrs:{id:"secretagentcreatebrowseroptions-create-browser"}},[s("a",{attrs:{href:"#secretagentcreatebrowseroptions-create-browser","aria-hidden":"true"}},[t._v("#")]),t._v("SecretAgent.createBrowser"),s("em",[t._v("([options])")]),t._v(" {#create-browser}")]),s("p",[t._v("Creates a new sandboxed browser instance with "),s("a",{attrs:{href:"../overview/basic-concepts"}},[t._v("unique user session and fingerprints")]),t._v(". Or pass in an existing UserProfile.")]),s("h4",{attrs:{id:"arguments-1"}},[s("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("options "),s("code",{pre:!0},[t._v("object")]),t._v(" Accepts any of the following:"),s("ul",[s("li",[t._v("name "),s("code",{pre:!0},[t._v("string")]),t._v(". This is used to generate a unique sessionName.")]),s("li",[t._v("emulatorId "),s("code",{pre:!0},[t._v("string")]),t._v(" defaults to "),s("code",{pre:!0},[t._v("chrome-80")]),t._v(". Emulates a specific browser version.")]),s("li",[t._v("humanoidId "),s("code",{pre:!0},[t._v("string")]),t._v(". Drives human-like mouse/keyboard movements.")]),s("li",[t._v("renderingOptions "),s("code",{pre:!0},[t._v("string[]")]),t._v(". Controls browser functionality.")]),s("li",[t._v("userProfile "),s("code",{pre:!0},[t._v("IUserProfile")]),t._v(". Previous user's cookies, session, etc.")])])])]),s("h4",{attrs:{id:"returns-promisebrowserinstance"}},[s("a",{attrs:{href:"#returns-promisebrowserinstance","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise<BrowserInstance>")])]),s("p",[t._v("See the "),s("a",{attrs:{href:"../overview/configuration"}},[t._v("Configuration")]),t._v(" page for more details on "),s("code",{pre:!0},[t._v("options")]),t._v(" and its defaults.")]),s("p",[t._v("Note: If you provide a "),s("code",{pre:!0},[t._v("name")]),t._v(" that has already been used to name another Browser instance then a counter will be appended to your string to ensure it's uniqueness. However, it's only unique within a single NodeJs process (i.e., rerunning your script will reset the counter).")]),s("p",[t._v("The following example code loads a URL with the AwaitedDOM activated but without any javascript executed or assets loaded (i.e., css, images, etc):")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",{pre:!0,attrs:{class:"language-js"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret-agent'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" browser "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("createBrowser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" renderingOptions"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AwaitedDOM'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("goto")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.org'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" html "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" browser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("document")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token property-access"}},[t._v("outerHTML")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token maybe-class-name"}},[t._v("SecretAgent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token method function property-access"}},[t._v("shutdown")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("h3",{attrs:{id:"secretagentshutdown-shutdown"}},[s("a",{attrs:{href:"#secretagentshutdown-shutdown","aria-hidden":"true"}},[t._v("#")]),t._v("SecretAgent.shutdown"),s("em",[t._v("()")]),t._v(" {#shutdown}")]),s("p",[t._v("Close SecretAgent and any windows that have been opened.")]),s("h4",{attrs:{id:"returns-promise-1"}},[s("a",{attrs:{href:"#returns-promise-1","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise")])]),s("p",[t._v("After shutdown, the SecretAgent object is considered to be disposed and cannot be used again unless you call SecretAgent.start() to reinitialize.")]),s("p",[t._v("Note: Because Chromium is launched when you call "),s("code",{pre:!0},[t._v("start/createBrowser")]),t._v(", your NodeJS script cannot exit cleanly until "),s("code",{pre:!0},[t._v("shutdown()")]),t._v(" completes.")]),s("h3",{attrs:{id:"secretagentstartoptions-start"}},[s("a",{attrs:{href:"#secretagentstartoptions-start","aria-hidden":"true"}},[t._v("#")]),t._v("SecretAgent.start"),s("em",[t._v("([options])")]),t._v(" {#start}")]),s("p",[t._v("Preloads the library and launches the underlying Chromium engine.")]),s("h4",{attrs:{id:"arguments-2"}},[s("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Arguments")]),t._v(":")]),s("ul",[s("li",[t._v("options "),s("code",{pre:!0},[t._v("object")]),t._v(". Accepts any of the options in "),s("a",{attrs:{href:""}},[t._v("SecretAgent.configure")]),t._v(".")])]),s("h4",{attrs:{id:"returns-promise-2"}},[s("a",{attrs:{href:"#returns-promise-2","aria-hidden":"true"}},[t._v("#")]),s("strong",[t._v("Returns")]),t._v(": "),s("code",{pre:!0},[t._v("Promise")])]),s("p",[t._v("Starting SecretAgent can take between 5 and 15 seconds. It must launch the Chromium engine, set up man-in-the-middle proxies, and prime the Emulators and Humanoids.")]),s("p",[t._v("Note: You are not required to call this method as "),s("code",{pre:!0},[t._v("createBrowser")]),t._v(" will do so the first time it runs. Directly calling "),s("code",{pre:!0},[t._v("start")]),t._v(" merely speeds up the response time of your first call to "),s("code",{pre:!0},[t._v("createBrowser")]),t._v(".")])])}),[],!1,null,null,null);"function"==typeof c&&c(l),"function"==typeof _&&_(l);e.default=l.exports},UQSp:function(t,e,s){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);