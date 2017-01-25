'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const gameStatus = require('./game');
const player = require('./player');
const board = require('./board');

$(() => {
  setAPIOrigin(location, config);
});
// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

let game, currentPlayer, winner, gameEnd;
//
const gameStart = function () {
   game = new board.Board();
   currentPlayer = player.playerOne;
};


$().on('click',gameStart());

//

const switchPlayer = function () {
  if (currentPlayer === player.playerOne){
    currentPlayer = player.playerTwo;
  } else {
    currentPlayer = player.playerOne;
  }
};

const onClick = function (index) {
  game.boardUpdated(index, currentPlayer);
  switchPlayer();
  winner = gameStatus.winner(game, player);
  gameEnd = gameStatus.isEnd(game);
  if (winner){
    console.log('congradulation!');
  } else if (gameEnd){
    console.log('draw');
  }
};


//
$().on('click', onClick);



// use require without a reference to ensure a file is bundled
require('./example');
