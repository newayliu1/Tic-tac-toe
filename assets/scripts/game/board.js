"use strict";
//board save a new game
let board = {
};

//patch_data save the formate of patch data
let patch_data = function(index, sign, isEnd) {
  return {
    game: {
      cell: {
        index: index,
        value: sign,
      },
      over: isEnd,
    },
  };
};
module.exports = {
  board,
  patch_data
};
