const path = require('path')

module.exports = {
  entry: [
    path.join(__dirname, 'template', 'main.js'),
    path.join(__dirname, 'template', 'index.html')
  ],

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
        test: /\.css$/,
        loaders: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[hash:6].[ext]",
            },
          },
          {
            loader: "extract-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.jpg$/,
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
