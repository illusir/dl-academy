"use strict";

window.onload = function(){

  //variables

  var chessField = document.getElementById('checker');
  var hor = 10;
  var ver = 10;
//  var numSpace = ver - 1;

  //numbers and letters

  var num = ['+', '+', 1, 2, 3, 4, 5, 6, 7, 8,'+', '+'];
  var letter = [' ', ' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',  ' ', ' '];

  //figures

  var figure = {
      king: {
        name: 'K',
        imgwhite: '&#9812',
        imgblack: '&#9818'
      },
      queen: {
        name: 'Q',
        imgwhite: '&#9813',
        imgblack: '&#9819'
      },
      rook: {
        name: 'R',
        imgwhite: '&#9814',
        imgblack: '&#9820'
      },
      elephant: {
        name: 'E',
        imgwhite: '&#9815',
        imgblack: '&#9821'
      },
      horse: {
        name: 'H',
        imgwhite: '&#9816',
        imgblack: '&#9822'
      },
      pawn: {
        name: 'P',
        imgwhite: '&#9817',
        imgblack: '&#9823'
      }
    }

  function chess() {

    //main board

    for (var i = 1; i <= ver; i++) {
      var row = chessField.appendChild(document.createElement('div'));
      if (i==1 || i == ver) {
        row.classList.add('letter');
      } else {
      row.classList.add('line');
    }
    //  if (i >= 0 && i <= numSpace) {
    //  row.innerHTML = num[i];
    //  }
          for (var j = 1; j <= hor; j++) {
            var span = row.appendChild(document.createElement('span'));
            if (j == 1 || j == hor) {

            //var letField = chessField.appendChild(document.createElement('div'));
            //var singleLet = letField.appendChild(document.createElement('div'));

            span.classList.add('letter');
            span.innerHTML = num[i];


          } else if (i == 1 || i == ver) {
            span.innerHTML = letter[j];
          } else if (j % 2 != 1 && i % 2 != 1) {
            span.classList.add('black');
          } else if (j % 2 != 1 && i % 2 == 1){
            span.classList.add('white');
          } else if (j % 2 == 1 && i % 2 != 1){
            span.classList.add('white');
          } else {
            span.classList.add('black');
          }

          //figures

          //Pawn as letters

          /*if (i == 3 || i == ver - 2 ) {
            if (j != 1 && j != hor) {
            span.innerHTML = (figure.pawn.name);
            }
          }*/

          //Others as letters
          /*if (i == 2 || i == ver - 1 ) {
            if (j == 2 || j == hor - 1) {
            span.innerHTML = (figure.rook.name);
          } else if (j == 3 || j == hor - 2) {
            span.innerHTML = (figure.horse.name);
          } else if (j == 4 || j == hor - 3) {
              span.innerHTML = (figure.elephant.name);
          } else if (j == 5) {
            span.innerHTML = (figure.queen.name);
          } else if (j == 6){
            span.innerHTML = (figure.king.name);
          }
        }*/

          //Pawn
          if (i == 3) {
            if (j != 1 && j != hor) {
            span.innerHTML = (figure.pawn.imgwhite);
            }
          } else if (i == ver - 2 ) {
            if (j != 1 && j != hor) {
            span.innerHTML = (figure.pawn.imgblack);
            }
          }

          //Rook

          if (i == 2) {
            if (j == 2 || j == hor - 1) {
            span.innerHTML = (figure.rook.imgwhite);
            }
          } else if (i == ver - 1 ) {
            if (j == 2 || j == hor - 1) {
            span.innerHTML = (figure.rook.imgblack);
            }
          }

          //Horse/Knight

          if (i == 2) {
            if (j == 3 || j == hor - 2) {
            span.innerHTML = (figure.horse.imgwhite);
            }
          } else if (i == ver - 1 ) {
            if (j == 3 || j == hor - 2) {
            span.innerHTML = (figure.horse.imgblack);
            }
          }

          //Elephant/Bishop

          if (i == 2) {
            if (j == 4 || j == hor - 3) {
            span.innerHTML = (figure.elephant.imgwhite);
            }
          } else if (i == ver - 1 ) {
            if (j == 4 || j == hor - 3) {
            span.innerHTML = (figure.elephant.imgblack);
            }
          }

          //Queen

          if (i == 2) {
            if (j == 5) {
            span.innerHTML = (figure.queen.imgwhite);
            }
          } else if (i == ver - 1 ) {
            if (j == 5) {
            span.innerHTML = (figure.queen.imgblack);
            }
          }

          //King

          if (i == 2) {
            if (j == 6) {
            span.innerHTML = (figure.king.imgwhite);
            }
          } else if (i == ver - 1 ) {
            if (j == 6) {
            span.innerHTML = (figure.king.imgblack);
            }
          }

      }
    }
  }

chess();

}
