import { putMark } from "../tools/tools.js";


export class Ihm {
    constructor(){
        this.board = [
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            ' '
        ];

    }

    printBoard() {
        console.log('\n' +
            ' ' + this.board[0] + ' | ' + this.board[1] + ' | ' + this.board[2] + '\n' +
            ' ---------\n' +
            ' ' + this.board[3] + ' | ' + this.board[4] + ' | ' + this.board[5] + '\n' +
            ' ---------\n' +
            ' ' + this.board[6] + ' | ' + this.board[7] + ' | ' + this.board[8] + '\n');
    }

    validMove(position) {
        if (board[position] === ' ') {
            return true
        } else {
            return false
        }
    }
    

    async play(){
        
        const choiceX = await putMark ("Veuillez choisir la position en X");
        const choiceY = await putMark ("Veuillez choisir la position en Y");
        let player = true;

        if(choiceX == 1 && choiceY == 1){
            if(player){
                this.board[0] = "X"
                this.printBoard()
                player != player
                this.play()
            }else{
                this.board[0] = "O"
                this.printBoard()
            }
        }else if (choiceX == 1 && choiceY == 2){
            if(player){
                this.board[1] = "X"
                this.printBoard()
                player != player
                this.play()
            }else{
                this.board[1] = "O"
                this.printBoard()
            }
        }else if(choiceX == 1 && choiceY == 3){
            this.board[2] = "X"
            this.printBoard()
        }else if(choiceX == 2 && choiceY == 1){
            this.board[3] = "X"
            this.printBoard()
        }else if(choiceX == 2 && choiceY == 2){
            this.board[4] = "X"
            this.printBoard()
        }else if(choiceX == 2 && choiceY == 3){
            this.board[5] = "X"
            this.printBoard()
        }else if(choiceX == 3 && choiceY == 1){
            this.board[6] = "X"
            this.printBoard()
        }else if(choiceX == 3 && choiceY == 2){
            this.board[7] = "X"
            this.printBoard()
        }else if(choiceX == 3 && choiceY == 3)
        {
            this.board[8] = "X"
            this.printBoard()};
        
    }





}