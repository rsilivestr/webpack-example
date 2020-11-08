/* eslint-disable */
const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      webpack = require('webpack');

module.exports = {
  entry: {
    app: [ 
      './src',
      'Styles/fonts.css',
      'Styles/index.sass',
    ]
  },
  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      datepicker: 'air-datepicker',
    }),
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
    new HtmlWebpackPlugin({
      template: './src/pages/headers-footers/headers-footers.pug',
      filename: 'pages/headers-footers.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/landing/landing.pug',
      filename: 'pages/landing.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/search-room-filter/search-room-filter.pug',
      filename: 'pages/search-room-filter.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/room-details/room-details.pug',
      filename: 'pages/room-details.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/register/register.pug',
      filename: 'pages/register.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/login/login.pug',
      filename: 'pages/login.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
      ignoreOrder: false,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/assets/images', 
          to: 'assets/images'
        },
        {
          from: 'src/assets/fonts',
          to: 'assets/fonts'
        }
      ]
    }),
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
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
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
        include: path.resolve(__dirname, 'src'),
        use: [          
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
        ],
      },
      {
        test: /\.pug$/,
        include: path.resolve(__dirname, 'src'),
        use: [ 'pug-loader', ],
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
    ],
  },
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/assets/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Plugins: path.resolve(__dirname, 'src/plugins/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
      CommonBlocks: path.resolve(__dirname, 'src/components/common.blocks/'),
      UtilBlocks: path.resolve(__dirname, 'src/components/utility.blocks/'),
    }
  }
};