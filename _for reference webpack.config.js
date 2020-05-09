const path = require('path');
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: "none",
    entry: './src/client/index.js',
    module: {
        //loaders: they transform from one type to another
        rules: [{

            test: '/\.js$/',
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    //plugins:
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        })
    ]
}