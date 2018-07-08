"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexModule = require("../modules/indexModule");

var _indexModule2 = _interopRequireDefault(_indexModule);

var _async_hooks = require("async_hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var controller = {
    index: function index() {
        var _this = this;

        return function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return ctx.render('index.html', {
                                    title: "大拇指"
                                });

                            case 2:
                                ctx.body = _context.sent;

                            case 3:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }));

            return function (_x, _x2) {
                return _ref.apply(this, arguments);
            };
        }();
    },
    upData: function upData() {
        var _this2 = this;

        return function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
                var index;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                index = new _indexModule2.default(ctx);

                                console.log(index.Updata());
                                _context2.next = 4;
                                return index.Updata();

                            case 4:
                                ctx.body = _context2.sent;

                            case 5:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x3, _x4) {
                return _ref2.apply(this, arguments);
            };
        }();
    }
};
exports.default = controller;