// webpack.prod.js
const path = require('path')
const merge = require('webpack-merge')
const base = require('./webpack.base.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const PurifyCssWebpack = require('purifycss-webpack')
const Glob = require('glob')

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(),
    new PurifyCssWebpack({
      paths: Glob.sync(path.join(__dirname,'src/*html'))
    })
  ]
})