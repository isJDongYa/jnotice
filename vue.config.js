const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(new BundleAnalyzerPlugin())
} else {
  
}

module.exports = {
  css: {
    extract: true
  },
  configureWebpack: {
    plugins
  }
}