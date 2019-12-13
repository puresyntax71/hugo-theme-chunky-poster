const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
        path: path.resolve(__dirname, 'static/dist'),
        filename: '[name].[contenthash].min.js',
        chunkFilename: '[name].[contenthash].min.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { sourceMap: true },
                    },
                    {
                        loader: 'sass-loader',
                        options: { sourceMap: true },
                    },
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].min.css',
            sourceMap: true,
        }),
        new AssetsPlugin({
            filename: 'assets.json',
            path: path.resolve(__dirname, 'data/chunky-poster'),
            prettyPrint: true,
        }),
    ],
};
