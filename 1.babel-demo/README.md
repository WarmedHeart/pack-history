## source code -> babel -> terser -> Browser run code

### 第三方包
1. @babel/cli babel脚手架
2. @babel/core 用于parse、transform
3. @babel/preset-env 将一些简单语法tranform
4. @babel/polyfill 使浏览器运行时支持新的内置函数、实例方法。存在问题：重复引入、污染window全局属性
5. terser 压缩代码（不支持选中文件，可借助脚本实现-暂不尝试） `npx terser dist/index.js -o terser/index.js` `npx terser dist/child.js -o terser/child.js`


### 运行
以下命令都可运行成功：
node ./src/index.js
node ./dist/index.js
node ./terser/index.js
### 参考链接
[https://juejin.cn/post/7082976239421980679#heading-9](https://juejin.cn/post/7082976239421980679#heading-9)