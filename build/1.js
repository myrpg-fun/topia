(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./topia/app.css":
/*!***********************!*\
  !*** ./topia/app.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./topia/app.css?");

/***/ }),

/***/ "./topia/app.js":
/*!**********************!*\
  !*** ./topia/app.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.css */ \"./topia/app.css\");\n/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gameApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameApp */ \"./topia/gameApp.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./topia/player.js\");\n/* harmony import */ var _chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat */ \"./topia/chat.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet player1;\r\n\r\nconst MainApp = new _gameApp__WEBPACK_IMPORTED_MODULE_1__[\"GameApp\"]([\r\n    player1 = new _player__WEBPACK_IMPORTED_MODULE_2__[\"Player\"](-100, 0, {\r\n        sprite: __webpack_require__(/*! ./img/pl1.png */ \"./topia/img/pl1.png\").default,\r\n        portrait: __webpack_require__(/*! ./img/pl1.jpg */ \"./topia/img/pl1.jpg\").default,\r\n        color: '#cacd87'\r\n    } ).addControl( new _player__WEBPACK_IMPORTED_MODULE_2__[\"PlayerControl\"] ).addMessages([\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#cacd87', 'Dylan', 'Message 1'),\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#87c9cd', 'James', 'Message 2'),\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#cacd87', 'Dylan', 'Message 3'),\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#cacd87', 'Dylan', 'Message 4')\r\n    ]),\r\n    new _player__WEBPACK_IMPORTED_MODULE_2__[\"Player\"](100, 0, {\r\n        sprite: __webpack_require__(/*! ./img/pl2.png */ \"./topia/img/pl2.png\").default,\r\n        portrait: __webpack_require__(/*! ./img/pl2.jpg */ \"./topia/img/pl2.jpg\").default,\r\n        color: '#87c9cd'\r\n    } ).addMessages([\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#87c9cd', 'Hayden', 'Message 1'),\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#cacd87', 'Dylan', 'Message 2'),\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#87c9cd', 'Hayden', 'Message 3'),\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#87c9cd', 'Hayden', 'Message 4'),\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#cacd87', 'Dylan', 'Message 5'),\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#87c9cd', 'Hayden', 'Message 6'),\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#87c9cd', 'Hayden', 'Message 7')\r\n    ]),\r\n    new _player__WEBPACK_IMPORTED_MODULE_2__[\"Player\"](100, 100, {\r\n        sprite: __webpack_require__(/*! ./img/pl3.png */ \"./topia/img/pl3.png\").default,\r\n        portrait: __webpack_require__(/*! ./img/pl3.jpg */ \"./topia/img/pl3.jpg\").default,\r\n        color: '#cd8ad1'\r\n    } ).addMessages([\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#cacd87', 'Dylan', 'Message 1'),\r\n        new _chat__WEBPACK_IMPORTED_MODULE_3__[\"Message\"]('#cd8ad1', 'Dan', 'Message 2')\r\n    ])\r\n]);\r\n\r\nMainApp.showCallUI(player1);\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainApp);\n\n//# sourceURL=webpack:///./topia/app.js?");

/***/ }),

/***/ "./topia/chat.css":
/*!************************!*\
  !*** ./topia/chat.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./topia/chat.css?");

/***/ }),

/***/ "./topia/chat.html":
/*!*************************!*\
  !*** ./topia/chat.html ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<template id=\\\"message\\\">\\r\\n    <div class=\\\"message-item\\\">\\r\\n        <div class=\\\"mi-color\\\"></div>\\r\\n        <div class=\\\"mi-name\\\">User</div>\\r\\n        <div class=\\\"mi-message\\\">Message1</div>\\r\\n    </div>\\r\\n</template>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./topia/chat.html?");

/***/ }),

