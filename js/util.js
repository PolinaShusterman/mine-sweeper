'use strict'


function renderBoard(board) {
    console.table(board);
        var strHTML = '';
        for (var i = 0; i < board.length; i++) {
            strHTML += `<tr>\n`
            for (var j = 0; j < board[0].length; j++) {
                var currCell = board[i][j]
                //var className = currCell ? 'isMine' : ''
                strHTML += `<td class="${className}"
                data-i="${i}" data-j="${j}"
                onclick="onCellClicked(this,${i},${j})">
                ${currCell}</td>`
            }
            strHTML += `</tr>\n`
        }
        console.log('strHTML', strHTML)
        var elBoard = document.querySelector('.board')
        elBoard.innerHTML = strHTML
    }
//     var strHTML = '<table border="0"><tbody>'
//     for (var i = 0; i < board.length; i++) {

//         strHTML += '<tr>'
//         for (var j = 0; j < board[0].length; j++) {

//             var cell = board[i][j]
//             var className = 'cell cell-' + i + '-' + j
//             strHTML += `<td class="${className}">${cell}</td>`
//         }
//         strHTML += '</tr>'
//     }
//     strHTML += '</tbody></table>'
    
//   var elBoard = document.querySelector(board)
//     elBoard.innerHTML = strHTML
// }

// location such as: {i: 2, j: 7}
// function renderCell(location, value) {
//     // Select the elCell and set the value
//     const elCell = document.querySelector(`.cell-${location.i}-${location.j}`)
//     elCell.innerHTML = value
// }



function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}