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
  let count = 1;
  let tempResult = [];
  const symbolArr = str.split('');
  symbolArr.map((symbol, index) => {
    if(index > 0 && symbol === symbolArr[index - 1]) {
      count++;
      if(index == symbolArr.length - 1 || symbol !== symbolArr[index + 1]) {
        tempResult.push(`${count}${symbol}`);
        count = 1;
      }
    } 
    if((symbol !== symbolArr[index + 1] && symbol !== symbolArr[index - 1])) {
      tempResult.push(`${symbol}`);
    }
  });
  return tempResult.join('');
}

module.exports = {
  encodeLine
};
