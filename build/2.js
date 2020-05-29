(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./404/index.html":
/*!************************!*\
  !*** ./404/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<div id=\\\"e404\\\">\\r\\n    <h1>Topia</h1>\\r\\n    <div class=\\\"input-header\\\">404 Error: Page not found</div>\\r\\n</div>\\r\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./404/index.html?");

/***/ }),

/***/ "./404/index.js":
/*!**********************!*\
  !*** ./404/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst {Data, Collection, CollectionFilter} = __webpack_require__(/*! lizzi */ \"../libs/lizzi/index.js\");\r\nconst {Loader} = __webpack_require__(/*! lizzi/DOM */ \"../libs/lizzi/DOM/index.js\");\r\n\r\nconst T = Loader( __webpack_require__(/*! ./index.html */ \"./404/index.html\") );\r\n\r\nclass E404App extends Data{\r\n    createView(){\r\n        return T.createView('#e404', this)\r\n            .route('a', [])\r\n            .init(function(field){\r\n                let el = field.find('.menu-block').elements[0];\r\n                function doResize() {\r\n                    var scale;\r\n\r\n                    var elWidth = 1920;\r\n                    var elHeight = 1080;\r\n\r\n                    scale = Math.min(\r\n                      window.innerWidth / elWidth,    \r\n                      window.innerHeight / elHeight\r\n                    );\r\n\r\n                    el.setAttribute('style', \"transform:translate(-50%, -50%) \" + \"scale(\" + scale + \")\");\r\n                }\r\n\r\n                window.onresize = doResize;\r\n                doResize();\r\n            });        \r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (new E404App);\n\n//# sourceURL=webpack:///./404/index.js?");

/***/ })

}]);