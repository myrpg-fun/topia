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

eval("// Module\nvar code = \"<template id=\\\"message\\\">\\n    <div class=\\\"message-item\\\">\\n        <div class=\\\"mi-color\\\"></div>\\n        <div class=\\\"mi-name\\\">User</div>\\n        <div class=\\\"mi-message\\\">Message1</div>\\n    </div>\\n</template>\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./topia/chat.html?");

/***/ }),

/***/ "./topia/chat.js":
/*!***********************!*\
  !*** ./topia/chat.js ***!
  \***********************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lizzi */ \"../libs/lizzi/index.js\");\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lizzi__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lizzi/DOM */ \"../libs/lizzi/DOM/index.js\");\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lizzi_DOM__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.css */ \"./topia/chat.css\");\n/* harmony import */ var _chat_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chat_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst T = Object(lizzi_DOM__WEBPACK_IMPORTED_MODULE_1__[\"Loader\"])(__webpack_require__(/*! ./chat.html */ \"./topia/chat.html\"));\n\nclass Message extends lizzi__WEBPACK_IMPORTED_MODULE_0__[\"Data\"]{\n    createView(){\n        return T.createView('#message', this)\n            .style('.mi-color', {\n                background: this.ref('color')\n            })\n            .text('.mi-name', this.ref('name'))\n            .text('.mi-message', this.ref('message'));\n    }\n    \n    constructor(color, name, message){\n        super({\n            color: color,\n            name: name,\n            message: message\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///./topia/chat.js?");

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

eval("// Module\nvar code = \"<template id=\\\"app\\\">\\n    <div>\\n        <div class=\\\"app\\\"></div>\\n        <div class=\\\"calls\\\"></div>\\n        <div class=\\\"chat\\\"></div>\\n    </div>\\n</template>\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./topia/gameApp.html?");

/***/ }),

/***/ "./topia/gameApp.js":
/*!**************************!*\
  !*** ./topia/gameApp.js ***!
  \**************************/
