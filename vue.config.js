const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false, // close eslint
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': resolve('src'),
      '@views': resolve('src/views'),
      '@visualWeb': resolve('src/views/visualWeb'),
      '@visualComponents': resolve('src/views/visualComponents'),
      '@visualDesign': resolve('src/views/visualDesign'),
      '@visualTree': resolve('src/views/visualTree'),
    }
  }
}