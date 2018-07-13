const webpackDev = require('./config/webpack.dev')
const webpackProd = require('./config/webpack.prod')
console.log(process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
    case "dev":
        module.exports = webpackDev
        break;
    case "prod":
        module.exports = webpackProd
        break;
    default:
        module.exports = webpackDev
}