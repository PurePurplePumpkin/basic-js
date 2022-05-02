const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  for (let v of n.split('-')) {
    if (6 == n.split('-').length && 2 == v.length) {
      for (let k in v) {
        if ((48 > v.charCodeAt(k) || v.charCodeAt(k) > 57) && (65 > v.charCodeAt(k) || v.charCodeAt(k) > 70)) {
         return false;
        }
       return true;
      }
    }
    return false
  }
}
module.exports = {
  isMAC48Address
};
