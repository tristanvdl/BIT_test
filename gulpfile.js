var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

//sass
gulp.task('sass', function() {
    gulp.src('src/assets/style/app.scss')
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('build/css'));
});

//javascript
gulp.task('scripts', function() {
    gulp.src('src/assets/js/**/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

//watch
gulp.task('watch', function() {
    gulp.watch('src/assets/style/scss/**/*.scss', ['sass']);
    gulp.watch('src/assets/js/*.js', ['scripts']);
});

//default
gulp.task('default', ['sass', 'scripts', 'watch']);
