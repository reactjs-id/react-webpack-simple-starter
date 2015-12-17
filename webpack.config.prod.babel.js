import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from './webpack.main';

const banner = `Generated on ${ Date.now() } - v${ require('./package.json').version }`;

process.env.NODE_ENV = 'production';

config.devtool = 'source-map';
config.debug = false;

config.module.loaders = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel'
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      'style',
      'css?&modules&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]&sourceMap'
    )
  },
  ...config.module.loaders
];

config.plugins = [
  new webpack.optimize.DedupePlugin(),
  new ExtractTextPlugin('[hash].css'),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.BannerPlugin(banner, {
    raw: false,
    entryOnly: false
  }),
  ...config.plugins
];

config.output.path = path.join(__dirname, 'dist');

export default config;
