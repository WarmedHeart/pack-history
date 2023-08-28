const childObj = require('./child.js');

function babelTest() {
    let resu = 'JavaScript'.replaceAll('a', 'b');

    let budget = 1_000_000_000_000;

    console.log(resu, budget, childObj);
    // console.log(budget === 10 ** 12); // true

    // const p = new Promise((resolve, reject) => {
    //     resolve("babel");
    // });
}

babelTest();