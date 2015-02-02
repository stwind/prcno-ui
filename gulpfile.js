'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var $ = require('gulp-load-plugins')();
var $log = $.util.log;

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var webpackDistConfig = require('./webpack.dist.config.js');

var DEST = 'dist';

gulp.task('clean', require('del').bind(null, [DEST]));

gulp.task('assets', function() {
  var src = ['src/index.html','src/fonts/*'];
  return gulp.src(src)
    .pipe($.copy(DEST, { prefix: 1 }))
    .pipe($.size({title: 'assets'}));
});

gulp.task('webpack', function () {
  return gulp.src('src/scripts/main.js')
  .pipe($.webpack(webpackDistConfig))
  .pipe(gulp.dest(DEST + '/assets'))
  .pipe($.size({ title: 'webpack' }));
});

gulp.task('build', ['clean'], function(cb) {
  runSequence(['webpack', 'assets'], cb);
});

gulp.task('serve', function () {
  var compiler = webpack(webpackConfig),
      host = 'localhost', port = 8080,
      address = 'http://' + host + ':' + port + '/webpack-dev-server/';

  new WebpackDevServer(compiler, {
    contentBase: 'src/',
    hot: true, port: port,
    publicPath: '/assets/'
  })
  .listen(port, host, function (err){
    if (err) $log('[webpack-dev-server] error', err);

    $log('[webpack-dev-server]', address);
    require('opn')(address);
  });
});

gulp.task('default', function () {
});
