var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'client'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            },
        },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }]
    },
    mode:'development'
};
