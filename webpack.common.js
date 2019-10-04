const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const OptimizaCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test: [/.js$|.ts$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/typescript"]
          }
        }
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader", //tells webpack what to do with image type files
          options: {
            name: "[name].[ext]", //export options to dist|build folder
            publicPath: "./img",
            outputPath: "img" // name of the webpack exported folder at dist
          }
        }
      }
      /*{
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // 2. css-loader imports css files as javascript intro src/index.js
          "sass-loader" //3. sass-loader converts main.sass file intro regular css file
        ]
      }*/
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
    /*new MiniCssExtractPlugin({
      filename: "../stylee.css",
      ignoreOrder: false
    })*/
  ],
  optimization: {
    minimizer: [
      new OptimizaCssAssetsPlugin(), //minimizes extracted css
      new TerserPlugin() //minimizes output js file. Plugin already comes with webpack by default
    ]
  },
  output: {
    filename: "[name].js", //uses all entry js points from common  dinamically
    path: path.resolve(__dirname, "js")
  }
};
/*
....module.exports = {
  .......module: {rules: [...... 
    {   
    test: [/.css$|.scss$/], 
    use: [    
      MiniCssExtractPlugin.loader,    'css-loader',   'sass-loader'  ] }]
    },
      plugins: [.........
        new MiniCssExtractPlugin({ filename: 'style.css'})
    ]
  }*/
