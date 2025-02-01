import Game from './game.js';
import GameView from './gameView.js';

let game = new Game();
let gameView = new GameView();

console.log(game);
gameView.updateBoard(game);

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    });
});

function onTileClick(i){
    game.makeMove(i);
    gameView.updateBoard(game);
}


document.querySelector(".restart").addEventListener("click", () => {
    game = new Game();
    gameView.updateBoard(game);
});
