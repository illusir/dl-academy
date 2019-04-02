"use strict";

window.onload = function(){

  function chess() {

    var chessField = document.getElementById('checker');
    var hor = 8;
    var ver = 8;

    for (var i = 0; i < ver; i++) {
      var row = chessField.appendChild(document.createElement('div'));
      row.classList.add('line');

      for (var j = 0; j < hor; j++) {
        row.appendChild(document.createElement('span'));
      }
    }

  }

chess();

}
