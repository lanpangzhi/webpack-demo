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
      },
      {
        test: /\.css$/, // 匹配所有.css结尾的文件
        use: [ // use要从右往左写，先转成样式，再打包到style标签
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/, // 匹配所有.sass结尾的文件
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'sass-loader' // 将 Sass 编译成 CSS
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/, // 匹配所有.png和.svg和.jpg和.gif结尾的文件
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'dist/' // 设置public 发布目录。
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};