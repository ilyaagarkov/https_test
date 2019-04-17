const path = require('path');
const fs = require('fs')

module.exports = {
  mode: 'development',
  entry: [
    './index.js',
    'webpack-dev-server/client?http://0.0.0.0:80',
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    https: {
      key: fs.readFileSync('/Users/ilyaagarkov/projects/devvela/https_test/localhost.key'),
      cert: fs.readFileSync('/Users/ilyaagarkov/projects/devvela/https_test/localhost.crt'),
    },
    allowedHosts: [
      '.bomond.devvela.net'
    ],
    hot: true,
    clientLogLevel: 'warning',
    compress: false,
    publicPath: '/',
    port: 443,
    host: 'localhost',
    watchOptions: {
      aggregateTimeout: 100,
      ignored: /node_modules/,
    },
    stats: {
      assets: false,
      cached: false,
      hash: false,
      colors: true,
      cachedAssets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      modules: false,
      version: false
  },
  },
  
}