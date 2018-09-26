!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./app/js/main.js")}({"./app/common/Greeter.js":
/*!*******************************!*\
  !*** ./app/common/Greeter.js ***!
  \*******************************/
/*! no static exports found */function(e,t,n){"use strict";e.exports=function(){var e=document.createElement("div");return e.textContent="Hi there and greetings!",e}},"./app/css/maincss.css":
/*!*****************************!*\
  !*** ./app/css/maincss.css ***!
  \*****************************/
/*! no static exports found */function(e,t,n){},"./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no static exports found */function(e,t,n){"use strict";n(/*! ../css/maincss.css */"./app/css/maincss.css");!function(e){e&&e.__esModule}(n(/*! ../less/mainless.less */"./app/less/mainless.less"));var r=n(/*! ../common/Greeter.js */"./app/common/Greeter.js");document.querySelector("#root").appendChild(r())},"./app/less/mainless.less":
/*!********************************!*\
  !*** ./app/less/mainless.less ***!
  \********************************/
/*! no static exports found */function(e,t,n){}});