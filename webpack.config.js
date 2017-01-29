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
  plugins: [
    new webpack.ProvidePlugin( { riot: 'riot' } ),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [cssimport, cssnested, customProperties,
                      autoprefixer, csswring]}})],
  module: {
    rules: [
        { test: /\.tag$/, exclude: /node_modules/,
          enforce: "pre",
          loader: 'riot-tag-loader',
          options: { hot: true, debug: true} },
        { test: /\.js|\.tag$/,
          exclude: /node_modules/,
          include: /src/,
          loader: 'babel-loader'},
        { test: /\.css$/,
          use: ["style-loader", "css-loader", "postcss-loader"] },
        { test: /.(png|woff|woff2|eot|ttf|svg)$/,
          use: 'url-loader?limit=100000' }]
  },
  devServer: {
    contentBase: './build/',
    port: 1337,
    hot: true,
    inline: true
  }
}
