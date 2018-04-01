var path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}
 function assetsPath(_path) {
   return path.posix.join("static", _path)
}

module.exports = {
  entry:  __dirname + "/src/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src')
      }
  },
  module: {
      rules: [{
              test: /\.vue$/,
              loader: 'vue-loader',
          },
          {
              test: /\.js$/,
              loader: 'babel-loader',
              include: [resolve('src'), resolve('test'), resolve('node_modules/vue-awesome')]
          },
          {
              test: /\.css$/,
              loader: 'style-loader!css-loader',
          },
          {
              test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
              loader: 'url-loader',
          },
          {
              test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
              loader: 'url-loader',
          },
      ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    index: "index.html",
    inline: true
  },
  mode: 'development'

}
