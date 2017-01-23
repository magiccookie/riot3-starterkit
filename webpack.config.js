var webpack = require('webpack');

// postcss plugins
var cssimport = require('postcss-import');
var customProperties = require('postcss-custom-properties');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');
var cssnested = require('postcss-nested');

module.exports = {
  entry: {
    app : ['./src/index.js']
  },
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  debug: true,
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  module: {
    preLoaders: [
        { test: /\.tag$/, exclude: /node_modules/,
          loader: 'riot-tag-loader',
          query: {
              hot: true,
              debug: true
              // type: 'es6'
          } }
    ],
    loaders: [
      { test: /\.js|\.tag$/, exclude: /node_modules/, include: /src/, loader: 'babel-loader', query: {modules: 'common'} },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  postcss: [cssimport, cssnested, customProperties, autoprefixer, csswring],
  devServer: {
    contentBase: './build/',
    port: 1337,
    hot: true,
    inline: true
  }
};
