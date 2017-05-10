const path = require('path');
var fs = require("fs");

var webpack = require("webpack");

const PATHS = {
  dashboards: path.join(__dirname, 'dashboards'),
  build: path.join(__dirname, 'build'),
  widgets: path.join(__dirname, 'widgets'),
  styles: path.join(__dirname, 'styles'),
  redux: path.join(__dirname, 'redux'),
  jobs: path.join(__dirname, 'jobs')
};

// grab all dashboards
var entry_paths = fs.readdirSync(PATHS.dashboards).reduce(function(map, filename) {
  map[path.basename(filename, '.jsx')] = path.join(PATHS.dashboards, filename);
  return map;
}, {});

module.exports = {
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: entry_paths,
  output: {
    path: PATHS.build,
    filename: '[name].dashboard.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common.bundle.js'),
    new webpack.EnvironmentPlugin(["NODE_ENV"])
  ],
  module: {
    loaders: [
      // Set up jsx. This accepts js too thanks to RegExp
      {
        test: /\.jsx?$/,
        // Enable caching for improved performance during development
        // It uses default OS directory by default. If you need something
        // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
        loaders: ['babel?cacheDirectory'],
        // Parse only app files! Without this it will go through entire project.
        // In addition to being slow, that will most likely result in an error.
        include: [PATHS.dashboards, PATHS.widgets, PATHS.redux, PATHS.jobs]
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: [PATHS.styles, PATHS.widgets]
      }

    ]
  }
};
