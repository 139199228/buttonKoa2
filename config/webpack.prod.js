const path = require('path')
const webpack = require("webpack")
const ExtractTextPlugin=require("extract-text-webpack-plugin")
const LiveReloadPlugin = require('webpack-livereload-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log("webpack")
module.exports = {
    entry: {
        "index": [
            path.join(__dirname, '../src/public/scripts/index.es6'),
            path.join(__dirname, '../src/public/scripts/add.es6')
        ],
        "tag": path.join(__dirname, '../src/public/scripts/tag.es6')
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'public/scripts/[name]-[hash:5].js'
    },
    module: {
        rules: [{
            test:/\.es6$/,
            exclude:/node_modules|boewr_components/,
            use:{
                loader:"babel-loader",
                options:{
                    presets:["env"]
                }
            }
        },{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': "prod"
        }),
        new LiveReloadPlugin({appendScriptTag:true}),
        new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: './public/scripts/common/vendor-[hash:5].min.js',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            filename:'./views/layout.html',
            template:"./src/widget/layout.html",
            inject:false
        }),
        new HtmlWebpackPlugin({
            filename:'./views/index.html',
            template:"./src/views/index.js",
            inject:false,
            chunks:["vendor","index","tag"]
        }),
        new HtmlWebpackPlugin({
            filename:'./widget/index.html',
            template:"./src/widget/index.html",
            inject:false
        }),
    ]
}