# gulp
Gulp 是一个流式构建系统，用于自动化地执行常见的开发任务，如文件压缩、编译、合并、优化等。它使用 Node.js 构建，并通过插件的方式提供了丰富的功能，可以大大提升前端开发的效率。

注意：命令`gulp task1` ，gulp后面的参数是创建的任务名称

1. 全局安装 `npm install --global gulp-cli`
2. 开发安装 `npm install --save-dev gulp`
3. 根据<a href="https://www.gulpjs.com.cn/"> 官网文档 </a>进行所需插件安装配置 || 安装一个汇总插件 `gulp-load-plugins`（此处只是简单配置，执行命令输出，未追求极致的配置）

gulp以组织任务的方式操作流对前端类型文件处理还挺方便，以下是一些实用性插件

    del：清空目录
    gulp-eslint：eslint代码检测
    gulp-babel：babel转换，将es6代码转为es5
    gulp-concat：合并文件
    gulp-uglify：js压缩
    gulp-sass：sass编译
    gulp-clean-css：css压缩
    gulp-htmlmin：html压缩
    gulp-imagemin：图片压缩
    gulp.connect：起server服务调试


当时gulp组织编译任务 + browserify模块化打包 可以达到不错的效果，不过，两者是分开的。后续webpack出现，在前端打包方面也就慢慢的没落了。

参考链接：

[gulp3 用途](https://juejin.cn/post/6996664034846048287?searchId%253D202308300959053A44B3A1B5B00929C90F)

[gulp版本3、4 区别](https://juejin.cn/post/6844903857479221255?searchId%253D2023083015555950BAB1F92FA072590A48)
