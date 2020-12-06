/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/


let countBits = function(n) {
  // Program Me.

  let counter = 0;
  let remainder;

  if(n % 2 !== 0) counter++;

  while(Math.floor(n) >0){
    n = n / 2;
    //console.log(n)
    remainder = Math.floor(n % 2);
    //console.log(remainder)
    if(remainder === 1) counter++;
  }
  //console.log(counter)
  return counter;
};

countBits(0) // returns: 0
countBits(4) // returns: 1
countBits(7) // returns: 3
countBits(9) // returns: 2
countBits(10) // returns: 2


/**************************************
 * Other Solutions from other users
 * 
 * solution 1:
 * countBits = n => n.toString(2).split('0').join('').length;
 * toString(2) means that it converts the number to the binary  string representation
 * then, split at every 0, it takes them out
 * joins the new array formed with only 1 and then length.
 * 
 * variation:
 * return n.toString(2).replace(/0/g,'').length;
 */