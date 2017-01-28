const path = require('path')

module.exports = {
  entry: {
    js: ['babel-polyfill', path.join(__dirname, 'client/index.jsx')],
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, 'client'),
        loader: 'babel-loader',
      },
      {
        test: '/.scss$/',
        loader: ['style', 'css', 'sass'],
      },
    ],
  },
}
