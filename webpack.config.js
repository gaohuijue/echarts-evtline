var PROD = process.argv.indexOf('-p') >= 0;
var webpack = require('webpack');
var babel = require('babel-core');

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
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')]
        }],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
