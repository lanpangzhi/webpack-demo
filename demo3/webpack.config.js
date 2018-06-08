const path = require('path');

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],  // 入口文件
  output: {  // 出口文件
    filename: 'bundle.js',   // 打包后命名为bundle.js
    path: path.resolve(__dirname, 'dist') // 输出的路径
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配所有.js结尾的文件
        exclude: /node_modules/,  // 忽略node_modules文件夹
        use: {
          loader: 'babel-loader'  // 使用babel-loader转义
        }
      }
    ]
  }
};