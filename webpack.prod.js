const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            test: /\.js($|\?)/i,
            uglifyOptions: {
                compress  : true,
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
});