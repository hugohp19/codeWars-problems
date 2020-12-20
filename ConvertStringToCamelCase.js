function toCamelCase(str){
  if(str === '') return '';
  
  //split it

  let splitStr;
  
  if(str.includes('-')){
    splitStr = str.split('-');
  } else{
    splitStr = str.split('_');
  }
 
    //uppercase first letter of each item
 
    //let splitStr2 = splitStr.map(word=> word.replace(word[0], word[0].toUpperCase())).join('');
    let splitStr2 = splitStr.map(word=> word[0].toUpperCase() + word.slice(1)).join('');
    let newString = splitStr2.replace(splitStr2[0], str[0])

    return newString;
}

console.log(toCamelCase('')); //"An empty string was provided but not returned"
console.log(toCamelCase("the_stealth_warrior")); //"theStealthWarrior"
console.log(toCamelCase("The-Stealth-Warrior")); //"TheStealthWarrior"
console.log(toCamelCase("A-B-C")); //"ABC"


/* Other Solutions
1-
return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());

2-
  var regExp=/[-_]\w/ig;
  return str.replace(regExp,function(match){
    return match.charAt(1).toUpperCase();
  });

*/