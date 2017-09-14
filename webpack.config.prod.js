var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module:{
		rules:[
			{
				test: /\.js$/,
				exclude: /node-modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[name]_[local]__[hash:base64:5]'
							}
						}

					]
				})
			}
		]
	},
	plugins:[new HtmlWebpackPlugin({
			title:'CSS Module for React - Starter Kit',
			minify:{
				collapseWhitespace:true
			},
			hash:true,
			template:'./index.html'
		}),
		new ExtractTextPlugin('styles.css')
	]
}