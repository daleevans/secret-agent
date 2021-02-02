(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"dp/4":function(e,t,r){"use strict";r.r(t);var i=r("Ow4o"),s=r("vu0Y"),a=r("pLV6");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var n={VueRemarkRoot:s.a},p=function(e){var t=e.options.components=e.options.components||{},r=e.options.computed=e.options.computed||{};Object.keys(n).forEach((function(e){"object"===o(n[e])&&"function"==typeof n[e].render||"function"==typeof n[e]&&"function"==typeof n[e].options.render?t[e]=n[e]:r[e]=function(){return n[e]}}))},v=a.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",_={excerpt:null,title:"[AwaitedDOM](/docs/basic-interfaces/awaited-dom) <span>/</span> CSSStyleDeclaration"};var c=function(e){e.options[d]&&(e.options[d]=_),a.a.util.defineReactive(e.options,d,_),e.options.computed=v.computed({$frontmatter:function(){return e.options[d]}},e.options.computed)},u=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VueRemarkRoot",[r("h1",{attrs:{id:"awaiteddom-spanspan-cssstyledeclaration"}},[r("a",{attrs:{href:"#awaiteddom-spanspan-cssstyledeclaration","aria-hidden":"true"}},[e._v("#")]),r("a",{attrs:{href:"/docs/basic-interfaces/awaited-dom"}},[e._v("AwaitedDOM")]),r("span",[e._v("/")]),e._v(" CSSStyleDeclaration")]),r("div",{staticClass:"overview"},[e._v("The "),r("strong",[r("code",[e._v("CSSStyleDeclaration")])]),e._v(" interface represents an object that is a CSS declaration block, and exposes style information and various style-related methods and properties.")]),r("div",{staticClass:"overview"},[e._v("A "),r("code",[e._v("CSSStyleDeclaration")]),e._v(" object can be exposed using three different APIs:")]),r("h2",{attrs:{id:"properties"}},[r("a",{attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v("Properties")]),r("h3",{attrs:{id:"cssFloat"}},[r("a",{attrs:{href:"#cssFloat","aria-hidden":"true"}},[e._v("#")]),e._v(".cssFloat "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The cssFloat attribute can be set for elements that generate boxes that are not absolutely positioned. The cssFloat attribute corresponds to the float Cascading Style Sheets (CSS) property. Getting this attribute is equivalent to calling the getProperty method. Setting this attribute is equivalent to calling the setProperty method.")]),r("h4",{attrs:{id:"type-promisestring"}},[r("a",{attrs:{href:"#type-promisestring","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h3",{attrs:{id:"cssText"}},[r("a",{attrs:{href:"#cssText","aria-hidden":"true"}},[e._v("#")]),e._v(".cssText "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Textual representation of the declaration block. Setting this attribute changes the style.")]),r("h4",{attrs:{id:"type-promisestring-1"}},[r("a",{attrs:{href:"#type-promisestring-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h3",{attrs:{id:"length"}},[r("a",{attrs:{href:"#length","aria-hidden":"true"}},[e._v("#")]),e._v(".length "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The number of properties. See the "),r("code",[e._v("item()")]),e._v(" method below.")]),r("h4",{attrs:{id:"type-promisenumber"}},[r("a",{attrs:{href:"#type-promisenumber","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<number>")])]),r("h3",{attrs:{id:"parentRule"}},[r("a",{attrs:{href:"#parentRule","aria-hidden":"true"}},[e._v("#")]),e._v(".parentRule "),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("The containing "),r("code",[e._v("CSSRule")]),e._v(".")]),r("h4",{attrs:{id:"type-cssrule"}},[r("a",{attrs:{href:"#type-cssrule","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Type")]),e._v(": "),r("a",{attrs:{href:"./css-rule"}},[r("code",{pre:!0},[e._v("CSSRule")])])]),r("h2",{attrs:{id:"methods"}},[r("a",{attrs:{href:"#methods","aria-hidden":"true"}},[e._v("#")]),e._v("Methods")]),r("h3",{attrs:{id:"getPropertyPriority"}},[r("a",{attrs:{href:"#getPropertyPriority","aria-hidden":"true"}},[e._v("#")]),e._v(".getPropertyPriority"),r("em",[e._v("(property)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v('Returns the optional priority, "important".')]),r("h4",{attrs:{id:"arguments"}},[r("a",{attrs:{href:"#arguments","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("property "),r("code",{pre:!0},[e._v("string")]),e._v(". "),r("em",[r("code",[e._v("property")])]),e._v(" is a "),r("code",{pre:!0},[e._v("string")]),e._v(" representing the property name to be checked.")])]),r("h4",{attrs:{id:"returns-promisestring"}},[r("a",{attrs:{href:"#returns-promisestring","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h3",{attrs:{id:"getPropertyValue"}},[r("a",{attrs:{href:"#getPropertyValue","aria-hidden":"true"}},[e._v("#")]),e._v(".getPropertyValue"),r("em",[e._v("(property)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns the property value given a property name.")]),r("h4",{attrs:{id:"arguments-1"}},[r("a",{attrs:{href:"#arguments-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("property "),r("code",{pre:!0},[e._v("string")]),e._v(". "),r("em",[r("code",[e._v("property")])]),e._v(" is a "),r("code",{pre:!0},[e._v("string")]),e._v(" representing the property name (hyphen case) to be checked.")])]),r("h4",{attrs:{id:"returns-promisestring-1"}},[r("a",{attrs:{href:"#returns-promisestring-1","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h3",{attrs:{id:"item"}},[r("a",{attrs:{href:"#item","aria-hidden":"true"}},[e._v("#")]),e._v(".item"),r("em",[e._v("(index)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Returns a property name.")]),r("h4",{attrs:{id:"arguments-2"}},[r("a",{attrs:{href:"#arguments-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("index "),r("code",{pre:!0},[e._v("number")]),e._v(". "),r("em",[r("code",[e._v("index")])]),e._v(" is the index of the node to be fetched. The index is zero-based.")])]),r("h4",{attrs:{id:"returns-promisestring-2"}},[r("a",{attrs:{href:"#returns-promisestring-2","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h3",{attrs:{id:"removeProperty"}},[r("a",{attrs:{href:"#removeProperty","aria-hidden":"true"}},[e._v("#")]),e._v(".removeProperty"),r("em",[e._v("(property)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Removes a property from the CSS declaration block.")]),r("h4",{attrs:{id:"arguments-3"}},[r("a",{attrs:{href:"#arguments-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("property "),r("code",{pre:!0},[e._v("string")]),e._v(". "),r("em",[r("code",[e._v("property")])]),e._v(" is a "),r("code",{pre:!0},[e._v("string")]),e._v(" representing the property name to be removed. Note that multi-word property names are hyphenated and not camel-cased.")])]),r("h4",{attrs:{id:"returns-promisestring-3"}},[r("a",{attrs:{href:"#returns-promisestring-3","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<string>")])]),r("h3",{attrs:{id:"setProperty"}},[r("a",{attrs:{href:"#setProperty","aria-hidden":"true"}},[e._v("#")]),e._v(".setProperty"),r("em",[e._v("(property, value, priority?)")]),r("div",{staticClass:"specs"},[r("i",[e._v("W3C")])])]),r("p",[e._v("Modifies an existing CSS property or creates a new CSS property in the declaration block.")]),r("h4",{attrs:{id:"arguments-4"}},[r("a",{attrs:{href:"#arguments-4","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Arguments")]),e._v(":")]),r("ul",[r("li",[e._v("property "),r("code",{pre:!0},[e._v("string")]),e._v(". "),r("em",[r("code",[e._v("propertyName")])]),e._v(" is a "),r("code",{pre:!0},[e._v("string")]),e._v(" representing the CSS property name (hyphen case) to be modified.")]),r("li",[e._v("value "),r("code",{pre:!0},[e._v("string")]),e._v(". "),r("em",[r("code",[e._v("value")])]),e._v(" "),r("span",{staticClass:"inlineIndicator optional optionalInline"},[e._v("Optional")]),e._v(" is a "),r("code",{pre:!0},[e._v("string")]),e._v(" containing the new property value. If not specified, treated as the empty string.   "),r("ul",[r("li",[e._v("Note: *"),r("code",[e._v("value")]),e._v("* must not contain "),r("code",[e._v('"!important"')]),e._v(" -- that should be set using the *"),r("code",[e._v("priority")]),e._v("* parameter.")])])]),r("li",[e._v("priority "),r("code",{pre:!0},[e._v("string")]),e._v(". "),r("em",[r("code",[e._v("priority")])]),r("span",{staticClass:"inlineIndicator optional optionalInline"},[e._v("Optional")]),e._v(" is a "),r("code",{pre:!0},[e._v("string")]),e._v(' allowing the "important" CSS priority to be set. If not specified, treated as the empty string. The following values are accepted:   '),r("ul",[r("li",[e._v("String value "),r("code",[e._v('"important"')])]),r("li",[e._v("Keyword "),r("code",[e._v("undefined")])]),r("li",[e._v("String empty value "),r("code",[e._v('""')])])])])]),r("h4",{attrs:{id:"returns-promisevoid"}},[r("a",{attrs:{href:"#returns-promisevoid","aria-hidden":"true"}},[e._v("#")]),r("strong",[e._v("Returns")]),e._v(": "),r("code",{pre:!0},[e._v("Promise<void>")])])])}),[],!1,null,null,null);"function"==typeof p&&p(u),"function"==typeof c&&c(u);t.default=u.exports},vu0Y:function(e,t,r){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);