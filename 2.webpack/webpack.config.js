const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: { 
        main: './src/index',
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
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/dist/',
    }
};