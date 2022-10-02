"use strict";

var fs = require('fs');

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var getAbsoultePath = function getAbsoultePath(resolvePath) {
  var cwdPath = fs.realpathSync(process.cwd());
  return path.resolve(cwdPath, resolvePath);
};

module.exports = {
  mode: 'development',
  entry: getAbsoultePath('src/index.tsx'),
  output: {
    filename: 'index.js',
    path: getAbsoultePath('dist'),
    clean: true
  },
  module: {
    rules: [{
      test: /\.(js|mjs|jsx|ts|tsx)$/,
      loader: 'babel-loader',
      include: getAbsoultePath('src'),
      options: {
        presets: ['@babel/preset-react']
      }
    }, {
      test: /\.(css|scss|sass)$/,
      include: getAbsoultePath('src'),
      use: ['style-loader', 'css-loader', 'sass-loader']
    }, {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource'
    }]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      "@": getAbsoultePath('src')
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    host: 'm.lexrev.edu',
    compress: true,
    port: 8000,
    hot: true
  },
  plugins: [new HtmlWebpackPlugin({
    title: '乐智中医',
    template: getAbsoultePath('src/index.html'),
    favicon: getAbsoultePath('public/favicon.ico')
  })]
};