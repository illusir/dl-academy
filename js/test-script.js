//Let's Play

var min = 1000;
var max = 9999;
var num = rndmnum(min, max);
var urnum = prompt('Your number? Enter 4 digits!');

function rndmnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (isNaN(urnum)) {
	alert('Your answer: ' + urnum + ' is not a number!');
} else if (urnum === 'undefined' || urnum === '') {
   alert('Nope, pick a number!');
   prompt();
   } else if (urnum > num) {
     alert('Your answer: ' + urnum + ' is bigger than required!');
   } else if (urnum < num) {
     alert('Your answer: ' + urnum + ' is smaller than required!');
   } else {
       alert('Your answer: ' + urnum + ' is correct!');
       }

alert('And the answer is ' + num + '!');
