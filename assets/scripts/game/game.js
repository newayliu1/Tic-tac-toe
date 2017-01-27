'use strict';

const gameStatus = require('./gameStatus');
const player = require('./player');
const board = require('./board');



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
  if (winner) {
    $('.result-display').text('Congradulation '+ winner.email);
    $('.container').off('click');
  } else if (gameEnd) {
    $('.result-display').text('Tie!!!!!!!!!!');
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
const gameStart = function(event) {
  event.preventDefault();
  if (gameEnd) {
    game = new board.Board();
    currentPlayer = player.playerOne;
    emptyBoard();
  }
};


module.exports = {
  gameStart,
};
