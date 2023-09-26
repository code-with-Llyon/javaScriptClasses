// let count = 50;
// console.log("hello your number is "+ count)
// console.log(true);
// console.log(3);
// console.log(false);
// console.log();
//  prompt("hello there");
 
//  // Make an keyless car EVEN BETTER!
// // We are improving our car from previous exercise now. 


// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

// //1. Make the above code have a function called checkDriverAge().  function, you will get prompted for age. Use Function Declaration to create this function.
// function checkDriverAge() {
// 	var age = prompt("What is your age?");
// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too yound to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }
// // Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?


// //2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression.
// var checkDriverAge2 = function() {
// 	var age = prompt("What is your age?");
// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too yound to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }

// //BONUS: Instead of using the prompt. Now, only use console.log and make the checkDriverAge() function accept an argument of age, so that if you enter:
// // checkDriverAge(92);
// // it returns "Powering On. Enjoy the ride!" 
// function checkDriverAge(age) {
// 	if (Number(age) < 18) {
// 		return "Sorry, you are too yound to drive this car. Powering off";
// 	} else if (Number(age) > 18) {
// 		return "Powering On. Enjoy the ride!";
// 	} else if (Number(age) === 18) {
// 		return "Congratulations on your first year of driving. Enjoy the ride!";
// 	}
// }

// .toUpperCase() "this changes the string to uppercase"
// .toLowerCase() "this changes the string to lowercase"
// .length shows the length of the string or array

// this is to get the length of the text then divide
// the length by half and the slice the text from 0 to the half point.
// let pass = "freed"
// let half= pass.length
// let mid= half/2
// console.log(pass.slice(0,mid));

// assignment 1
// print out the length of the word without space.
// let word ="how is your mom and siblings doing. ";
// console.log(word.length);
// let trimmed = word.replace(/\s/g,"")
// let trimmedText = trimmed.length;
// console.log(trimmed);
// console.log(trimmedText);

// let word2 = "how was your day? ";
// let trimmed2 = word2.trim();
// console.log(trimmed2);

 
// let words1 = "hello world";
// let toReplace = "o";
// let replaceWith= "x";
// let newWord = words1.replace(new RegExp(toReplace, 'g'), replaceWith);
// console.log(newWord);
// console.log(replaceWith);

// let word3 = "hello world";
// let wordR = word3.replaceAll("world", "universe");
// console.log(wordR);

// // math method 
// const maths = Math.sqrt(4);
// console.log(maths);
 
// let result = Math.cos(45);
// console.log(result);

// let anotherNumber = Math.pow(4,3);
// console.log(anotherNumber);
// // this rounds 
// let newNumber = Math.random()*10000;
// console.log(Math.floor(newNumber));
// //this rounds up the number for you 
// console.log(Math.ceil(newNumber));
//  // .round round up the value for you
//  let roundNumber = Math.round(Math.random()*100);
// function checkDriverAge(age) {
// 	if (Number(age) < 18) {
// 		return "Sorry, you are too yound to drive this car. Powering off";
// 	} else if (Number(age) > 18) {
// 		return "Powering On. Enjoy the ride!";
// 	} else if (Number(age) === 18) {
// 		return "Congratulations on your first year of driving. Enjoy the ride!";
// 	}
// } 
// console.log(checkDriverAge(50));

//  let name = [["Name",23,true],["abigal",45,false]]
//  console.log(name[0][2]);

// let name1 = ["Name",23,true,["abigal",45,false]]
// console.log(name1[3][1]);
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// console.log(array.sort());
// console.log(array.concat(["orange"]));
// console.log(array.pop());
// console.log(array.push(""));
// console.log(array);
// console.log(array.reverse());
// console.log(array.filter());
// console.log(array.slice([0],[1]));


// Ctx.moveTo(10,10)
// Ctx.lineTo()
//Array method 
// there are two types of array method which are
// normal array method and higher order array method

// const names = "bad man"
// const hey= names.sort();
// console.log(hey)

// const names = "Bad man, Good man, yellow boy";
// const resultName = names.split("");
// console.log(resultName);


// .pop removes the last element and returns what was popped
// .unshift is used to add the value to the start
// .push is used to add to the array and gives you the length
// .shift is  to remove the first element and returns it
// .reverse is used to reverse each item in the array
// .join is used to change an array back to a string without commas
// .toString is use to change array to string but added commas

// const arr = ["finbarr", 1, true, null];
// const poparr = arr.reverse();
// console.log(poparr);
// console.log(arr);

let name = "hello";
let nameArr= name.split("");
let namereverse = nameArr.reverse();
let nameReStr = namereverse.join("");

console.log(nameReStr);