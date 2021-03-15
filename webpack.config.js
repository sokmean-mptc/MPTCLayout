const path = require('path')
const webpack = require('webpack')
const TerserJSPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
    entry: ['./src/scripts/main.js', './src/styles/main.scss'],
    output: {
        filename: "main.js",
        path: path.resolve( __dirname, "dist" )
    },
    module: {
        rules: [{
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        },{
            test: /\.(jpe?g|png|gif$)/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[hash].[ext]',
                    outputPath: 'images'
                }
            }]
        },{
            test: /\.(ttf|eot|otf|svg|woff|woff2$)/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts'
                }
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new BrowserSyncPlugin(),
        require('autoprefixer')
    ],
    optimization: {
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    }
}