/*! exports provided: GameApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameApp\", function() { return GameApp; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"../node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lizzi */ \"../libs/lizzi/index.js\");\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lizzi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lizzi/DOM */ \"../libs/lizzi/DOM/index.js\");\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lizzi_DOM__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _gameApp_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gameApp.css */ \"./topia/gameApp.css\");\n/* harmony import */ var _gameApp_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_gameApp_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nconst T = Object(lizzi_DOM__WEBPACK_IMPORTED_MODULE_2__[\"Loader\"])(__webpack_require__(/*! ./gameApp.html */ \"./topia/gameApp.html\"));\n\nconst devicePixelRatio = window.devicePixelRatio || 1;\n\nclass GameApp extends lizzi__WEBPACK_IMPORTED_MODULE_1__[\"Data\"]{\n    initRenderer(field){\n        let el = field.find('.app')[0];\n\n        el.appendChild(this.pixi.view);\n\n        let resize = () => {\n            this.pixi.renderer.resize(el.clientWidth, el.clientHeight);\n\n            this.container.x = el.clientWidth / devicePixelRatio / 2;\n            this.container.y = el.clientHeight / devicePixelRatio / 2;\n        };\n\n        window.addEventListener('resize', resize);\n\n        //resize after append\n        setTimeout(resize, 0);\n    }\n    \n    createView(){\n        return T.createView('#app', this)\n            .init(this.initRenderer.bind(this))\n            .view('.calls', this.ref('portraitsUI'))\n            .view('.chat', this.ref('chatUI'))\n            .click('.chat', this.closeChat.bind(this))\n            .if('.chat', this.ref('chatUI'));\n    }\n    \n    showCallUI(player){\n        this.portraitsUI = player.createCallsUIView();\n    }\n\n    initPixi(){\n        //init PIXI app\n        this.pixi = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Application\"]({\n            width: 0, height: 0, resolution: devicePixelRatio, backgroundColor: 0xFFFFFF\n        });\n\n        this.container = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Container\"]();\n        \n        this.pixi.stage.addChild(this.container);\n        \n        // Create a background\n        const texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].from(__webpack_require__(/*! ./img/background.jpg */ \"./topia/img/background.jpg\").default);\n        const background = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"](texture);\n        background.anchor.x = texture.width / 2;\n        background.anchor.y = texture.height / 2;\n        background.zIndex = -100000;\n        this.container.addChild(background);\n        \n        this.pixi.ticker.add((delta) => {\n            this.container.children.sort((a, b) => a.zIndex - b.zIndex);\n        });        \n    }\n    \n    closeChat(){\n        this.chatUI = null;\n    }\n    \n    constructor(players){\n        super();\n\n        this.initPixi();\n        \n        this.set({\n            portraitsUI: null,\n            chatUI: null\n        });\n        \n        this.players = new lizzi__WEBPACK_IMPORTED_MODULE_1__[\"Collection\"]([]);\n        \n        this.players.on('add', (player) => {\n            player.emit('add-to', this);\n            \n            player.on('change-coords', p1 => {\n                //if players over\n                let players = this.players.elements;\n                for (let p2 of players){\n                    let dx = p1.x - p2.x;\n                    let dy = p1.y - p2.y;\n\n                    let len = Math.sqrt(dx*dx + dy*dy);\n                    if (len < 80){\n                        p1.emit('player-over', p2, p1);\n                        p2.emit('player-over', p1, p2);\n                    }else{\n                        p1.emit('player-out', p2, p1);\n                        p2.emit('player-out', p1, p2);\n                    }\n                }\n            }).call(player);\n            \n            player.on('open-chat', (player) => {\n                this.chatUI = player.createChatUIView();\n            });\n            \n            player.on('close-chat', () => {\n                this.closeChat();\n            });\n        });\n        \n        this.players.add(players);\n    }\n}\n\n\n\n//# sourceURL=webpack:///./topia/gameApp.js?");

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

eval("// Imports\nvar ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\nvar ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./img/pl1.jpg */ \"./topia/img/pl1.jpg\");\nvar ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./img/volume.png */ \"./topia/img/volume.png\");\n// Module\nvar ___HTML_LOADER_REPLACER_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACER_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);\nvar code = \"<template id=\\\"portraits\\\">\\n    <div class=\\\"portraits\\\"></div>\\n</template>\\n\\n<template id=\\\"player\\\">\\n    <div class=\\\"player\\\">\\n        <div class=\\\"rounded\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACER_0___ + \"\\\" />\\n        </div>\\n        <div class=\\\"volume\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACER_1___ + \"\\\" />\\n        </div>\\n        <div class=\\\"menu\\\">\\n            <div class=\\\"menu-item\\\">\\n                <div class=\\\"volume-slider\\\">\\n                    <div class=\\\"slider\\\"></div>\\n                </div>\\n            </div>\\n            <div class=\\\"menu-item menu-send\\\">\\n                Send message\\n            </div>\\n            <div class=\\\"menu-item menu-hide\\\">\\n                Invite to follow\\n            </div>\\n            <div class=\\\"menu-item menu-hide\\\">\\n                Block\\n            </div>\\n        </div>\\n    </div>\\n</template>\\n\\n<template id=\\\"chat\\\">\\n    <div class=\\\"center-position\\\">\\n        <div class=\\\"rounded chat-image\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACER_0___ + \"\\\" />\\n        </div>\\n        <div class=\\\"chat-header\\\">\\n            Messages\\n        </div>\\n        <div class=\\\"chat-close\\\">\\n            X\\n        </div>\\n        <div class=\\\"messages\\\"></div>\\n    </div>\\n</template>\\n\\n\";\n// Exports\nmodule.exports = code;\n\n//# sourceURL=webpack:///./topia/player.html?");

/***/ }),

/***/ "./topia/player.js":
/*!*************************!*\
  !*** ./topia/player.js ***!
  \*************************/
