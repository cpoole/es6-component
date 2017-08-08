var gulp = require('gulp');

var base64 = require('gulp-base64');

//basic example 
gulp.task('default', function () {
    return gulp.src('./libs/*')
        .pipe(base64())
        .pipe(gulp.dest('./dist/'));
});
