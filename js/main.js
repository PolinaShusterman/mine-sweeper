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
}

function onInitGame() {
    //stopTimer()
    gBoard = buildBoard()
    var minesNegCount =  setMinesNegsCount(gBoard[i],gBoard[j],gBoard)
    
   // renderBoard(gBoard)
        
}

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
            
            board[i][j].isMine = (Math.random() > 0.8) ? !board[i][j].isMine : board[i][j].isMine
            
            
            
        }
        
        
    } 
    console.table(board)
    return board
}
 

// Create setMinesNegsCount() and store the numbers (isShown is still true)
// 2. Present the board with the neighbor count using renderBoard() function.
// 3. Have a console.log presenting the board content – to help you with debugging
// Count mines around each cell and set the cell's minesAroundCount.

function setMinesNegsCount(board) {
    var minesNegCount = 0
    for (var i = gBoard[i] - 1; i <= gBoard[i] + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = gBoard[j] - 1; j <= gBoard[j] + 1; j++) {
            if (j < 0 || j >= board[0].length) continue
            if (i === gBoard[i] && j === gBoard[j]) continue
            if (!board[i][j].isMine) minesNegCount++
            board[i][j].minesAroundCount.push(minesNegCount)
            
        }
    }
    console.log('minesNegCount', minesNegCount)

    return minesNegCount
}







// function findPlaceForMines() {
//     var emptyCell = []
//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard[i].length; j++) {
//             var mineCell = gBoard[i][j].isMine
//             emptyCell.push(mineCell)
//             var randIdx = getRandomInt(0, emptyCell.length)
//         }
// console.log (emptyCell)
//     }return emptyCell[randIdx]
// }

// function setMines(gBoard) {
//         var emptyPos = findPlaceForMines()
//         // Model 

//         gBoard[emptyPos.i][emptyPos.j] = true
//         // Dom
//         renderCell(emptyPos, MINE)
//     }

//     function renderCell(location, value) {
//         var cellSelector = '.' + getClassName(location) // .cell-3-5
//         var elCell = document.querySelector(cellSelector) // <td></td>
//         elCell.innerHTML = value
//     }





// function getEmptyPos() {
//     var emptyPoses = []
//     for (var i = 0; i < gBoard.length; i++) {
//         for (var j = 0; j < gBoard[0].length; j++) {
//             var cell = gBoard[i][j]
//             if (cell.type === MINE && !cell.gameElement) {
//                 var pos = { i: i, j: j }
//                 emptyPoses.push(pos)
//             }
//         }
//     }
//     var randIdx = getRandomInt(0, emptyPoses.length)
//     return emptyPoses[randIdx]
// }
// function setMines(board) {
//     var emptyPos = getEmptyPos()
//     // Model 

//     gBoard[emptyPos.i][emptyPos.j].isMine = MINE
//     // Dom
//     renderCell(emptyPos, MINE)
// }


function cellClicked(elCell, num) {
    console.log(elCell.dataset, num);
    if (+elCell.dataset.num === gNextNum) {
        if (gNextNum === 1) startTimer()
        elCell.classList.add('clicked')
        gNextNum++
        if (gNextNum >= gSize) stopTimer()
        renderNextNum()
    }
}

// function startTimer() {
//     gStartTime = Date.now()
//     gTimeInterval = setInterval(updateTimer, 100)

// }

// function updateTimer() {
//     var diff = Date.now() - gStartTime
//     var inSeconds = (diff / 1000).toFixed(3)
//     document.querySelector('.timer').innerText = inSeconds
// }

// function stopTimer() {
//     clearInterval(gTimeInterval)
// }





