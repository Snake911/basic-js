const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(normal = true) {
    this.reverse = !normal;
  }
  letter = 65;
  alphabet = [...new Array(26)].map(() => this.letter++);
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!')
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    if(this.reverse) {
      message = message.split('').reverse().join('');
      key = key.split('').reverse().join('');
    }
    while (key.length < message.length) {
      key += key;
    }
    let i = 0
    return message.split('').map((l) => {
      if (!this.alphabet.includes(l.charCodeAt(0))) {
        return l;
      }
      return String.fromCharCode(this.alphabet[(l.charCodeAt(0) + key.charCodeAt(i++)) % this.alphabet.length])
    }).join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!')
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    if(this.reverse) {
      encryptedMessage = encryptedMessage.split('').reverse().join('');
      key = key.split('').reverse().join('');
    }
    
    while (key.length < encryptedMessage.length) {
      key += key;
    }
    let i = 0;
    return encryptedMessage.split('').map((l) => {
      if (!this.alphabet.includes(l.charCodeAt(0))) {
        return l;
      }
    
      let temp = l.charCodeAt(0) - key.charCodeAt(i++);
      let index = temp < 0 ? temp + this.alphabet.length : temp;
      return String.fromCharCode(this.alphabet[index % this.alphabet.length])
    }).join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
