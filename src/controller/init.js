"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require("./index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controller = {
    init: function init(app, router) {
        app.use(router(function (_) {
            _.get("/index/index", _index2.default.index());
            _.get("/index/num", _index2.default.upData());
        }));
    }
};
exports.default = controller;
