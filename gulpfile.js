global.$ = {
    package: require('./package.json'),
    config: require('./gulp/config'),
    path: {
        task: require('./gulp/paths/tasks.js'),
        jsFoundation: require('./gulp/paths/js.foundation.js'),
        cssFoundation: require('./gulp/paths/css.foundation.js'),
        app: require('./gulp/paths/main.js')
    },
    sassGlob: require('gulp-sass-glob'),
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel(
      'sass',
      'pug',
      'js:foundation',
      'js:process',
      'copy:image',
      'css:foundation',
      'sprite:svg',
      'fonts',
    ),
    $.gulp.parallel(
      'watch',
      'serve'
    )
  ));