/***/ "./topia/chat.js":
/*!***********************!*\
  !*** ./topia/chat.js ***!
  \***********************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lizzi */ \"../libs/lizzi/index.js\");\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lizzi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lizzi/DOM */ \"../libs/lizzi/DOM/index.js\");\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lizzi_DOM__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.css */ \"./topia/chat.css\");\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chat_css__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nconst T = Object(lizzi_DOM__WEBPACK_IMPORTED_MODULE_1__[\"Loader\"])(__webpack_require__(/*! ./chat.html */ \"./topia/chat.html\"));\r\n\r\nclass Message extends lizzi__WEBPACK_IMPORTED_MODULE_0__[\"Data\"]{\r\n    createView(){\r\n        return T.createView('#message', this)\r\n            .style('.mi-color', {\r\n                background: this.ref('color')\r\n            })\r\n            .text('.mi-name', this.ref('name'))\r\n            .text('.mi-message', this.ref('message'));\r\n    }\r\n    \r\n    constructor(color, name, message){\r\n        super({\r\n            color: color,\r\n            name: name,\r\n            message: message\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./topia/chat.js?");

/***/ }),

/***/ "./topia/delay.js":
/*!************************!*\
  !*** ./topia/delay.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ms => new Promise(res => setTimeout(res, ms));\r\n\n\n//# sourceURL=webpack:///./topia/delay.js?");

/***/ }),

/***/ "./topia/gameApp.css":
/*!***************************!*\
  !*** ./topia/gameApp.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./topia/gameApp.css?");

/***/ }),

/***/ "./topia/gameApp.html":
/*!****************************!*\
  !*** ./topia/gameApp.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Module\nvar code = \"<template id=\\\"app\\\">\\r\\n    <div>\\r\\n        <div class=\\\"app\\\"></div>\\r\\n        <div class=\\\"calls\\\"></div>\\r\\n        <div class=\\\"chat\\\"></div>\\r\\n    </div>\\r\\n</template>\\r\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./topia/gameApp.html?");

/***/ }),

/***/ "./topia/gameApp.js":
/*!**************************!*\
  !*** ./topia/gameApp.js ***!
  \**************************/
