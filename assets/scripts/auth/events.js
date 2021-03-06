'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const player = require('../game/player');

const onSignUp = function (event) {
    event.preventDefault();

  let data = getFormFields(event.target);

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.failure);

};
const onSignIn = function (event) {
    event.preventDefault();

  let data = getFormFields(event.target);
  console.log(data);

  api.signIn(data)
    .then((response) => {
      player.playerOne = response.user;
      return player.playerOne;
    })
    .then(ui.signInSuccess)
    .catch(ui.failure);

};
const onChangePassword = function (event) {
  event.preventDefault();

  let data = getFormFields(event.target);

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
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
    .then(ui.signOutSuccess)
    .catch(ui.failure);
    player.playerOne = {};
};





const addHandlers = () => {
  $('#sign-up').show();
    $('#sign-in').show();
    $('#board').hide();
    $('#game-log').hide();
    $('#sign-out').hide();
    $('.change-password').hide();
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('click', onSignOut);
};
module.exports = {
  addHandlers,
};
