"use strict";

//variables

var button = document.getElementById("button");
var modal = document.getElementById('modal-container');
var cross = document.getElementById('cross');
var crossTop = document.getElementById('cross-top');
var burger = document.getElementById('burger');
var menu = document.getElementById('menu-container');

//Show modal window

button.onclick = function () {
function showModal() {
  modal.classList.add('modal-container--active');
}
showModal();
}

function hideModal() {
  //hide by clicking on the cross
  cross.onclick = function() {
      modal.classList.remove('modal-container--active');
  }
  //hide by clicking on the space around
  window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.classList.remove('modal-container--active');
    }
  });
}
hideModal();

//Show Menu

burger.onclick = function () {
  function showMenu() {
    menu.classList.add('menu-container--active');
  }
  showMenu();
}

//Hide Menu

function hideMenu() {
  //hide by clicking on the cross
  crossTop.onclick = function() {
      menu.classList.remove('menu-container--active');
  }
  //hide by clicking on the space around
  window.addEventListener('click', function(event) {
  if (event.target == menu) {
    menu.classList.remove('menu-container--active');
    }
  });
}
hideMenu();
