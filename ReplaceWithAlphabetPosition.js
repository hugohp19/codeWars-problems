function alphabetPosition(text) {

    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let string = Array.from(text.toLowerCase()).filter((letter)=> alphabet.includes(letter)).map((letter)=> alphabet.indexOf(letter) + 1 + ' ').join('').trim();
  
    return string;
  }


/**************************************
 * Other Solutions from other users
 * SOLUTION 1
 *  function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
  }
 * 
 * SOLUTION 2
 * let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');
 * 
 * 
 * SOLUTION 3
 *       const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return Array.from(text.toLowerCase()).reduce((output, letter) => {
      if (alphabet.includes(letter)) {
        output = output + (alphabet.indexOf(letter) + 1).toString() + ' ';
      }
      return output;
    }, " ").trim();
*/
 