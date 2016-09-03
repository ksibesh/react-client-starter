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
      __PROD__: true,
      __API_ENDPOINT__: '"' + process.env.API_HOST + '"',
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
