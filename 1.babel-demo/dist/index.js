"use strict";

require("core-js/modules/es.regexp.exec.js");
require("core-js/modules/es.string.replace.js");
require("core-js/modules/esnext.string.replace-all.js");
var _child = _interopRequireDefault(require("./child.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function babelTest() {
  var resu = 'JavaScript'.replaceAll('a', 'b');
  var budget = 1000000000000;

  // console.log(budget === 10 ** 12); // true

  // const p = new Promise((resolve, reject) => {
  //     resolve("babel");
  // });
}

babelTest();