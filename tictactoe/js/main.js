/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/
let board;
let turn = 'X';
let win;
let winner = null;
let movesMap = new Map();

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/
function init(){
    winner = null;
    board = [
        '','','',
        '','','',
        '','',''
    ]
    movesMap.clear()
    render();
};
function render() {
    board.forEach(function(mark, index){
        squares[index].textContent = mark;
    });
   
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;

    
    
}
function handleTurn(event) {
    if (winner === null){

        

        let idx = squares.findIndex(function(square) {
            return square === event.target;
        });
        

        if(!movesMap.has(idx)){ // check if square is taken
           
            board[idx] = turn;
            movesMap.set(idx, turn);
    
    
            turn = turn === 'X' ? 'O':'X'
            // check your console logs to make sure it's working!
            win = getWinner();
            win === 'T' ? null : win ? celebrateWin() : null; // play conffeti animation when someone wins.

            document.getElementById("no-move").style.display= "None" //hide square already taken error
            render();
        }else{
            document.getElementById("no-move").style.display= "block"//unhide square taken error
        }
       
    }
};

function getWinner() { // get the winner of the match or tie.
   
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
      });

      
      return winner ? winner : board.includes('') ? null : 'T';
};

function celebrateWin() { // add confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

init();