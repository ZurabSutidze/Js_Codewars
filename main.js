///////////////////////////////////////  1    ////////////////////////////////

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const wins = {
//     "rock" : "scissors",
//     "paper" : "rock",
//     "scissors" : "paper"
// }

// const Winner = (p1, p2) => {
//     if (p1 === p2) {
//         return "Draw!";
//     } else if (wins[p1] === p2) {
//         return "Player 1 won!";
//     } else {
//         return "Player 2 won!";
//     }
// }

// console.log(Winner('rock' , 'rock'))

///////////////////////////////         2          //////////////////////////

// In this kata you need to check the provided array(x) for good ideas 'good' and
// bad ideas 'bad'.If there are one or two good ideas, return 'Publish!', if there are
// more than 2 return 'I smell a series!'.If there are no good ideas, as is often the
// case, return 'Fail!'.

// function well(x) {
//     let counter = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] === "good") {
//             counter++;
//         }
//     }

//     if (counter === 1 || counter === 2) {
//         return "Publish";
//     } else if (counter > 2) {
//         return 'I smell a series!';
//     } else {
//         return "Fail!";
//     }
// }

// let arr = ['bad', 'bad', 'bad']

// console.log(well(arr))

///////////////////////////////////////          3             ////////////////////////////

// Write a function that takes an array of words and smashes them together into a
// sentence and returns the sentence.You can ignore any need to sanitize
// words or add punctuation, but you should add spaces between each word.
// Be careful, there shouldn't be a space at the beginning or the end of the sentence

// function smash(words) {
//    return words.join(" ")
// }

// let arr = ['hello', 'world', 'this', 'is', 'great']
// console.log(smash(arr))

/////////////////////////////////////////////////////          4            /////////////////////////////////////////

// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.

// We know the rules of confect:

// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)

// function isValid(formula) {
//     if (formula.includes(1) && formula.includes(2)) {
//       return false;
//     } else if (formula.includes(3) && formula.includes(4)) {
//       return false;
//     } else if (formula.includes(5) && !formula.includes(6)) {
//       return false;
//     } else if (!formula.includes(5) && formula.includes(6)) {
//       return false;
//     } else if (!formula.includes(7) && !formula.includes(8)) {
//       return false;
//     } else {
//         return true;
//     }
// }

// let arr = [1 , 3 , 7 ]
// console.log(isValid(arr))

///////////////////////////////////////////////////////////           5          /////////////////////////////////////////////

// Sum Of The Array

// function sum(numbers) {
//     let count = 0.;
//     for (let i = 0; i < numbers.length; i++) {
//         count += numbers[i];
//     }
//     return parseFloat(count.toFixed(1));
// }

// let arr = [1, 5.2, 4, 0, -1];
// console.log(sum(arr));

///////////////////////////////////////////////////////         6          ///////////////////////////////////////////

// The cockroach is one of the fastest insects.Write a function which takes its
// speed in km per hour and returns it in cm per second, rounded down to the
// integer(= floored)

// function cockroachSpeed(s) {
//     return Math.floor(s*27.777778)
// }

// console.log(cockroachSpeed(1.08))

//////////////////////////////////////////////////////////////        7       ////////////////////////////////

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// function isVowel(char) {
//     return ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char);
// }
// function replace(s) {
//     let newword = ""
//     for (let i = 0; i < s.length; i++) {
//         if (isVowel(s[i])) {
//             newword += '!';
//         }  else {
//             newword += s[i]
//         }
//     }
//     return newword;
// }

// console.log(replace("asdwa"))

////////////////////////////////////////////////////////////////////////       8            ////////////////////////////////////////

// Odd Or Even

// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "Even"
//     } else {
//         return "Odd"
//     }
// }

///////////////////////////////////////////////////////////////            9           /////////////////////////////////////////

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// function removeExclamationMarks(str) {
//     return str.replace(/!/g, '');
// }

// const stringWithoutExclamationMarks = removeExclamationMarks("Hello! How are you doing!?");
// console.log(stringWithoutExclamationMarks);

///////////////////////////////////////////////////     10       ///////////////////////////////////////

// function add(a,b){
//     return a + b
// }

// function divide(a,b){
//     return a / b
// }

// function multiply(a,b){
//     return a * b
// }

// function mod(a,b){
//     return a % b
// }

// function exponent(a,b){
//     return Math.pow(a , b)
// }

// function subt(a,b){
//     return a - b
// }


// console.log(add(5, 3));        
// console.log(multiply(5, 3));   
// console.log(divide(10, 2));     
// console.log(mod(10, 3));        
// console.log(exponent(2, 3));  
// console.log(subt(10, 3));    