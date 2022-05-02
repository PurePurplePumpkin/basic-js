const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let out = [];
    for (let i = 0; i < arr.length; i++) {
      if ('--discard-next' == arr[i]) {
        if (i == arr.length-1) continue;
        i++;
      } else if ('--discard-prev' == arr[i]) {
        if (i == 0) continue;
        if ('--discard-next' == arr[i-2]) continue;
        out.pop(arr[i])
      } else if ('--double-next' == arr[i]){
        if (i == arr.length-1) continue;
        out.push(arr[i+1]);
      } else if ('--double-prev' == arr[i]) {
        if (i == 0) continue;
        if ('--discard-next' == arr[i-2]) continue;
        out.push(arr[i-1]);
      } else {
        out.push(arr[i]);
      }
    }
    return out
  }
  throw Error("'arr' parameter must be an instance of the Array!")

}

module.exports = {
  transform
};
