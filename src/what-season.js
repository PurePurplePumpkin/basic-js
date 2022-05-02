const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (typeof date == 'undefined') {
    return 'Unable to determine the time of year!';
  }
  let month;
  try {
    date.valueOf();
    month = date.getMonth();
  } catch(e) {
    throw Error('Invalid date!');
  }
  if( 1 < month && month < 5) {
    return 'spring';
  } else if (4 < month && month < 8) {
    return 'summer';
  } else if (7 < month && month < 11) {
    return 'autumn';
  }
  return 'winter';
}

module.exports = {
  getSeason
};
