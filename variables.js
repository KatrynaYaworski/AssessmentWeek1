//////////////////PROBLEM 1////////////////////
/* Create a variable called 'myName' with a value that is your name as a string. */

let myName = 'Katryna' //I used 'let' Because name could change!

//////////////////PROBLEM 2////////////////////
/* Create a variable called 'faveNum' with a value that is your favorite number. */

let faveNum = 7

//////////////////PROBLEM 3////////////////////
/* Create a variable called 'lovesCode' and assign it a boolean value. */

const lovesCode = true // I used const for obvious reasons :P

//////////////////PROBLEM 4////////////////////
/*
  Write an if-statement that checks if the faveNum variable is 
  equal to 13. If it is, console.log('lucky 13!'). 
  If it's not, console.log('not lucky 13').
*/

if (faveNum === 13){
  console.log('lucky 13!')
}else {
  console.log('not lucky 13')
}

//////////////////PROBLEM 5////////////////////
/*
  Write a for loop that prints out your faveNum 5 times.
*/

for (let i = 1; i < 6; i++){
  console.log(i,` favNum = ${faveNum}`) //So I can easily see how many times it prints out without counting all of the lines :P
}


