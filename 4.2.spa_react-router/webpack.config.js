const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: { 
        main: './index',
    }, 
    module: {
        rules: [{
            test: /\.js?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    '@babel/preset-react'
                ],
                plugins: [
                ]
            }
        }]
    },
    devServer: {
        port: 3000,
    },       
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/dist/',
    }
};