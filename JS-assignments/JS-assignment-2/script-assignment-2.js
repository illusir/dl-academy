"use strict";

//Let's Play


document.getElementById("button").onclick = function () {
var min = 1;
var max = 10;
var num = rndmnum(min, max);
var urnum = prompt('Your number from ' + min + ' to ' + max + '?');
var count = 1;
var victory = 0;
var maxtries = 3; //number of tries

function rndmnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
} //this returns random number

while (urnum != num) {
  count += 1;

  //no more tries
  if (count > maxtries) {
    alert ('Time is up! You have no more attempts! \nThe correct answer is ' + num);
    break;
    //comparison
  } else if (isNaN(urnum)) {
  	var urnum = prompt('Your answer: ' + urnum + ' is not a number!');
  } else if (urnum === undefined || urnum === '') {
     var urnum = prompt('Nope, pick a number!');
     } else if (urnum > num) {
       var urnum = prompt('Your answer: ' + urnum + ' is bigger than required!');
     } else if (urnum < num) {
       var urnum = prompt('Your answer: ' + urnum + ' is smaller than required!');
     }

     //if correct
    if (urnum == num) {
      alert('Your answer: ' + urnum + ' is correct!');
      victory += 1;
      alert('It took you only ' + count + ' tries! \nYou have ' + victory + ' victories!');
      count = 1;
      var urnum = prompt('One more try! \nYour number from ' + min + ' to ' + max + '?');
    }
}
}
