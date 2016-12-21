const webpack = require("webpack")
const path = require("path")

const BUNDLE = path.resolve(__dirname, "dist")
const COMPONENTS = path.resolve(__dirname, "app/js")
const SOUNDS = path.resolve(__dirname, "app/js/components/sounds")

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
    }, {
      test: /\.mp3$/,
      include: COMPONENTS,
      exclude: /node_modules/,
      loader: "url-loader"
    }]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
}
