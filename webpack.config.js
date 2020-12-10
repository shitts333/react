const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: './src/testjs.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist'
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-react']
                  }
              }
          },
          {
              test: /\.css$/,
              use: ['style-loader', 'css-loader']
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new CleanWebpackPlugin
  ]
};