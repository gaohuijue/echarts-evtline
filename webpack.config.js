'use strict';
const PROD = process.argv.indexOf('-p') >= 0;
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'echarts-evtline': __dirname + '/index.js'
    },
    output: {
        libraryTarget: 'umd',
        library: ['echarts-evtline'],
        path: __dirname + '/dist',
        filename: PROD ? '[name].min.js' : '[name].js'
    },
    externals: {
        'echarts/lib/echarts': 'echarts'
    },
    resolve: {
        alias: {
            'echarts/lib/echarts': 'echarts'
        }
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ] : [],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            exclude: /node_modules/,
            options: {
                failOnError: true,
                outputReport: {
                    filePath: 'checkstyle.xml',
                    formatter: require ('eslint/lib/formatters/checkstyle')
                }
            }
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    }
};
