/*eslint-disable */
require('babel-core/register');
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.babel');

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    singleRun: false,
    logLevel: config.LOG_ERROR,
    plugins: [
      'karma-phantomjs-launcher',
      'karma-phantomjs-shim',
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha-reporter'
    ],
    frameworks: [
      'mocha',
      'chai',
      'phantomjs-shim'
    ],
    files: [
      path.join(__dirname, 'tests.bundle.js')
    ],
    preprocessors: {
      'tests.bundle.js': [
        'webpack',
        'sourcemap'
      ]
    },
    webpack: {
      devtool: 'eval',
      resolve: webpackConfig.resolve,
      module: webpackConfig.module,
      plugins: webpackConfig.plugins
    },
    webpackMiddleware: {
      noInfo: true
    },
    reporters: [ 'mocha' ],
  })
}
