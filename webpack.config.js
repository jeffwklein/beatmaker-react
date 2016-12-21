const webpack = require("webpack")
const path = require("path")

const BUNDLE = path.resolve(__dirname, "dist")
const COMPONENTS = path.resolve(__dirname, "app/js")

module.exports = {
  entry: COMPONENTS + "/main.js",
  output: {
    path: BUNDLE,
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      include: COMPONENTS,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.jsx$/,
      include: COMPONENTS,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
    }]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
}
