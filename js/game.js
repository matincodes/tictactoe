export default class Game {
    constructor(){
        console.log("init game");
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn(){
        this.turn = this.turn === "X" ? "O" : "X";
    }

    makeMove(i){
        if(this.endOfGame()){
            return;
        }

        if(this.board[i]){
            return;
        }

        this.board[i] = this.turn;

        if(!this.findWinningCombination()){ 
            this.nextTurn();
        }
    }

    findWinningCombination(){
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6] // diagonals
        ];

        for(const combination of winningCombinations){
            const [a, b, c] = combination;

            if(this.board[a] && (this.board[a] === this.board[b] && this.board[a] === this.board[c])){
                console.log("winning combination", combination);
                return combination;
            }
        }

        return null;
    }


    endOfGame(){
        if(this.findWinningCombination()){
            return true;
        } else {
            return false;
        }
    }
}