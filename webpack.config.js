const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, 
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'], 
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i, 
        type: 'asset/resource', 
      },
      {
        test: /\.scss$/, 
        use: [
          'style-loader',  
          'css-loader',    
          'sass-loader',  
        ],
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
                plugins: [
                  ['postcss-preset-env', { stage: 3 }],
                ],
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
      inject: true
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'public'), 
    port: 8081, 
    hot: true, 
    open: true, 
  },
};
