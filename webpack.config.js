const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'template', 'index.html'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
              /*
              attrs: ["img:src", "link:href"],
              interpolate: true,
              */
            },
          },
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          {
            loader: "file-loader",
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
            loader: "file-loader"
          },
        ],
      },
    ]
  }
}
