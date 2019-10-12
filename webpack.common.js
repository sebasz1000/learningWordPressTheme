const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const OptimizaCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
    utils: './src/utils/index.ts'
  },
  module: {
    rules: [
      {
        test: [/.js$|.ts$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/typescript']
          }
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader', // tells webpack what to do with image type files
          options: {
            name: '[name].[ext]', // export options to dist|build folder
            publicPath: './img',
            outputPath: 'img' // name of the webpack exported folder at dist
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    minimizer: [
      new OptimizaCssAssetsPlugin(), // minimizes extracted css
      new TerserPlugin() // minimizes output js file.Plugin already comes with webpack by default
    ]
  },
  output: {
    filename: '[name].js', // uses all entry js points from common  dinamically
    path: path.resolve(__dirname, 'js'),
    libraryTarget: 'var',
    library: '[name]'
  }
}
