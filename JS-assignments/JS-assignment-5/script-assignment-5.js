"use strict";

window.onload = function(){

  function chess() {

    //variables

    var chessField = document.getElementById('checker');
    var hor = 10;
    var ver = 10;
    var numSpace = ver - 1;

    //numbers and letters

    var num = [1, 2, 3, 4, 5, 6, 7, 8];
    var letter = [' ','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ' '];

    //figures

    var figure = {
        k: {
        	name: 'King'
        },
        q: {
          name: 'Queen'
        },
        r: {
        	name: 'Rook'
        },
        e: {
        	name: 'Elephant'
        },
        h: {
        	name: 'Horse'
        },
        p: {
        	name: 'Pawn'
        }
      }

    //main board

    for (var i = 0; i < ver; i++) {
      var row = chessField.appendChild(document.createElement('div'));
      row.classList.add('line');
      if (i >= 0 && i <= numSpace) {
    //  row.innerHTML = num[i];
      }
          for (var j = 0; j < hor; j++) {
            var span = row.appendChild(document.createElement('span'));
            if (i == numSpace) {
            var letField = chessField.appendChild(document.createElement('div'));
            var singleLet = letField.appendChild(document.createElement('div'));
            singleLet.classList.add('letter');
            singleLet.innerHTML = letter[j];
          }

          }

    }

  }

chess();

}
