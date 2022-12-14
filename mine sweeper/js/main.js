"use strict";
const MINE = '<img src="img/mine.png">'
const FLAG = '<img src="img/flag.png">'

// model
 var gBoard = {}

//  board size is set (in this case: 4x4 board and how many mines to put)
var gLevel = { SIZE: 4, MINES: 2 };

//  This is an object in which you can keep and update the current game state:
// isOn: Boolean, when true we let the user play
// shownCount: How many cells are shown
//markedCount: How many cells are marked (with a flag)
// secsPassed: How many seconds passed

var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0,
};


// 2. Present the mines using renderBoard() function.

function onInitGame() {
    gBoard = buildBoard()
    renderBoard(gBoard)

    //setMines(board)
}


// Set mines at random locations
// Call setMinesNegsCount()
// Return the created board
function buildBoard() {
    var board = []
    for (var i = 0; i < 4; i++) {
        board.push([])
        for (var j = 0; j < 4; j++) {
            board[i][j] = {
                minesAroundCount: 4,
                isShown: true,
                isMine: false,
                isMarked: true,
            }
           // board[i][j] = (Math.random() > 0.16) ? !board[i][j].isMine : board[i][j].isMine
        }
    }
    console.table(board)

    board[1][2].isMine = true
    board[2][0].isMine = true
    console.log(board[2][0].isMine)

    // board[0][2].isMine = true

    // console.log ('gbord mine', board[i][j].isMine)
    return board
}



function setMines(board) {
    var emptyPos = getEmptyPos()
    // Model 
    
    gBoard[emptyPos.i][emptyPos.j].isMine = MINE
    // Dom
    renderCell(emptyPos, MINE)
}



//     for (i = 0; i < board.length; i++) {
//         for (var j = 0; j <board[0].length ; j++) {
//            // board[i][j].isMine = getRandomIntInclusive(0, board.length) % 4
//            // if (board[i][j].isMine = true) { }
// console.log ('board is mine',board[i][j])
//         }

//     }

// }


function getEmptyPos() {
	var emptyPoses = []
	for (var i = 0; i < gBoard.length; i++) {
		for (var j = 0; j < gBoard[0].length; j++) {
			var cell = gBoard[i][j]
			if (cell.type === MINE && !cell.gameElement) {
				var pos = { i: i, j: j }
				emptyPoses.push(pos)
			}
		}
	}
	var randIdx = getRandomInt(0, emptyPoses.length)
	return emptyPoses[randIdx]
}







// function countNegs(cellI, cellJ, mat) {
//     var negsCount = 0;
//     for (var i = cellI - 1; i <= cellI + 1; i++) {
//         if (i < 0 || i >= mat.length) continue;
//         for (var j = cellJ - 1; j <= cellJ + 1; j++) {
//             if (j < 0 || j >= mat[i].length) continue;
//             if (i === cellI && j === cellJ) continue;
//             // if (mat[i][j] === LIFE || mat[i][j] === SUPER_LIFE) negsCount++;
//             if (mat[i][j]) negsCount++;
//         }
//     }
//     return negsCount;
// }