const gulp = require('gulp');
// const babel = require('gulp-babel');
// const concat = require('gulp-concat');
// const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');
// const less = require('gulp-less');
// const cleanCSS = require('gulp-clean-css');
// const htmlmin = require('gulp-htmlmin');
// const livereload = require('gulp-livereload');
// const connect = require('gulp-connect');
const $ = require('gulp-load-plugins')();

const {series, parallel} = gulp;

gulp.task('minifyjs', function () {
  return gulp.src('src/js/*.js') //操作的源文件
        .pipe($.babel({presets: ['@babel/preset-env']}))
        .pipe($.concat('built.js')) //合并到临时文件     
        .pipe(gulp.dest('dist/js')) //生成到目标文件夹
        .pipe($.rename({suffix: '.min'})) //重命名  
        .pipe($.uglify())    //压缩
        .pipe(gulp.dest('dist/js'))
        .pipe($.livereload())//实时刷新
        .pipe($.connect.reload());
});

//less处理任务
gulp.task('lessTask', function () {
  return gulp.src('src/less/*.less')
      .pipe($.less()) 
      .pipe(gulp.dest('src/css'))
      .pipe($.livereload())//实时刷新
      .pipe($.connect.reload());
});

// //css处理任务, 指定依赖的任务
gulp.task('cssTask', function () {
  return gulp.src('src/css/*.css')
      .pipe($.concat('built.css'))
      .pipe(gulp.dest('dist/css'))
      .pipe($.rename({suffix: '.min'}))
      .pipe($.cleanCss({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist/css'))
      .pipe($.livereload())//实时刷新
      .pipe($.connect.reload());
});

//压缩html任务
gulp.task('htmlMinify', function() {
    return gulp.src('index.html')
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'))
        .pipe($.livereload())//实时刷新
        .pipe($.connect.reload());
});

// 执行命令gulp build
gulp.task('build', parallel(series('lessTask', 'cssTask'), 'minifyjs', 'htmlMinify'))

// 执行命令gulp watch
gulp.task('watch', series('build', function () {
  //开启监视
  $.livereload.listen({start: true});
  //监视指定的文件, 并指定对应的处理任务
  gulp.watch('src/js/*.js', series('minifyjs'));
  gulp.watch('src/less/*.less', series('lessTask', 'cssTask'));
  gulp.watch('src/css/*.css', series('cssTask'));
}));

// 执行命令gulp server
gulp.task('server', series('build', function () {
  //配置服务器的选项
  $.connect.server({
      root: 'dist/',//监视的源目标文件路径
      livereload: true,//是否实时刷新
      port: 5000//开启端口号
  });
  // 自动开启链接
  import('open').then(({default: open}) => open('http://localhost:5000'))
  
  // 监视目标文件
  gulp.watch('src/js/*.js', series('minifyjs'));
  gulp.watch('src/less/*.less', series('lessTask', 'cssTask'));
  gulp.watch('src/css/*.css', series('cssTask'));
}));
