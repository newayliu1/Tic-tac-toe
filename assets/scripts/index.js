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

let game, currentPlayer, winner, gameEnd;




const gameStart = function() {
  game = new board.Board();
  currentPlayer = player.playerOne;
  console.log(game.board);
  console.log(currentPlayer);
};


$('#start-button').on('click', gameStart);
//

const switchPlayer = function() {
  if (currentPlayer === player.playerOne) {
    currentPlayer = player.playerTwo;
  } else {
    currentPlayer = player.playerOne;
  }
};

const onClick = function(index) {
  if (!game.board[index]) {
    game.boardUpdate(index, currentPlayer);
    winner = gameStatus.winner(game.board, currentPlayer);
    gameEnd = gameStatus.isEnd(game.board, currentPlayer);
    if (winner) {
      console.log('currentPlayer.email');
    } else if (gameEnd) {
      console.log('draw');
    }
    switchPlayer();
  }
};

//event

const event_index= function(event) {

  return parseInt(event.target.id);
};

const click_event = function(event) {
  event.preventDefault();
  let index = event_index(event);
  onClick(index);
  $(event.target).text(currentPlayer.sign);
};
//
  $("#0").on('click', click_event);
 $("#1").on('click', click_event);
$("#2").on('click', click_event);
$("#3").on('click', click_event);
$("#4").on('click', click_event);
$("#5").on('click', click_event);
$("#6").on('click', click_event);
$("#7").on('click', click_event);
$("#8").on('click', click_event);


// use require without a reference to ensure a file is bundled
// require('./example');
