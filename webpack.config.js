const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
// const StylusPlugin = require('stylus_plugin');

module.exports = {
    entry: {
        'e.js': './src/js.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'e.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/e.template.html',
            filename: 'e.html',
            inject: true,
            inlineSource: '.(js|css)$'
        }),
        new HtmlWebpackInlineSourcePlugin()
        // new StylusPlugin({

        // })
    ],
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },

    stats: {
        builtAt: true
    }
}