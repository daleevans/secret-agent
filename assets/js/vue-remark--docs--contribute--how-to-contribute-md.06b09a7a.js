(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{"1BBF":function(t,e,o){"use strict";o.r(e);var n=o("Ow4o"),r=o("vu0Y"),i=o("pLV6");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var c={VueRemarkRoot:r.a},s=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===a(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:o[t]=function(){return c[t]}}))},u=i.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",l={excerpt:null,title:"How to contribute"};var d=function(t){t.options[p]&&(t.options[p]=l),i.a.util.defineReactive(t.options,p,l),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},h=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("h1",{attrs:{id:"how-to-contribute"}},[o("a",{attrs:{href:"#how-to-contribute","aria-hidden":"true"}},[t._v("#")]),t._v("How to contribute")]),o("blockquote",[o("p",[t._v("SecretAgent is an open-source project built by core maintainers and contributors. We want to make it easy for anyone to participate. Contribute to core, build plugins, improve documentation or write a blog post. It all helps SecretAgent on its mission to keep the web open for innovation.")])]),o("p",[t._v("Read the "),o("a",{attrs:{href:"./code-of-conduct"}},[t._v("code of conduct")]),t._v(".")]),o("h2",{attrs:{id:"contributing-to-the-code"}},[o("a",{attrs:{href:"#contributing-to-the-code","aria-hidden":"true"}},[t._v("#")]),t._v("Contributing to the Code")]),o("p",[t._v("SecretAgent uses a "),o("strong",[t._v("monorepo")]),t._v(" pattern to manage its dependencies and core plugins. To contribute, you'll probably want to to setup the SecretAgent repository locally.")]),o("h3",{attrs:{id:"setting-up-the-secretagent-repository"}},[o("a",{attrs:{href:"#setting-up-the-secretagent-repository","aria-hidden":"true"}},[t._v("#")]),t._v("Setting Up the SecretAgent Repository")]),o("p",[t._v("Install "),o("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Node.js 8.3")]),t._v(" or higher and "),o("a",{attrs:{href:"https://yarnpkg.com/lang/en/docs/install/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Yarn")]),t._v(".")]),o("ol",[o("li",[t._v("Clone the "),o("code",{pre:!0},[t._v("https://github.com/ulixee/secret-agent.git")]),t._v(" repository.")])]),o("p",[t._v("To use "),o("code",{pre:!0},[t._v("@secret-agent/cli")]),t._v(" in the repo as a global command. Enter the "),o("code",{pre:!0},[t._v("~/packages/cli")]),t._v(" folder and run "),o("code",{pre:!0},[t._v("npm link")]),t._v(".")]),o("p",[o("strong",[t._v("Yarn")]),t._v(" will add dependencies from your test projects to the root "),o("code",{pre:!0},[t._v("yarn.lock")]),t._v(" file. So you should not commit changes in that file unless you have added dependencies to any of the core packages. If you need to commit it, remove your projects from the "),o("code",{pre:!0},[t._v("~/projects")]),t._v(" folder temporary and run "),o("code",{pre:!0},[t._v("yarn")]),t._v(" in the root folder. Yarn will then clean up the lock file with only core dependencies. Commit the file and move your projects back and run "),o("code",{pre:!0},[t._v("yarn")]),t._v(" again to start developing.")]),o("h2",{attrs:{id:"contributing-to-the-docs"}},[o("a",{attrs:{href:"#contributing-to-the-docs","aria-hidden":"true"}},[t._v("#")]),t._v("Contributing to the docs")]),o("p",[t._v("We are a strong believer that documentation is very important for any open-source projects. SecretAgent uses Gridsome for its website and documentation.")]),o("ol",[o("li",[t._v("If you want to add/modify any SecretAgent documentation, go to the\n"),o("a",{attrs:{href:"https://github.com/ulixee/secret-agent/tree/master/website/docs",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("docs folder on GitHub")]),t._v(" and\nuse the file editor to edit and then preview your changes.")]),o("li",[t._v("GitHub then allows you to commit the change and raise a PR right in the UI. This is the "),o("em",[t._v("easiest")]),t._v(" way you can contribute to SecretAgent!")])]),o("p",[t._v("You can also clone "),o("a",{attrs:{href:"https://github.com/ulixee/secret-agent",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("the SecretAgent repo")]),t._v(" and work locally on documentation.")]),o("h2",{attrs:{id:"contributing-to-the-blog"}},[o("a",{attrs:{href:"#contributing-to-the-blog","aria-hidden":"true"}},[t._v("#")]),t._v("Contributing to the blog")]),o("p",[o("em",[t._v("Coming soon...")])])])}),[],!1,null,null,null);"function"==typeof s&&s(h),"function"==typeof d&&d(h);e.default=h.exports},vu0Y:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);