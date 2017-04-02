var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');



module.exports = {
  context: __dirname + "/app",

  entry: {
    javascript: "./js/app.js",
    html: "./index.html"
  },
  output: {
    filename: "app.js",
    path: __dirname + "/docs"
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader"]},
      { test: /\.html$/, loader: "file?name=[name].[ext]" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/, exclude: /(node_modules)/, loader: 'json-loader' }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'assets/css/',
        to: '../dist/assets/css'
      },
      {
        from: 'assets/img/',
        to: '../dist/assets/img'
      }
    ])
  ],

  devtool: 'source-map',
  debug: true
};
