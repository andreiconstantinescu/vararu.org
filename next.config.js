module.exports = {
  webpack: (config, {dev}) => {
    if (dev) {
      const Visualizer = require('webpack-visualizer-plugin')
      config.plugins.push(new Visualizer())
    }
    return config
  }
}
