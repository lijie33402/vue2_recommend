const path = require('path')

module.exports = {
  lintOnSave: false,
  // 全局less变量
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/variables.less')]
    }
  }
}
