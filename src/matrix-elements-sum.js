const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const indexWithZero = [];
  return matrix.map(row => {
    return row.filter((cell, index) => {
      if(cell === 0) {
        indexWithZero.push(index)
      }
      if(!indexWithZero.includes(index)) {
        return cell;
      }
    })
  }).flat().reduce((sum, number) => sum += number, 0);
}

module.exports = {
  getMatrixElementsSum
};
