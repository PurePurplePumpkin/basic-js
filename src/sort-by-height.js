const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortarr = arr.slice().sort(function(a, b) { return a - b; });
  let j = 0;
  for (let i in sortarr) {
    if (sortarr[i] > -1) {
      sortarr.splice(0, i)
      break;
   }
  }
  for (let k in arr) {
    if (-1 != arr[k]) {
      arr[k] = sortarr[j];
      j++;
   }
  }
  return (arr);
}

module.exports = {
  sortByHeight
};
