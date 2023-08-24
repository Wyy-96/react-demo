// 开发环境配置
const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

module.exports = merge(baseConfig, {
  mode: 'development', // 开发模式
  devServer: {
	open: true, // 编译完自动打开浏览器
    port: 8080,
    hot: true, // 开启热更新
    open: false, // 自动打开浏览器
    historyApiFallback: true, // 解决启动后刷新404
    proxy: {
        '/api': {
            target: 'http://localhost:3000',
            pathRewrite: {'^/api' : ''},
            changeOrigin: true,
            secure: false
        }
    },
    static: {
      directory: path.join(__dirname, '../public'),
    }
  },
})