'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');
const gameStatus = require('./game/game');
const player = require('./game/player');
const board = require('./game/board');

$(() => {
  setAPIOrigin(location, config);
});
// use require with a reference to bundle the file and use it in this file
// const example = require('./example');

let game, currentPlayer, winner, gameEnd = true;

//
const switchPlayer = function() {
  if (currentPlayer === player.playerOne) {
    currentPlayer = player.playerTwo;
  } else {
    currentPlayer = player.playerOne;
  }
};

const unativeClick = function() {
  if (gameEnd) {
    $('.box').off('click');
  }
};

const onClick = function(index) {

  game.boardUpdate(index, currentPlayer);
  winner = gameStatus.winner(game.board, currentPlayer);
  gameEnd = gameStatus.isEnd(game.board, currentPlayer);
  console.log(gameEnd);
  console.log(game.board);
  if (winner) {
    console.log('Congradulation');
    $('.container').off('click');
  } else if (gameEnd) {
    console.log('Tie!!!!!!!!!!');
  }
  unativeClick ();
  switchPlayer();
};

//event

const event_index = function(event) {

  return parseInt(event.target.id);
};

const click_event = function(event) {
  event.preventDefault();
  let index = event_index(event);
  if (!game.board[index]) {
    $(event.target).text(currentPlayer.sign);
    onClick(index);
  }
};

//
const emptyBoard = function() {
    $('.box').text('');
    $('.box').on('click', click_event);
};

//
const gameStart = function() {
  if (gameEnd) {
    game = new board.Board();
    currentPlayer = player.playerOne;
    emptyBoard();
  }
};


$('#start-button').on('click', gameStart);



// use require without a reference to ensure a file is bundled
// require('./example');
