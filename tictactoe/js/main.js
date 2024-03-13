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
let movesMap = new Map();//hashmap
let moveReady = true;
let compturn = "X"

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));//gets all divs in #board into array
var model = document.getElementById('choose-mark-model');
const messages = document.getElementById('turn');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
document.getElementById('reset-button').addEventListener('click', init);

document.getElementById('chooseX').onclick = function() {
    turn = "X";
    compturn = "O"
    init();
    // Set the player's mark to X
    // Your code to set the player's mark as X
    model.style.display = "none";
  };

  // When the user clicks on button O, choose O
  document.getElementById('chooseO').onclick = function() {

    turn = "O";
    compturn = "X"
    init();
    // Set the player's mark to O
    // Your code to set the player's mark as O
    model.style.display = "none";
    
  };


/*----- functions -----*/
function init(){
    model.style.display = "block";
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
        squares[index].textContent = mark;// store mark into square
    });
   
    messages.textContent = win === 'T' ? `That's a tie, queen!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;

    
    
}
function handleTurn(event) {
    if (winner === null){
        let idx = squares.findIndex(function(square) {
            return square === event.target;
        });
        
        checkMove(idx);

        // computer turn
       
    
    if(compturn === turn && win === null){
        console.log("computer plays");
        moveReady = true;
        while(moveReady){
            //console.log("Computer playing....");
            var randomMove = Math.floor(Math.random() * 8);
            console.log(randomMove);
            checkMove(randomMove);
        }
    }
       
    }
};


function checkMove(idx){
    if(!movesMap.has(idx)){ // check if square is taken
        console.log("Cheking index");
        board[idx] = turn;
        movesMap.set(idx, turn);// makes move invalid


        turn = turn === 'X' ? 'O':'X'
        win = getWinner();
        win === 'T' ? null : win ? celebrateWin() : null; // play conffeti animation when someone wins.

        document.getElementById("no-move").style.display= "None" //hide square already taken error
        moveReady = false;

        render();
    }else{
        document.getElementById("no-move").style.display= "block"//unhide square taken error
        console.log("cant play");
    }
}
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