!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var o="Expected a function",r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,y=Math.max,p=Math.min,b=function(){return s.Date.now()};function m(t,e,n){var i,r,u,f,a,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof t)throw new TypeError(o);function m(e){var n=i,o=r;return i=r=void 0,l=e,f=t.apply(o,n)}function j(t){return l=t,a=setTimeout(T,e),d?m(t):f}function w(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-l>=u}function T(){var t=b();if(w(t))return O(t);a=setTimeout(T,function(t){var n=e-(t-c);return s?p(n,u-(t-l)):n}(t))}function O(t){return a=void 0,v&&i?m(t):(i=r=void 0,f)}function S(){var t=b(),n=w(t);if(i=arguments,r=this,c=t,n){if(void 0===a)return j(c);if(s)return a=setTimeout(T,e),m(c)}return void 0===a&&(a=setTimeout(T,e)),f}return e=h(e)||0,g(n)&&(d=!!n.leading,u=(s="maxWait"in n)?y(h(n.maxWait)||0,e):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},S.flush=function(){return void 0===a?f:O(b())},S}function g(e){var n=void 0===e?"undefined":t(i)(e);return!!e&&("object"==n||"function"==n)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(i)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(g(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=g(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var o=f.test(e);return o||a.test(e)?c(e.slice(2),o?2:8):u.test(e)?NaN:+e}e=function(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError(o);return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),m(t,e,{leading:i,maxWait:e,trailing:r})};var j=document.querySelector("[data-start]"),w=document.querySelector("[data-stop]"),T=document.body;var O=t(e)((function(){T.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3);j.addEventListener("click",(function(){time=setInterval(O,1e3)})),w.addEventListener("click",(function(){clearInterval(time)}))}();
//# sourceMappingURL=01-color-switcher.55ba8d12.js.map