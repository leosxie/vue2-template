var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlResWebpackPlugin = require('html-res-webpack-plugin');
var HtmlWebpackPlugin =  require('html-webpack-plugin');
//复杂的推荐使用html-res-webpack-plugin替代html-webpack-plugin更好用
//热加载没有完全加好
module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: {
       index:'./src/index'
  },
  output: {
    path:  path.join(__dirname, 'dev/js'),
    filename: '[name].js',
    publicPath: './js/'
  },
  resolve:{
    alias: {vue: 'vue/dist/vue.js'}
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),    
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: "vue+vue-router+vuex+vue-resource搭配",
      filename:path.join(__dirname,'dev/index.html'),
      template: path.join(__dirname,'src/index.html'),
      inject: true
    }),
    // new ExtractTextPlugin('[hash:8].style.css', { allChunks: true })
  ],
  module: {
    loaders: [
       { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
       { test: /\.vue$/, loader: 'vue' }
    ]
  },
  resolve: { //可以把公共库转变为局部变量
        //root: path.join(__dirname,'/src/components/'),
        //root: "./src",
        modulesDirectories: ['node_modules','src'],
        extensions: ["", ".js", ".scss", ".json",".vue"]
  }
}