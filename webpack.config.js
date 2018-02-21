const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'template', 'index.html'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "html-loader",
            options: {
              attrs: ["img:src", "link:href"],
              interpolate: true,
            },
          },
        ],
      },
      {
        test: /\.less$/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[hash:6].css",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /\.(jpg|svg|png)$/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: "imgs/[name].[hash:6].[ext]",
            },
          },
        ],
      },
    ]
  },
}
