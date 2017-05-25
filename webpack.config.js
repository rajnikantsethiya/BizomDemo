const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    publicPath: '',
    filename: 'bundle.js'
  },
  plugins: [
    // Render an index.html for the app
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html'
    })
  ],
devtool: 'source-map',
  module: {
    noParse: /node_modules\/json-schema\/lib\/validate\.js/,
    preLoaders: [
      {
        test: /\.js?$/,
        loader: 'eslint',
        exclude: /node_modules/
      },
    ],
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      { 
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      { 
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
};
