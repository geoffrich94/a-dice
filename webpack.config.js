const path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  devServer: {
    contentBase: './',
    https: true,
    host: '0.0.0.0'
  },
  resolve: {
    extensions: [".js", ".wasm"]
  },
  module: {
    rules: [
      {
        test: /zcv\.wasm$/,
        type: "javascript/auto",
        loader: "file-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(jpe?g|png|glb|gltf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: '[path][name].[ext]',
            context: 'src'
          }
        }
      }
    ]
  }
};