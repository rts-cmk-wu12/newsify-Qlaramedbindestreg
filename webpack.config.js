const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
  mode: 'development', 
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map', 
  module: {
    rules: [
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
                  [
                    'postcss-preset-env', 
                    {
                      stage: 3, 
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,  
        enforce: 'pre',  
        use: ['source-map-loader'], 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', 
      filename: 'index.html', 
    }),
  ],
};
