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
  reverse = false;

  constructor(direct = true) 
  {
    this.reverse = !direct;
  }
  
  encrypt(string, code) {
    if (typeof string == 'undefined' || typeof code == 'undefined') {
      throw Error('Incorrect arguments!');
    }
    let firstCharCode = 'A'.charCodeAt(0);
    let str = string.toUpperCase();
    let key = code.toUpperCase();
    let encrypted = '';
    let k = 0;
    for (let i = 0; i < str.length; i++) {
      let ascii = str.charCodeAt(i);
      let char = '';
      if (ascii < firstCharCode || ascii > firstCharCode + 26) {
        char = str[i];
      } else {
        let s = (ascii + key.charCodeAt(k)) %26;
        char = String.fromCharCode(firstCharCode + s);
        if (++k > key.length - 1) k = 0;
      }
      if (this.reverse) {
        encrypted = char + encrypted;
   	  } else {
   	    encrypted += char;
   	  }
    }
    return encrypted;
  }

  decrypt(string, code) {
    if (typeof string == 'undefined' || typeof code == 'undefined') {
      throw Error('Incorrect arguments!');
    }
    let firstCharCode = 'A'.charCodeAt(0);
    let str = string.toUpperCase();
    let key = code.toUpperCase();
	  let decrypted = '';
  	let k = 0;
    for (let i = 0 ; i < string.length ; i++)
    {
      let ascii = str.charCodeAt(i);
      let char = '';
      if (ascii < firstCharCode || ascii > firstCharCode + 26) {
        char = str[i];
      } else {
      	let s = (ascii - key.charCodeAt(k) + 26) %26;
      	char = String.fromCharCode(firstCharCode + s);
        if (++k > key.length - 1) k = 0;
      }
      if (this.reverse) {
	   	decrypted =  char + decrypted;
	   } else {
	      decrypted += char;
	   }
    }
    return decrypted;
  }
}

module.exports = {
  VigenereCipheringMachine
};
