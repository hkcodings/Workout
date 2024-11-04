// Escaping literal Quotes in string
const statement = "Alan said, \"Peter is good\"";
console.log(statement);

//Concatenating strings with Plus operator
const ourStr = "I am " + "a Full Stack Developer";
console.log(ourStr);

//Concatenating strings with Plus equals Operator
let ourStrPlus = "I am ";
ourStrPlus += "a Full Stack Developer";
console.log(ourStrPlus);

//Concatinating String with variables
const ourName = "freecodecamp";
const ourStr2 = "Hello, our name is " + ourName + ", how are you?";
console.log(ourStr2);

//Appending variables to string
const anAdjective = "awesome!";
let ourStr3 = "Freecodecamp is ";
ourStr3 += anAdjective;
console.log(ourStr3);

//Finding the length of a String
const name = "India";
console.log(name.length);

//Finding first character of a string using Bracket Notation
const firstName = "Lakshmi";
const firstLetter = firstName[0];
console.log(firstLetter);

//Understanding String immutability
let myStr = "Bob";
myStr[0] = "J"; //This throws an error
console.log(myStr);

let myStr1 = "Bob";
myStr1 = "Job";
console.log(myStr1);

//To find Nth Character of a String
let myStr2 = "Pneumonoultramicroscopicsilicovolcaneoconiosis";
let myStrReq = myStr2[6];
console.log(myStrReq);

//To find the last Character of the string
const firstName1 = "Chandu";
const lastName1 = firstName1[firstName1.length-1];
console.log(lastName1);