/*! exports provided: GameApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameApp\", function() { return GameApp; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"../node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lizzi */ \"../libs/lizzi/index.js\");\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lizzi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lizzi/DOM */ \"../libs/lizzi/DOM/index.js\");\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lizzi_DOM__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gameApp_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameApp.css */ \"./topia/gameApp.css\");\n/* harmony import */ var _gameApp_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gameApp_css__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n\r\nconst T = Object(lizzi_DOM__WEBPACK_IMPORTED_MODULE_2__[\"Loader\"])(__webpack_require__(/*! ./gameApp.html */ \"./topia/gameApp.html\"));\r\n\r\nconst devicePixelRatio = window.devicePixelRatio || 1;\r\n\r\nclass GameApp extends lizzi__WEBPACK_IMPORTED_MODULE_1__[\"Data\"]{\r\n    initRenderer(field){\r\n        let el = field.find('.app')[0];\r\n\r\n        el.appendChild(this.pixi.view);\r\n\r\n        let resize = () => {\r\n            this.pixi.renderer.resize(el.clientWidth, el.clientHeight);\r\n\r\n            this.container.x = el.clientWidth / devicePixelRatio / 2;\r\n            this.container.y = el.clientHeight / devicePixelRatio / 2;\r\n        };\r\n\r\n        window.addEventListener('resize', resize);\r\n\r\n        //resize after append\r\n        setTimeout(resize, 0);\r\n    }\r\n    \r\n    createView(){\r\n        return T.createView('#app', this)\r\n            .init(this.initRenderer.bind(this))\r\n            .view('.calls', this.ref('portraitsUI'))\r\n            .view('.chat', this.ref('chatUI'))\r\n            .click('.chat', this.closeChat.bind(this))\r\n            .if('.chat', this.ref('chatUI'));\r\n    }\r\n    \r\n    showCallUI(player){\r\n        this.portraitsUI = player.createCallsUIView();\r\n    }\r\n\r\n    initPixi(){\r\n        //init PIXI app\r\n        this.pixi = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Application\"]({\r\n            width: 0, height: 0, resolution: devicePixelRatio, backgroundColor: 0xFFFFFF\r\n        });\r\n\r\n        this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"]();\r\n        \r\n        this.pixi.stage.addChild(this.container);\r\n        \r\n        // Create a background\r\n        const texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].from(__webpack_require__(/*! ./img/background.jpg */ \"./topia/img/background.jpg\").default);\r\n        const background = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"](texture);\r\n        background.anchor.x = texture.width / 2;\r\n        background.anchor.y = texture.height / 2;\r\n        background.zIndex = -100000;\r\n        this.container.addChild(background);\r\n        \r\n        this.pixi.ticker.add((delta) => {\r\n            this.container.children.sort((a, b) => a.zIndex - b.zIndex);\r\n        });        \r\n    }\r\n    \r\n    closeChat(){\r\n        this.chatUI = null;\r\n    }\r\n    \r\n    constructor(players){\r\n        super();\r\n\r\n        this.initPixi();\r\n        \r\n        this.set({\r\n            portraitsUI: null,\r\n            chatUI: null\r\n        });\r\n        \r\n        this.players = new lizzi__WEBPACK_IMPORTED_MODULE_1__[\"Collection\"]([]);\r\n        \r\n        this.players.on('add', (player) => {\r\n            player.emit('add-to', this);\r\n            \r\n            player.on('change-coords', p1 => {\r\n                //if players over\r\n                let players = this.players.elements;\r\n                for (let p2 of players){\r\n                    let dx = p1.x - p2.x;\r\n                    let dy = p1.y - p2.y;\r\n\r\n                    let len = Math.sqrt(dx*dx + dy*dy);\r\n                    if (len < 80){\r\n                        p1.emit('player-over', p2, p1);\r\n                        p2.emit('player-over', p1, p2);\r\n                    }else{\r\n                        p1.emit('player-out', p2, p1);\r\n                        p2.emit('player-out', p1, p2);\r\n                    }\r\n                }\r\n            }).call(player);\r\n            \r\n            player.on('open-chat', (player) => {\r\n                this.chatUI = player.createChatUIView();\r\n            });\r\n            \r\n            player.on('close-chat', () => {\r\n                this.closeChat();\r\n            });\r\n        });\r\n        \r\n        this.players.add(players);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./topia/gameApp.js?");

/***/ }),

/***/ "./topia/img/background.jpg":
/*!**********************************!*\
  !*** ./topia/img/background.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dcec21164d68a579b89a25b4f5fae5d2.jpg\");\n\n//# sourceURL=webpack:///./topia/img/background.jpg?");

/***/ }),

/***/ "./topia/img/pl1.jpg":
/*!***************************!*\
  !*** ./topia/img/pl1.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a2acfcbad756cbdf4cee7d8ac9df695c.jpg\");\n\n//# sourceURL=webpack:///./topia/img/pl1.jpg?");

/***/ }),

/***/ "./topia/img/pl1.png":
/*!***************************!*\
  !*** ./topia/img/pl1.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"0d4457b3bb5ee61c84b4fc3620999fbb.png\");\n\n//# sourceURL=webpack:///./topia/img/pl1.png?");

/***/ }),

/***/ "./topia/img/pl2.jpg":
/*!***************************!*\
  !*** ./topia/img/pl2.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a1b2dfee174d782c3ed6f79df0d598ba.jpg\");\n\n//# sourceURL=webpack:///./topia/img/pl2.jpg?");

/***/ }),

/***/ "./topia/img/pl2.png":
/*!***************************!*\
  !*** ./topia/img/pl2.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"94c2960dea6195d05cd8ba8a3c83749e.png\");\n\n//# sourceURL=webpack:///./topia/img/pl2.png?");

/***/ }),

/***/ "./topia/img/pl3.jpg":
/*!***************************!*\
  !*** ./topia/img/pl3.jpg ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a493d4806c18e5d61e739db6582436df.jpg\");\n\n//# sourceURL=webpack:///./topia/img/pl3.jpg?");

/***/ }),

