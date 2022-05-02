const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrn, i, j = 0;
  for (let v in String(n)) {
    arrn = String(n).split('');
    arrn.splice(v, 1);
    i = +arrn.join('');
    if (i > j) {
      j = i;
    }
  }
  return j;
}

module.exports = {
  deleteDigit
};
