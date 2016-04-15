import webpack from 'webpack';
import path from 'path';

import HtmlPlugin from 'html-webpack-plugin';

const srcPath = path.join(__dirname, 'src');

let config = {
  devtool: 'source-map',
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file?hash=sha1&digest=hex&name=[hash].[ext]'
      },
      {
        test: /\.html$/,
        loaders: ['file?name=[name].[ext]']
      }
    ]
  },
  resolve: {
    root: srcPath,
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new HtmlPlugin({
      inject: true,
      template: path.join(srcPath, 'index.html')
    }),
    new webpack.DefinePlugin({
      DEBUG: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
    })
  ],
  output: {
    filename: '[hash].js',
    pathInfo: true,
    path: path.join(__dirname, 'tmp'),
    publicPath: '/'
  }
};

export default config;
