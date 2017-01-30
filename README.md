[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Tic Tac Toe

[Teleport to My Game](https://newayliu1.github.io/Tic-tac-toe/)

## Technologies Used

- Javascript
- HTML
- bootstrap
- css
- JQuery

## Planing/Modeling

1. Create Game engine
2. Create html/css based on wireframe
3. Create button handlers in order to connect the egine with html.
4. work on authenication API connection
5. create and update games data on API
6. debug
7. decorate user interface

## Development Story

Game engine is a brain of a Game, it is the most significate and difficult parts to
start, then modeling the game engine helped and necessarried. In my model, there are three entities,
player, board, and game. The player and board are the placeholder to store the player and
game information. They also contain the patch_data function stores the data formate
in order to be used by patching. Basically, the entity game is the game engine. I broke down
into two JS files, game_events and gameStatus. All the buttons events relate to the game
will be placed in it. It is not hard to understand what does the gameStatus does, it checks
a instant game status, which will be called once the user clicks on a empty cell.

I did not spend a lot of time on HTML and CSS since it is not my strength. Thus, there are
buttons and the game board will be showed in my final game page.

Testing and knowing the format to patch took the most of my time to figure out. I still try to
figure out the way to update the user information. The api still response me back the 400 error.

## WireFrame


## User Story

- User is able to sign in, sign out, and sign up
- User is able to choose the sides
- The winner user's email will be seen
- User is unable to restart the game unless they finish the previous one.