/***/ "./topia/img/pl3.png":
/*!***************************!*\
  !*** ./topia/img/pl3.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"304c4a1fd01f5ce69a7f85fe71396a4e.png\");\n\n//# sourceURL=webpack:///./topia/img/pl3.png?");

/***/ }),

/***/ "./topia/img/volume.png":
/*!******************************!*\
  !*** ./topia/img/volume.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6024754eb4121daa35f7eb0cec9b7e9b.png\");\n\n//# sourceURL=webpack:///./topia/img/volume.png?");

/***/ }),

/***/ "./topia/player.css":
/*!**************************!*\
  !*** ./topia/player.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./topia/player.css?");

/***/ }),

/***/ "./topia/player.html":
/*!***************************!*\
  !*** ./topia/player.html ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\nvar ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./img/pl1.jpg */ \"./topia/img/pl1.jpg\");\nvar ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./img/volume.png */ \"./topia/img/volume.png\");\n// Module\nvar ___HTML_LOADER_REPLACER_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACER_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);\nvar code = \"<template id=\\\"portraits\\\">\\r\\n    <div class=\\\"portraits\\\"></div>\\r\\n</template>\\r\\n\\r\\n<template id=\\\"player\\\">\\r\\n    <div class=\\\"player\\\">\\r\\n        <div class=\\\"rounded\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACER_0___ + \"\\\" />\\r\\n        </div>\\r\\n        <div class=\\\"volume\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACER_1___ + \"\\\" />\\r\\n        </div>\\r\\n        <div class=\\\"menu\\\">\\r\\n            <div class=\\\"menu-item\\\">\\r\\n                <div class=\\\"volume-slider\\\">\\r\\n                    <div class=\\\"slider\\\"></div>\\r\\n                </div>\\r\\n            </div>\\r\\n            <div class=\\\"menu-item menu-send\\\">\\r\\n                Send message\\r\\n            </div>\\r\\n            <div class=\\\"menu-item menu-hide\\\">\\r\\n                Invite to follow\\r\\n            </div>\\r\\n            <div class=\\\"menu-item menu-hide\\\">\\r\\n                Block\\r\\n            </div>\\r\\n        </div>\\r\\n    </div>\\r\\n</template>\\r\\n\\r\\n<template id=\\\"chat\\\">\\r\\n    <div class=\\\"center-position\\\">\\r\\n        <div class=\\\"rounded chat-image\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACER_0___ + \"\\\" />\\r\\n        </div>\\r\\n        <div class=\\\"chat-header\\\">\\r\\n            Messages\\r\\n        </div>\\r\\n        <div class=\\\"chat-close\\\">\\r\\n            X\\r\\n        </div>\\r\\n        <div class=\\\"messages\\\"></div>\\r\\n    </div>\\r\\n</template>\\r\\n\\r\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./topia/player.html?");

/***/ }),

/***/ "./topia/player.js":
/*!*************************!*\
  !*** ./topia/player.js ***!
  \*************************/
