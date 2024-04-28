const name = "yatindra";

const repoCount = 50

// console.log(name + repoCount + "value");

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("yatindra-pandey");

// console.log(gameName.length);
// console.log(gameName[0]);
// console.log(gameName.toUpperCase());
// console.log(gameName.__proto__);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));

const newString = gameName.substring(0,4);
// console.log(newString);

const anotherString = gameName.slice(0,4)
// console.log(anotherString);

const newStringOne  = "   yatindra   ";
// console.log(newStringOne.trim());

const  url = "https://yatindra.com/yatindra%20pandey";

// console.log(url.replace('%20','-'));

// console.log(url.includes("yatindra")); //to check the value is present or not

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]); //for detecting the index of the words

const chars = str.split('');
 console.log(chars[8]); //for detecting the character[index] of the words.


