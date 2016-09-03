var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, '..', 'app'),
  entry: {
    javascript: './main.js',
    html: './index.html'
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', 'dist')
  },
  devtool: "source-map",
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" },
    port: process.env.PORT || 8084
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    }, {
      test: /\.html$/,
      loader: "file?name=[name].[ext]",
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  resolve: {
    root: [
      path.resolve('./')
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __PROD__: false,
      __API_ENDPOINT__: '"' + process.env.API_HOST + '"'
    })
  ]
}
