const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let out = {};
  for (let v of domains) {
    let part = v.split('.').reverse();
    let name = '';
    for (let i of part) {
      name += '.' + i;
      out[name] = (undefined == out[name]) ? 1 : out[name] + 1;
    }
  }
  return out;
}

module.exports = {
  getDNSStats
};
