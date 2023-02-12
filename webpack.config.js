const path = require('path');

module.exports = {
  entry: {
    ek: './src/ek.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};