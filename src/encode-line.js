const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let count = 1;
  let out = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i+1]) {
      count++;
    } else {
      if (count > 1) {
        out += count + arr[i];
        count = 1;
      } else {
        out += arr[i];
      }
    }
  }
  return out;
}

module.exports = {
  encodeLine
};