/*! exports provided: PlayerControl, Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PlayerControl\", function() { return PlayerControl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Player\", function() { return Player; });\n/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ \"../node_modules/pixi.js/lib/pixi.es.js\");\n/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delay */ \"./topia/delay.js\");\n/* harmony import */ var _delay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_delay__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lizzi */ \"../libs/lizzi/index.js\");\n/* harmony import */ var lizzi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lizzi__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lizzi/DOM */ \"../libs/lizzi/DOM/index.js\");\n/* harmony import */ var lizzi_DOM__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lizzi_DOM__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player.css */ \"./topia/player.css\");\n/* harmony import */ var _player_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_player_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\nconst T = Object(lizzi_DOM__WEBPACK_IMPORTED_MODULE_3__[\"Loader\"])(__webpack_require__(/*! ./player.html */ \"./topia/player.html\"));\n\nconst accel = {fast: 0.1, slow: 0.2, speed: 3};\n\nclass PlayerControl extends lizzi__WEBPACK_IMPORTED_MODULE_2__[\"Data\"]{\n    constructor(){\n        super({\n            up: false,\n            down: false,\n            left: false,\n            right: false\n        });\n        \n        window.addEventListener('keydown', e => {\n            switch(e.code){\n                case 'ArrowUp':\n                case 'KeyW':\n                    this.up = true;\n                    break;\n                case 'ArrowDown':\n                case 'KeyS':\n                    this.down = true;\n                    break;\n                case 'ArrowLeft':\n                case 'KeyA':\n                    this.left = true;\n                    break;\n                case 'ArrowRight':\n                case 'KeyD':\n                    this.right = true;\n                    break;\n            }\n        });\n        \n        window.addEventListener('keyup', e => {\n            switch(e.code){\n                case 'ArrowUp':\n                case 'KeyW':\n                    this.up = false;\n                    break;\n                case 'ArrowDown':\n                case 'KeyS':\n                    this.down = false;\n                    break;\n                case 'ArrowLeft':\n                case 'KeyA':\n                    this.left = false;\n                    break;\n                case 'ArrowRight':\n                case 'KeyD':\n                    this.right = false;\n                    break;\n            }\n        });\n    }\n}\n\nclass Player extends lizzi__WEBPACK_IMPORTED_MODULE_2__[\"Data\"]{\n    addControl(control){\n        control.on('set:up', ev => this.ay = ev.value?-0.1:0);\n        control.on('set:down', ev => this.ay = ev.value?0.1:0);\n        control.on('set:left', ev => {\n            this.ax = ev.value?-accel.fast:0;\n            this.look = 1;\n        });\n        control.on('set:right', ev => {\n            this.ax = ev.value?accel.fast:0;\n            this.look = -1;\n        });\n        \n        return this;\n    }\n    \n    createCallView(){\n        let data = new lizzi__WEBPACK_IMPORTED_MODULE_2__[\"Data\"]({\n            hide: false,\n            hideMenu: true,\n            sound: 50\n        });\n        \n        return T.createView('#player', this)\n            .init(async () => {\n                data.hide = true;\n                await _delay__WEBPACK_IMPORTED_MODULE_1___default()(0);\n                data.hide = false;\n            }, async () => {\n                data.hide = true;\n                await _delay__WEBPACK_IMPORTED_MODULE_1___default()(300);\n            })\n            .attr('.rounded img', {\n                src: this.ref('portrait')\n            })\n            .click('.player .rounded, .player .volume', () => {\n                data.hideMenu = !data.hideMenu;\n            })\n            .class('.player', {\n                fadeout: data.ref('hide')\n            })\n            .click('.menu-hide', () => {\n                data.hideMenu = true;\n            })\n            .click('.menu-send', () => {\n                data.hideMenu = true;\n                this.emit('open-chat', this);\n            })\n            .class('.menu', {\n                fadeout: data.ref('hideMenu')\n            })\n            .click('.volume-slider', (el, view, ev) => {\n                let rect = el.getBoundingClientRect();\n                data.sound = Math.max(0, ev.clientX - rect.left - 10)*100/(rect.width - 20);\n            })\n            .style('.slider', {\n                width: [data.ref('sound'), '%']\n            })\n            .style('.player', {\n                left: [this.ref('viewX'), 'px'],\n                boxShadow: [\"0px 0px 20px \", this.ref('color'), \", 0px 0px 10px \", this.ref('color')]\n            });\n    }\n    \n    createCallsUIView(){\n        return T.createView('#portraits', this)\n            .collection('.portraits', this.userPortraitsUI, 'createCallView', true);\n    }\n    \n    createChatUIView(){\n        return T.createView('#chat', this)\n            .attr('.rounded img', {\n                src: this.ref('portrait')\n            })\n            .collection('.messages', this.messages, 'createView');\n    }\n    \n    spriteInit(sprite){\n        this.texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Texture\"].from(sprite);\n        this.sprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__[\"Sprite\"](this.texture);\n        this.sprite.anchor.x = 0.5;\n        this.sprite.anchor.y = 1;\n        \n        this.on('add-to', (app) => {\n            app.container.addChild(this.sprite);\n            \n            //pixi ticker needs to make global\n            app.pixi.ticker.add((delta) => {\n                //change acceleration/coordinates per tick\n                if (this.ax === 0){\n                    this.vx += -Math.sign(this.vx)*accel.slow;\n                    if (Math.abs(this.vx)<= accel.slow){\n                        this.vx = 0;\n                    }\n                }\n                this.vx = Math.min(accel.speed, Math.max(-accel.speed, this.vx + this.ax * delta));\n                \n                if (this.ay === 0){\n                    this.vy += -Math.sign(this.vy)*accel.slow;\n                    if (Math.abs(this.vy)<= accel.slow){\n                        this.vy = 0;\n                    }\n                }\n                this.vy = Math.min(accel.speed, Math.max(-accel.speed, this.vy + this.ay * delta));\n                \n                this.x += this.vx * delta;\n                this.y += this.vy * delta;\n            });\n        });\n        \n        this.on(['set:x', 'set:y'], () => {\n            //move sprite\n            this.sprite.x = this.x;\n            this.sprite.y = this.y;\n            this.sprite.zIndex = this.y;\n        }).run();\n        \n        this.on(['set:look'], () => {\n            //rotate sprite\n            this.sprite.scale.x = this.look;\n        }).run();\n    }\n    \n    portraitInit(portrait, color){\n        this.userPortraits = new lizzi__WEBPACK_IMPORTED_MODULE_2__[\"Collection\"]([]);\n        \n        this.set({\n            viewX: 0\n        });\n        \n        this.userPortraitsUI = new lizzi__WEBPACK_IMPORTED_MODULE_2__[\"LazyCollection\"](this.userPortraits).setFilter(values => {\n            let len = values.length;\n            //sort by X\n            values.forEach((v, i) => v.viewX = i * 200 - (len - 1) * 200 / 2);\n            \n            return values;\n        });\n        \n        this.on(['set:x', 'set:y'], () => {\n            this.emit('change-coords', this);\n        });\n        \n        this.on('player-over', player => {\n            if (!this.userPortraits.has(player)){\n                this.userPortraits.add(player);\n            }\n        });\n        \n        this.on('player-out', player => {\n            if (this.userPortraits.has(player)){\n                this.userPortraits.remove(player);\n            }\n        });\n        \n        this.set({\n            portrait: portrait,\n            color: color\n        });\n    }\n    \n    addMessages(messages){\n        this.messages.add(messages);\n        \n        return this;\n    }\n    \n    constructor(x, y, options){\n        super({\n            //coords\n            x: x,\n            y: y,\n            //velocity\n            vx: 0,\n            vy: 0,\n            //acceleration\n            ax: 0,\n            ay: 0,\n            //look at (1, -1)\n            look: 1\n        });\n        \n        this.spriteInit(options.sprite);\n        this.portraitInit(options.portrait, options.color);\n        \n        this.messages = new lizzi__WEBPACK_IMPORTED_MODULE_2__[\"Collection\"]([]);\n    }\n};\n\n//# sourceURL=webpack:///./topia/player.js?");

/***/ })

}]);