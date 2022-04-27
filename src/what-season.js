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
  if(!date) {
    return "Unable to determine the time of year!";
  }
  try {
    date.toDateString();
    if(!(date instanceof Date)) {
      return false;
    }
  } catch (error) {
    throw new Error("Invalid date!");
  }
  const seasons = Array(11).fill('winter', 0, 2).fill('spring', 2, 5).fill('summer', 5, 8).fill('autumn', 8, 11);
  seasons.push('winter');
  return seasons[date.getMonth()];
}

module.exports = {
  getSeason
};
