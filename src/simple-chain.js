const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    try {
      const number = position - 1;
      if(number > 0 && number < this.chain.length) {
        this.chain[number] = '';
        return this;
      }
    } catch (error) {
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    return this.chain.filter(item => item).join('~~');
  }
};

module.exports = {
  chainMaker
};
