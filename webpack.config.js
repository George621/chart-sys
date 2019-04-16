
// 此文件废弃  成功拆分到build 下是3个js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: path.join(__dirname,'/src/index.js'),
  output: {
   path: path.join(__dirname,'/dist'),
   filename:'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    port: '8088',
    inline: true,
    hot: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s(c|a)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        // options: {
        //   presets: ['@babel/preset-env', '@babel/preset-react']
        // },
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src/index.template.html')
    }),
    // new CleanWebpackPlugin(['dist']),

  ]
}