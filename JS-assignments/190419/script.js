"use strict";

//variables

var button = document.getElementById("button--1st-screen");
var modal = document.getElementById('modal-bg');
var modalWindow = document.getElementById('modal');
var cross = document.getElementById('cross');
var crossTop = document.getElementById('cross-top');
var first = document.getElementById("header");
var firstBg = document.getElementById("header-bg");
var second = document.getElementById("services-exam");
var bg = document.getElementById("services-bg");


//Show modal window

button.onclick = function () {
function showModal() {
  modal.classList.add('modal-bg--active');
  modalWindow.classList.add('modal--active');
  //modalWindow.style.height = "100vh";
}
showModal();
}

function hideModal() {
  //hide by clicking on the cross
      cross.onclick = function() {
      modal.classList.remove('modal-bg--active');
      modalWindow.classList.remove('modal--active');
      //modalWindow.style.height = "0";
  }

  //hide by clicking on the space around
  window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.classList.remove('modal-bg--active');
    modalWindow.classList.remove('modal--active');
  }
  });

}
hideModal();

//Scroll

function addActive() {
  first.style.transform = `translateY(${pageYOffset/3}px)`;
  firstBg.style.filter = `blur(${pageYOffset/70}px)`;
};

function skew() {
  if (pageYOffset < 200) {
    bg.style.transform = `skewY(${pageYOffset/-50}deg)`;
  }
}

onscroll = () => {
if (pageYOffset >= 200) {
    addActive(true);
  } else addActive(false);

  skew();

};
