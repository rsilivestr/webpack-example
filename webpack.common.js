const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    // app: [ './src', 'Styles/index.sass', ]
    app: [ 
      './src',
      // 'Styles/fonts.css',
      'Assets/fonts/fonts.css',
      'Styles/index.sass',
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.pug'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/colors/colors.pug',
      filename: 'pages/colors.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/form-elements/form-elements.pug',
      filename: 'pages/form-elements.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/cards/cards.pug',
      filename: 'pages/cards.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      ignoreOrder: false,
    }),
    new CopyWebpackPlugin([
      {
        from:'src/assets/images',to:'assets/images'
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        },
      },
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            // options: { importLoaders: 1 }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                require('autoprefixer'),
              ]
            }
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/i,
        use: [          
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ],
      },
      {
        test: /\.pug$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'pug-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: path.resolve(__dirname, 'src/assets/fonts/'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'assets/fonts',
              context: path.resolve(__dirname, './src/assets/fonts'),
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src/assets/images'),
        use: [
          {
            loader: 'file-loader',
          }
        ],
      },
      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   include: path.resolve(__dirname, 'src/images'),
      //   use: [
      //     'file-loader?name=images/[name].[ext]',
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         mozjpeg: {
      //           progressive: true,
      //           quality: 65
      //         },
      //         optipng: {
      //           enabled: false,
      //         },
      //         pngquant: {
      //           quality: [0.65, 0.90],
      //           speed: 4
      //         },
      //         gifsicle: {
      //           interlaced: false,
      //         },
      //       }
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/assets/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
    }
  }
};