"use strict";

//variables

var first = document.getElementById("first");
var second = document.getElementById("content");

//Scroll

function addActive() {
  first.style.transform = `translateY(${pageYOffset/3}px)`;
  first.style.filter = `blur(${pageYOffset/70}px)`;
};

onscroll = () => {
  if (pageYOffset >= 200) {
    addActive(true);
  } else addActive(false);


};
