var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
//    console.log('Hello Paul');
    gulp.src('app/sass/**/*.scss').
	pipe(sass().on('error', sass.logError)).
	pipe(gulp.dest('app/css/'))
//    pipe(browserSync.reload({
//        stream: true
//    }))
});

//Watch task
//gulp.task('watch', ['browserSync', 'sass'], function(){
gulp.task('watch', function(){
	gulp.watch('app/sass/*.scss', ['sass']);
//    gulp.watch('app/*.html', browserSync.reload);
//    gulp.watch('app/js/**/*.js', browserSync.reload);
});

//gulp.task('browserSync', function() {
//   browserSync.init({
//       server: {
//           baseDir: 'app'
//       },
//   }) 
//});