console.log("main.js loaded");
// document.addEventListener("load", function()){

// DATA MODEL:
var won = false;
var currentPlayer = "X";
var board = [
  "", "", "", //0, 1, 2
  "", "", "", //3, 4, 5
  "", "", "" //6, 7, 8
];

// 1. START THE GAME
    // inputs:
    //   - current player, board, won
    // outputs:
    //   - board is emptied, player is X, won is false

var startGame = function() {
// Don't need to write anything because using global variables; if not use parameters
  won = false;
  currentPlayer = "X";
  var board = [
   "", "", "",
    "", "", "",
    "", "", ""
  ];
};

// 2. MOVE (CHANGES TURN)
        //inputs:
        //- whose turn it is,
        //- what cell move to

        // outputs: GOALS
        // - fill in cell with the right player,
        // - calculate if there is a winner,
        // - turn changes

// don't really need (currentPlayer) in below function)
// because its a global scope,
// var move = function(currentPlayer, boardArray) {

// };

// currentPlayer = (currentPlayer === "X" ? "O" : "X");
var move = function(cellIndex) {
  board[cellIndex] = currentPlayer;
  if (gameWon()) {
    won = true;
  } else {
     if (currentPlayer === "X") {
        currentPlayer = "O";
        } else {
          currentPlayer = "X";
        }
  }
};
// 3. WIN CONDITIONS
      // input:
        // - board
      // output:
        // - true OR false

        // if (same way as doing below)
        //   Math.abs(board[0] + board[1] + board[2]) === 3 || ...
var gameWon = function() {
  if (
     ((board[0] === currentPlayer) && (board[1] === currentPlayer) && (currentPlayer === board[2])) ||
     ((board[3] === board[4]) && (board[3] === board[5]) && board[3] !== "") ||
     ((board[6] === board[7]) && (board[6] === board[8]) && board[6] !== "")
  ) {
    return true;
  } else {
    return false;
  }
};
// 4. RENDER OUR VIEW

var render = function() {
  // Render Turn Counter Component
  var turnEl = document.getElementById("turn");
  turnEl.textContent = "Turn: " + currentPlayer;

  // Render Winner Component
  var winnerEl = document.getElementById("winner");
  if (won = false) {
    winnerEl.textContent = "Winner: ?";
  } else {
    winnerEl.textContent = "Winnr: " + currentPlayer;
  }
};
