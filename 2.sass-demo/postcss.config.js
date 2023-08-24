const autoprefixer = require('autoprefixer');

module.exports ={
    plugins:[
        autoprefixer({
            browsers:[">0%"]//兼容市面上的所有版本的浏览器
        }),
        require('cssnano')
    ]
}
