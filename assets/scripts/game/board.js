"use strict";
//board may set up the new game here
const Board = function () {
  this.board = new Array(9).fill("");
};//get array from game
//set the sign to the player

Board.prototype.boardUpdate = function (index, player) {
    this.board[index]=player.sign;
};

module.exports = {
Board,
};
