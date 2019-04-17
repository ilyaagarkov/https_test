const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    https: true,
    hot: true,
    clientLogLevel: 'warning',
    compress: false,
    publicPath: '/',
    port: 3002,
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