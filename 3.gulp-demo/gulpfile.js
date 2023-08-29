const { src, dest, parallel } = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');

function dueJavaScript() {
  return src('src/scripts/*.js')
    .pipe(babel({presets: ['@babel/preset-env']}))
    .pipe(src('vendor/*.js'))
    .pipe(dest('output/js/'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('output/js/'));
}

function dueCss() {
  return src('src/styles/*.scss')
    .pipe(sass())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(dest('output/css/'));
}
exports.default = parallel(dueJavaScript, dueCss);
