var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  mode: 'development',
  entry: {
    meeting: './rcauk/static/js/MeetingApp.js',
    meetingsearch: './rcauk/static/js/MeetingSearch.js',
    onlinemeetingsearch: './rcauk/static/js/OnlineMeetingSearch.js',



  }

  ,
  output: {
    path: path.resolve('./rcauk/static/bundles/'),
    filename: "[name]-[hash].js",
  },

  plugins: [
    new BundleTracker({
      filename: './webpack-stats.json'
    }),
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env',
          '@babel/react', {
            'plugins': ['@babel/plugin-proposal-class-properties']
          }
        ]
      }
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }
      ]
    },]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },



};
