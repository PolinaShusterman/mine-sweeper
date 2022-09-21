'use strict'
//Render the board as a <table> to the page
function renderBoard(gBoard) {
    var strHTML = "<table><tbody>";
    for (var i = 0; i < gBoard.length; i++) {
      strHTML += "<tr>";
      for (var j = 0; j < gBoard.length; j++) {
        var cell = gBoard[i][j].minesAroundCount;
        var ncell = gBoard[i][j].isMine;
        console.log(ncell);
        var className = "cell cell-" + i + "-" + j;
  
        if (ncell) {
       
          strHTML += `<td class="${className}"><img src = "img/mine.png"></td>`;
          console.log(cell.isMine);
        } else {
          strHTML += `<td class="${className}">${cell}</td>`;
        }
      }
      strHTML += "</tr>";
    }
    strHTML += "</tbody></table>";
  
    var elBoard = document.querySelector(".board");
    elBoard.innerHTML = strHTML;
  }
  







function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}