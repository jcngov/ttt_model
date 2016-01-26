console.log("main.js loaded");
// document.addEventListener("load", function()){
// MODEL

var won = false;
var currentPlayer = "X";
var board = [
  "", "", "", //0, 1, 2
  "", "", "", //3, 4, 5
  "", "", "" //6, 7, 8
];

// 1. START THE GAME
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
var gameWon = function() {};
// 4. RESET

// };
