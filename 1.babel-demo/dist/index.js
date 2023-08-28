"use strict";

require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/esnext.string.replace-all.js");
var childObj = require('./child.js');
function babelTest() {
  var resu = 'JavaScript'.replaceAll('a', 'b');
  var budget = 1000000000000;
  console.log(resu, budget, childObj);
  // console.log(budget === 10 ** 12); // true

  // const p = new Promise((resolve, reject) => {
  //     resolve("babel");
  // });
}

babelTest();