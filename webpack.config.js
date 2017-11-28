const path = require('path');
const webpack = require('webpack');

const config = {
  context: __dirname,
  entry: './src/main.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true,
    port: 9000
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  plugins: [],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          quiet: true
        }
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader'
      }
    ]
  }
};

module.exports = config;
