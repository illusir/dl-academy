"use strict";

document.getElementById("button").onclick = function () {

function numToObj(num) {
  num = prompt('Enter the number from 0 to 999');
  var  numContains = {
    "Units": 0,
    "Dozens": 0,
    "Hundreds": 0
  }
while (num != 999 && num >= 0) {
  if (num > 999) {
    num = console.log('Number is bigger than required');
    numContains = {};
    num = prompt('Enter the number from 0 to 999');
} else if (num<=999){
  numContains["Units"] = Math.floor(num % 10);
  numContains["Dozens"] = Math.floor(num/10 % 10);
  numContains["Hundreds"] = Math.floor(num /100 % 10);

  console.log('==========');
  console.log('Number ' + num + ' parts counter:');
  console.log(numContains);
  num = prompt('Enter the number from 0 to 999');
}
}
}
numToObj();
}
