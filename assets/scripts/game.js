"use strict";
//main files in the engine

const combination = [[0,1,2],[3,4,5],[6,7,8],
                    [0,3,6],[1,4,7],[2,5,8],
                    [0,4,8], [2,4,6]];

const indexOfPlayer = function (board, player) {
  let result = [];
  board.forEach((el,i) => {
    if (el === player.sign){
      result.push(i);
    }
  });
  return result;
};

// checking the inputer player indexes matches to any combination.
// if any of the elements in combination in which the indexes includes all
//single elements.  some checking any, every check all

const isWin = function (indexOfPlayer) {
  return combination.some(function(el) {
    return el.every((element) => indexOfPlayer.includes(element));
  });
};

// return the player object

const winner = function (board, player) {
  let playerOneIndex = indexOfPlayer(board, player.playerOne);
  let playerTwoIndex = indexOfPlayer(board, player.playerTwo);
  if (isWin(playerOneIndex)){
    return player.playerOne;
  } else if (isWin(playerTwoIndex)) {
    return player.playerTwo;
  }
  return console.log(playerOneIndex);
};

//return true or false

const isEnd = function (board) {
  if (winner()) {
    return true;
  } else if (board.includes("")) {
    return false;
  }
  return true;
};

module.exports = {
  isEnd,
  winner,
  isWin,
};
