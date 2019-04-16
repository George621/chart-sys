//webpack.base.js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // entry: path.join(__dirname,'../src/index.js'),
  // output: {
  //  path: path.join(__dirname,'../dist'),
  //  filename:'bundle.js'
  // }, // 单入口出口到配置
    // 多入口出口
  entry:{
    index: path.join(__dirname,'../src/index.js'),
    two: path.join(__dirname,'../src/two.js')
  },
  output:{
    path: path.join(__dirname,'../dist'),
    filename : '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.s(c|a)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        // options: {  拆分到 babelrc  此处无用
        //   presets: ['@babel/preset-env', '@babel/preset-react']
        // },
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'../src/index.template.html')
    }),
    new ExtractTextPlugin('css/index.css')

  ]
}