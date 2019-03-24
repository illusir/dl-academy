"use strict";

//1 (found this solution on the internet, understand the logic (wrote it in the comments))
//two functions for prime numbers and showing results
//simplier solution possible

console.log ('==========');
console.log ('Assignment #1');


//check if prime number

function primeNum(num){
if( num < 2 ) return false;
var count = 2;
while(count < num) {
  if(num % count === 0) {
    return false;
  }
  count++;
}
return true;
}

//show prime number

function showNum(max) { //max values to show
  var i = 0; //counter
  var resultLog = []; //array for results

  while (i < max) {
    if(primeNum(i)) resultLog.push(i);
    i++;
  }
  console.log(resultLog);
}

showNum(100); //show desired number of values

//2

console.log ('==========');
console.log ('Assignment #2');

function Numbers() {
  var num = 0; //start with zero

  do {
    if (num === 0) {
      console.log (num +' is ZERO'); //check if zero
    } else if (num % 2 === 0) {
      console.log (num + ' is an EVEN number'); //check if even
    } else {
      console.log (num + ' is an ODD number'); //check if odd
    }
    num++;
  } while (num <= 10); //do stuff while num is from 0 to 10
}

console.log (Numbers());

//3

console.log ('==========');
console.log ('Assignment #3');

var num;
for ( num = 0; num <= 9; num++){
  console.log(num);
}

//4

console.log ('==========');
console.log ('Assignment #4');

 var cross = ''; //start with nothing
 for(var i = 1; i < 20; i++) {
  cross += 'x'; //add 1 cross for 20 times
  console.log(cross) //log crosses
 }

//5

console.log ('==========');
console.log ('Assignment #5');

//test array
console.log ('Something is missing here...');
var testArr = ['one', 'two', 'three', 'four', 'seven', 'eight', 'nine', 'ten'];
console.log (testArr);

//add values, known array length
//console.log ('We need to ddd missing words in the middle! (length known)');
//testArr.splice(4, 0, "five", "six");
//console.log (testArr);

//add values, unknown array length
console.log ('We need to add missing words in the middle! (length unknown)');
var arrLength = testArr.length;
var arrMid = (testArr.length/2); //know the middle
testArr.splice(arrMid, 0, 'five', 'six');
console.log (testArr);
