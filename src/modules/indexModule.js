'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _os = require('os');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Module = function () {
    function Module(ctx) {
        _classCallCheck(this, Module);

        this.ctx = ctx;
    }

    _createClass(Module, [{
        key: 'Updata',
        value: function Updata() {
            var options = {
                uri: 'http://localhost/myphp/koa2php/index.php',
                methods: "GET"
            };
            // rpA('http://www.baidu.com')
            //         .then(function (htmlString) {
            //             // Process html...c
            //             console.log(htmlString)
            //         })
            //         .catch(function (err) {
            //             // Crawling failed...
            //             console.log(err)

            //         });

            return new Promise(function (resolve, reject) {
                (0, _requestPromise2.default)(options).then(function (result) {
                    console.log(result);
                    var info = JSON.parse(result);
                    console.log(info);
                    if (info) {
                        console.log("->", info);
                        resolve(info);
                    } else {
                        console.log("2222222");
                        reject({});
                    }
                    console.log(info);
                });
            });
        }
    }]);

    return Module;
}();

exports.default = Module;
