!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).NswCallout={},e.litElement_js)}(this,(function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var y,b,d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(v,e);var n,u,f,d=a(v);function v(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),d.call(this)}return n=v,f=[{key:"styles",get:function(){return[t.css(b||(b=p(["\n:host {\n  display: block; }\n\n:host([hidden]) {\n  display: none; }\n      "])))]}},{key:"properties",get:function(){return r(r({},s(c(v),"properties",this)),{},{title:{name:"title",type:String,value:"",reflectToAttribute:!0,observer:"_titleChanged"},content:{name:"content",type:String,value:"",reflectToAttribute:!0,observer:"_contentChanged"},link:{name:"link",type:String,value:"",reflectToAttribute:!0,observer:"_linkChanged"},text:{name:"text",type:String,value:"",reflectToAttribute:!0,observer:"_textChanged"}})}},{key:"tag",get:function(){return"nsw-callout"}}],(u=[{key:"render",value:function(){return t.html(y||(y=p(["\n\n<slot></slot>\n<div>","</div>\n<div>","</div>\n<div>","</div>\n<div>","</div>"])),this.title,this.content,this.link,this.text)}},{key:"firstUpdated",value:function(e){}},{key:"updated",value:function(e){e.forEach((function(e,t){}))}},{key:"_titleChanged",value:function(e,t){"undefined"!==o(e)&&console.log(e)}},{key:"_contentChanged",value:function(e,t){"undefined"!==o(e)&&console.log(e)}},{key:"_linkChanged",value:function(e,t){"undefined"!==o(e)&&console.log(e)}},{key:"_textChanged",value:function(e,t){"undefined"!==o(e)&&console.log(e)}}])&&i(n.prototype,u),f&&i(n,f),v}(t.LitElement);customElements.define(d.tag,d),e.NswCallout=d,Object.defineProperty(e,"__esModule",{value:!0})}));
