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
  const arrN = `${n}`.split('');
  return Math.max(...arrN.map((numb, i) => arrN.filter(((f, indexF) => i !== indexF)).join('')))
}

module.exports = {
  deleteDigit
};
