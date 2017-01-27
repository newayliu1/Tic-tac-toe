'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const player = require('../game/player');

const onSignUp = function (event) {
    event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.success)
    .catch(ui.failure);

};
const onSignIn = function (event) {
    event.preventDefault();

  let data = getFormFields(event.target);

  api.signIn(data)
    .then((response) => {
      player.playerOne = response.user;
      return player.playerOne;
    })
    .then(ui.success)
    .catch(ui.failure);

};
const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure)
    ;
};
const onSignOut = function (event) {
  event.preventDefault();

  api.signOut()
    .then(() => {
      delete player.playerOne;
      return player;
    })
    .then(ui.success)
    .catch(ui.failure)
    ;
};

const assignSign = function (signValue) {
  player.playerOne.sign = signValue;
  if (signValue ==='x')
  {
    player.playerTwo.sign = 'o';
  } else {
    player.playerTwo.sign = 'x';
  }
};

const onSigningPlayer = function (event) {
  event.preventDefault();
  assignSign(event.target.id);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#x').on('click', onSigningPlayer);
  $('#o').on('click', onSigningPlayer);
};
module.exports = {
  addHandlers,
};
