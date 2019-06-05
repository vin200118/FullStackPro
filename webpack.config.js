const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './index.js',
   output: {
	    path: path.resolve(__dirname, 'dist'),
	    filename: 'index_bundle.js',
	    publicPath: '/'
	  },
   devServer: {
      inline: true,
      port: 8080,
      historyApiFallback: true
   },
   module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}