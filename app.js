"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaStatic = require("koa-static");

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _koaSwig = require("koa-swig");

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _koaSimpleRouter = require("koa-simple-router");

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _register = require("babel-core/register");

var _register2 = _interopRequireDefault(_register);

var _babelPolyfill = require("babel-polyfill");

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _co = require("co");

var _co2 = _interopRequireDefault(_co);

var _init = require("./controller/init");

var _init2 = _interopRequireDefault(_init);

var _config = require("./config/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
_init2.default.init(app, _koaSimpleRouter2.default);
app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.get("viewDiv"),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}));

app.use((0, _koaStatic2.default)(_config2.default.get("startDiv")));

app.listen(_config2.default.get("prot"));

exports.default = app;
