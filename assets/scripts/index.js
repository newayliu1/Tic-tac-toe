'use strict';

const setAPIOrigin = require('../../lib/set-api-origin');
const config = require('./config');



$(() => {
  setAPIOrigin(location, config);

});

const authEvents = require('./auth/events.js');
const game = require('./game/game_events.js');
$(() => {
  authEvents.addHandlers(); //handlers for authenication
  game.addHandlers(); //handlers for game
});
