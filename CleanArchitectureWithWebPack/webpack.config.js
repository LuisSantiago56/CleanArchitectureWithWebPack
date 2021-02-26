const path = require('path');

const webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    mode: 'development',
    entry: {
        App: ['./src/main.js'],
        App_hmr: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', 'vue', './src/main.js']
    },
    output: {
        path: path.join(__dirname, 'wwwroot'),
        publicPath: '/',
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            // ... other rules
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        /* make sure to include the plugin!*/
        new VueLoaderPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}