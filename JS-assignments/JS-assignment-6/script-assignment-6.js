"use strict";

//variables

var button = document.getElementById("button");
var modal = document.getElementById('modal-container');
var modalWindow = document.getElementById('modal');
var cross = document.getElementById('cross');
var crossTop = document.getElementById('cross-top');
var burger = document.getElementById('burger');
var menu = document.getElementById('menu-container');
var menuWindow = document.getElementById('menu');

//Show modal window

button.onclick = function () {
function showModal() {
  modal.classList.add('modal-container--active');
  modalWindow.classList.add('modal--active');
}
showModal();
}

function hideModal() {
  //hide by clicking on the cross
  cross.onclick = function() {
      modal.classList.remove('modal-container--active');
      modalWindow.classList.remove('modal--active');
  }
  //hide by clicking on the space around
  window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.classList.remove('modal-container--active');
    modalWindow.classList.remove('modal--active');
  }
  });
}
hideModal();

//Show Menu

burger.onclick = function () {
  function showMenu() {
    menu.classList.add('menu-container--active');
    menuWindow.classList.add('menu--active');
    menuWindow.style.width = "320px";
  }
  showMenu();
}

//Hide Menu

function hideMenu() {
  //hide by clicking on the cross
  crossTop.onclick = function() {
      menu.classList.remove('menu-container--active');
      menuWindow.classList.remove('menu--active');
      menuWindow.style.width = "0";
  }
  //hide by clicking on the space around
  window.addEventListener('click', function(event) {
  if (event.target == menu) {
    menu.classList.remove('menu-container--active');
    menuWindow.classList.remove('menu--active');
    menuWindow.style.width = "0";
    }
  });
}
hideMenu();
