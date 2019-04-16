// webpack.dev.js

const merge = require('webpack-merge')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  devServer: {
    contentBase: '../dist',
    port: '8088',
    inline: true,
    hot: true
  },
  devtool: 'source-map',
})