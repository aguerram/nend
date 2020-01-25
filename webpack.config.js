const path = require('path');
const nodeExternals = require('webpack-node-externals');


console.log(path.resolve(__dirname,"src","main.ts"));


module.exports = {
  entry: path.resolve(__dirname,"src","main.ts"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [ nodeExternals() ]
};