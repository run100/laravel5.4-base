!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=251)}({10:function(t,e){t.exports=function(t,e,n,r){var o,u=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(o=t,u=t.default);var i="function"==typeof u?u.options:u;if(e&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns),n&&(i._scopeId=n),r){var s=Object.create(i.computed||null);Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}}),i.computed=s}return{esModule:o,exports:u,options:i}}},185:function(t,e,n){startApp({routes:[{path:"/",component:n(224)}]})},201:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){}}},224:function(t,e,n){var r=n(10)(n(201),n(232),null,null);t.exports=r.exports},232:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("panel",[n("span",{slot:"title"},[t._v("muhaha")]),t._v(" "),n("span",{slot:"body"},[t._v("muhaha")])])},staticRenderFns:[]}},251:function(t,e,n){t.exports=n(185)}});