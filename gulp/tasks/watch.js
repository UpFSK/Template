'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./dev/javaScript/**/*.js', $.gulp.series('js:process'));
    $.gulp.watch('./dev/scss/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./dev/img/**/*.*', $.gulp.series('copy:image'));
  });
};