/*! exports provided: PlayerControl, Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerControl\", function() { return PlayerControl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"../node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay */ \"./topia/delay.js\");\n/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_delay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lizzi */ \"../libs/lizzi/index.js\");\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lizzi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lizzi/DOM */ \"../libs/lizzi/DOM/index.js\");\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lizzi_DOM__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.css */ \"./topia/player.css\");\n/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_player_css__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst T = Object(lizzi_DOM__WEBPACK_IMPORTED_MODULE_3__[\"Loader\"])(__webpack_require__(/*! ./player.html */ \"./topia/player.html\"));\r\n\r\nconst accel = {fast: 0.1, slow: 0.2, speed: 3};\r\n\r\nclass PlayerControl extends lizzi__WEBPACK_IMPORTED_MODULE_2__[\"Data\"]{\r\n    constructor(){\r\n        super({\r\n            up: false,\r\n            down: false,\r\n            left: false,\r\n            right: false\r\n        });\r\n        \r\n        window.addEventListener('keydown', e => {\r\n            switch(e.code){\r\n                case 'ArrowUp':\r\n                case 'KeyW':\r\n                    this.up = true;\r\n                    break;\r\n                case 'ArrowDown':\r\n                case 'KeyS':\r\n                    this.down = true;\r\n                    break;\r\n                case 'ArrowLeft':\r\n                case 'KeyA':\r\n                    this.left = true;\r\n                    break;\r\n                case 'ArrowRight':\r\n                case 'KeyD':\r\n                    this.right = true;\r\n                    break;\r\n            }\r\n        });\r\n        \r\n        window.addEventListener('keyup', e => {\r\n            switch(e.code){\r\n                case 'ArrowUp':\r\n                case 'KeyW':\r\n                    this.up = false;\r\n                    break;\r\n                case 'ArrowDown':\r\n                case 'KeyS':\r\n                    this.down = false;\r\n                    break;\r\n                case 'ArrowLeft':\r\n                case 'KeyA':\r\n                    this.left = false;\r\n                    break;\r\n                case 'ArrowRight':\r\n                case 'KeyD':\r\n                    this.right = false;\r\n                    break;\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\nclass Player extends lizzi__WEBPACK_IMPORTED_MODULE_2__[\"Data\"]{\r\n    addControl(control){\r\n        control.on('set:up', ev => this.ay = ev.value?-0.1:0);\r\n        control.on('set:down', ev => this.ay = ev.value?0.1:0);\r\n        control.on('set:left', ev => {\r\n            this.ax = ev.value?-accel.fast:0;\r\n            this.look = 1;\r\n        });\r\n        control.on('set:right', ev => {\r\n            this.ax = ev.value?accel.fast:0;\r\n            this.look = -1;\r\n        });\r\n        \r\n        return this;\r\n    }\r\n    \r\n    createCallView(){\r\n        let data = new lizzi__WEBPACK_IMPORTED_MODULE_2__[\"Data\"]({\r\n            hide: false,\r\n            hideMenu: true,\r\n            sound: 50\r\n        });\r\n        \r\n        return T.createView('#player', this)\r\n            .init(async () => {\r\n                data.hide = true;\r\n                await _delay__WEBPACK_IMPORTED_MODULE_1___default()(0);\r\n                data.hide = false;\r\n            }, async () => {\r\n                data.hide = true;\r\n                await _delay__WEBPACK_IMPORTED_MODULE_1___default()(300);\r\n            })\r\n            .attr('.rounded img', {\r\n                src: this.ref('portrait')\r\n            })\r\n            .click('.player .rounded, .player .volume', () => {\r\n                data.hideMenu = !data.hideMenu;\r\n            })\r\n            .class('.player', {\r\n                fadeout: data.ref('hide')\r\n            })\r\n            .click('.menu-hide', () => {\r\n                data.hideMenu = true;\r\n            })\r\n            .click('.menu-send', () => {\r\n                data.hideMenu = true;\r\n                this.emit('open-chat', this);\r\n            })\r\n            .class('.menu', {\r\n                fadeout: data.ref('hideMenu')\r\n            })\r\n            .click('.volume-slider', (el, view, ev) => {\r\n                let rect = el.getBoundingClientRect();\r\n                data.sound = Math.max(0, ev.clientX - rect.left - 10)*100/(rect.width - 20);\r\n            })\r\n            .style('.slider', {\r\n                width: [data.ref('sound'), '%']\r\n            })\r\n            .style('.player', {\r\n                left: [this.ref('viewX'), 'px'],\r\n                boxShadow: [\"0px 0px 20px \", this.ref('color'), \", 0px 0px 10px \", this.ref('color')]\r\n            });\r\n    }\r\n    \r\n    createCallsUIView(){\r\n        return T.createView('#portraits', this)\r\n            .collection('.portraits', this.userPortraitsUI, 'createCallView', true);\r\n    }\r\n    \r\n    createChatUIView(){\r\n        return T.createView('#chat', this)\r\n            .attr('.rounded img', {\r\n                src: this.ref('portrait')\r\n            })\r\n            .collection('.messages', this.messages, 'createView');\r\n    }\r\n    \r\n    spriteInit(sprite){\r\n        this.texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].from(sprite);\r\n        this.sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"](this.texture);\r\n        this.sprite.anchor.x = 0.5;\r\n        this.sprite.anchor.y = 1;\r\n        \r\n        this.on('add-to', (app) => {\r\n            app.container.addChild(this.sprite);\r\n            \r\n            //pixi ticker needs to make global\r\n            app.pixi.ticker.add((delta) => {\r\n                //change acceleration/coordinates per tick\r\n                if (this.ax === 0){\r\n                    this.vx += -Math.sign(this.vx)*accel.slow;\r\n                    if (Math.abs(this.vx)<= accel.slow){\r\n                        this.vx = 0;\r\n                    }\r\n                }\r\n                this.vx = Math.min(accel.speed, Math.max(-accel.speed, this.vx + this.ax * delta));\r\n                \r\n                if (this.ay === 0){\r\n                    this.vy += -Math.sign(this.vy)*accel.slow;\r\n                    if (Math.abs(this.vy)<= accel.slow){\r\n                        this.vy = 0;\r\n                    }\r\n                }\r\n                this.vy = Math.min(accel.speed, Math.max(-accel.speed, this.vy + this.ay * delta));\r\n                \r\n                this.x += this.vx * delta;\r\n                this.y += this.vy * delta;\r\n            });\r\n        });\r\n        \r\n        this.on(['set:x', 'set:y'], () => {\r\n            //move sprite\r\n            this.sprite.x = this.x;\r\n            this.sprite.y = this.y;\r\n            this.sprite.zIndex = this.y;\r\n        }).run();\r\n        \r\n        this.on(['set:look'], () => {\r\n            //rotate sprite\r\n            this.sprite.scale.x = this.look;\r\n        }).run();\r\n    }\r\n    \r\n    portraitInit(portrait, color){\r\n        this.userPortraits = new lizzi__WEBPACK_IMPORTED_MODULE_2__[\"Collection\"]([]);\r\n        \r\n        this.set({\r\n            viewX: 0\r\n        });\r\n        \r\n        this.userPortraitsUI = new lizzi__WEBPACK_IMPORTED_MODULE_2__[\"LazyCollection\"](this.userPortraits).setFilter(values => {\r\n            let len = values.length;\r\n            //sort by X\r\n            values.forEach((v, i) => v.viewX = i * 200 - (len - 1) * 200 / 2);\r\n            \r\n            return values;\r\n        });\r\n        \r\n        this.on(['set:x', 'set:y'], () => {\r\n            this.emit('change-coords', this);\r\n        });\r\n        \r\n        this.on('player-over', player => {\r\n            if (!this.userPortraits.has(player)){\r\n                this.userPortraits.add(player);\r\n            }\r\n        });\r\n        \r\n        this.on('player-out', player => {\r\n            if (this.userPortraits.has(player)){\r\n                this.userPortraits.remove(player);\r\n            }\r\n        });\r\n        \r\n        this.set({\r\n            portrait: portrait,\r\n            color: color\r\n        });\r\n    }\r\n    \r\n    addMessages(messages){\r\n        this.messages.add(messages);\r\n        \r\n        return this;\r\n    }\r\n    \r\n    constructor(x, y, options){\r\n        super({\r\n            //coords\r\n            x: x,\r\n            y: y,\r\n            //velocity\r\n            vx: 0,\r\n            vy: 0,\r\n            //acceleration\r\n            ax: 0,\r\n            ay: 0,\r\n            //look at (1, -1)\r\n            look: 1\r\n        });\r\n        \r\n        this.spriteInit(options.sprite);\r\n        this.portraitInit(options.portrait, options.color);\r\n        \r\n        this.messages = new lizzi__WEBPACK_IMPORTED_MODULE_2__[\"Collection\"]([]);\r\n    }\r\n};\n\n//# sourceURL=webpack:///./topia/player.js?");

/***/ })

}]);