/* eslint-disable no-var, strict */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(5000, '0.0.0.0', function (err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:5000');
});
