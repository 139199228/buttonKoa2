"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONFIG = new Map();
CONFIG.set("prot", 3000);
CONFIG.set("startDiv", _path2.default.join(__dirname, "../public"));
CONFIG.set("viewDiv", _path2.default.join(__dirname, "../views"));
exports.default = CONFIG;
