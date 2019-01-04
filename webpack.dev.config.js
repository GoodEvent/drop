const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    mode:'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        disableHostCheck: true,
        host: "0.0.0.0"
    },
    module: {
        rules: [{
            include: path.resolve("node_modules", "lodash"),
            sideEffects: false
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'test',
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets'
        }])
    ]
};