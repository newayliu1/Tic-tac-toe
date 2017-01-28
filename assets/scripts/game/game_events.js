'use strict';

const gameStatus = require('./gameStatus');
const player = require('./player');
const game = require('./board');
const api = require('../auth/api');
const ui = require('../auth/ui');

let board, currentPlayer, winner, gameEnd = true;

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
  board.cells[index] = currentPlayer.sign;
  winner = gameStatus.winner(board.cells, currentPlayer);
  gameEnd = gameStatus.isEnd(board.cells, currentPlayer);
  if (winner) {
    $('.result-display').text('Congradulation ' + winner.email);
    $('.container').off('click');
  } else if (gameEnd) {
    $('.result-display').text('Tie!!!!!!!!!!');
  }
  unativeClick();
};

//event

const event_index = function(event) {

  return parseInt(event.target.id);
};


const click_event = function(event) {
  event.preventDefault();
  let index = event_index(event);
  if (!board.cells[index]) {
    $(event.target).text(currentPlayer.sign);
    onClick(index);
    let data = game.patch_data(index, currentPlayer.sign, gameEnd);
    console.log(data);
    api.updateCells(data, board.id)
      .then(ui.success)
      .catch(ui.failure);
    api.getGame(board.id);
    switchPlayer();
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
    api.addGame()
      .then((response) => {
        game.board = response;
        board = game.board.game;
      });

    currentPlayer = player.playerOne;
    emptyBoard();
    gameEnd = false;
  }
};


module.exports = {
  gameStart,
};
