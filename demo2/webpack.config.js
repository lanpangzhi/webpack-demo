const path = require('path');

module.exports = {
  entry: './src/index.js',  // 入口文件
  output: {  // 出口文件
    filename: 'bundle.js',   // 打包后命名为bundle.js
    path: path.resolve(__dirname, 'dist') // 输出的路径
  }
};