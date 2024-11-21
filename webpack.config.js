const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
    loginpage: './src/login-page.js',
    home: './src/home.js',
    popular: './src/popular.js',
    archive: './src/archive.js',
    settings: './src/settings.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]',
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', { stage: 3 }]],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/login-page.html',
      inject: true,
      chunks: ['loginpage'],
      filename: 'login-page.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/home.html',
      inject: true,
      chunks: ['home'],
      filename: 'home.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/popular.html',
      inject: true,
      chunks: ['popular'],
      filename: 'popular.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/archive.html',
      inject: true,
      chunks: ['archive'],
      filename: 'archive.html',
    }),
    new HtmlWebpackPlugin({
      template: './public/settings.html',
      inject: true,
      chunks: ['settings'],
      filename: 'settings.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 8081,
    hot: true,
    open: true,
  },
};
