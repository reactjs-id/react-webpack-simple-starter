import webpack from 'webpack';
import path from 'path';
import config from './webpack.main';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8080';

config.cache = true;
config.devtool = 'source-map';
config.debug = true;

config.module.loaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: [
      'react-hot',
      'babel?cacheDirectory'
    ]
  },
  {
    test: /\.css$/,
    loaders: [
      'style',
      'css?&modules&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]&sourceMap'
    ]
  },
  ...config.module.loaders
];

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  ...config.plugins
];

config.output.publicPath = 'http://localhost:8080/';

config.devServer = {
  contentBase: path.join(__dirname, 'tmp'),
  noInfo: true,
  hot: true,
  inline: true,
  host,
  port
};

export default config;
