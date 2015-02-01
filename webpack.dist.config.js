/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpak-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack'),
    path = require('path');

module.exports = {

  output: {
    publicPath: '/assets/',
    filename: "[name].js"
  },

  cache: true,
  debug: false,
  devtool: false,
  entry: {
    main: './src/scripts/main.js',
    vendor: ['react','react-router']
  },

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: ['', '.js'],
    alias: {
      styles: path.resolve(__dirname, "src/styles")
    }
  },

  module: {
    preLoaders: [{
      test: '\\.js$',
      exclude: 'node_modules',
      loader: 'jshint'
    }],
    loaders: [{
      test: /\.js$/,
      loader: 'jsx?harmony'
    }, {
      test: /\.scss/,
      loader: "style!css!sass?outputStyle=expanded&" +
          "includePaths[]=" +
            (path.resolve(__dirname, "./node_modules"))
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ]

};
