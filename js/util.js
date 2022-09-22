'use strict'
//Render the board as a <table> to the page
function renderBoard(gBoard) {
    var strHTML = "<table><tbody>"
    for (var i = 0; i < gBoard.length; i++) {
        strHTML += "<tr>"
        for (var j = 0; j < gBoard[i].length; j++) {

            var currCell = gBoard[i][j]
            var className = currCell.isShown
           

            strHTML += `<td class="${className}" onclick="onCellClicked(this,${i},${j})"> ${currCell}</td>`
        }
    }
    strHTML += "</tr>"

    strHTML += "</tbody></table>"
    console.log('strHTML', strHTML)
    
    var elBoard = document.querySelector(".board")
    elBoard.innerHTML = strHTML
}


    




function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}