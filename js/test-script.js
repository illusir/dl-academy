//Let's Play

var min = 1;
var max = 10;
var num = rndmnum(min, max);
var urnum = prompt('Your number? Enter 4 digits!');
var count = 0;
var maxtries = 3; //3 tries only!

function rndmnum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (urnum != num) {
  count += 1;

  //no more tries
  if (count > maxtries) {
    alert ('Time is up! You have no more attempts!');
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
      alert('It took you only ' + count + ' tries!');
    }
}
