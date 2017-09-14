var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
				use: [{
					loader: 'style-loader'
					}, {
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]_[local]__[hash:base64:5]'
						}
					}

				]
			}
		]
	},
	devServer:{
		contentBase:path.join(__dirname, "build"),
		compress:true, //gzip
		port:9000,
		hot:true
	},
	plugins:[new HtmlWebpackPlugin({
			title:'CSS Module for React - Starter Kit',
			minify:{
				collapseWhitespace:true
			},
			hash:true,
			template:'./index.html'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
}