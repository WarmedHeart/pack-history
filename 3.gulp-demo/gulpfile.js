const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');

// 编译 Sass 文件
gulp.task('sass', () => {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

// 压缩 JavaScript 文件
gulp.task('uglify', () => {
  return gulp.src('src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// 默认任务
gulp.task('default', gulp.parallel('sass', 'uglify'));
