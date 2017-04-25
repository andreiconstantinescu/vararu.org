const Visualizer = require('webpack-visualizer-plugin')

module.exports = {
  webpack: (config) => {
    config.plugins.push(new Visualizer())
    return config
  }
}
