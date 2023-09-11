// variables
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let playerHas = 'x';
let computerHas = 'o';
let playerTurn = true;

// buttons
const b0 = document.querySelector(".js-sign-box0");
b0.addEventListener('click', () => playerMove(0) );

const b1 = document.querySelector(".js-sign-box1");
b1.addEventListener('click', () => playerMove(1) );

const b2 = document.querySelector(".js-sign-box2");
b2.addEventListener('click', () => playerMove(2) );

const b3 = document.querySelector(".js-sign-box3");
b3.addEventListener('click', () => playerMove(3) );

const b4 = document.querySelector(".js-sign-box4");
b4.addEventListener('click', () => playerMove(4) );

const b5 = document.querySelector(".js-sign-box5");
b5.addEventListener('click', () => playerMove(5) );

const b6 = document.querySelector(".js-sign-box6");
b6.addEventListener('click', () => playerMove(6) );

const b7 = document.querySelector(".js-sign-box7");
b7.addEventListener('click', () => playerMove(7) );

const b8 = document.querySelector(".js-sign-box8");
b8.addEventListener('click', () => playerMove(8) );

const divElement = document.querySelector('.js-choose-who-goes-first');

const go_first_button = document.querySelector(".js-choose-one-x");
go_first_button.addEventListener('click', () => {
  divElement.classList.remove('css-choose-who-goes-first');
})

const go_second_button = document.querySelector(".js-choose-one-o");
go_second_button.addEventListener('click', () => {
  divElement.classList.remove('css-choose-who-goes-first');
  playerTurn = false;
  playerHas = 'o';
  computerHas = 'x';
  computerMove();
})

const restart_button = document.querySelector(".js-restart");
restart_button.addEventListener('click', () => location.reload())

// functions
// disable all buttons if someone wins
function gameOver() {
  const inputElements = document.querySelectorAll('button');
  inputElements.forEach((input) => {
  input.disabled = true;
});
}

function updateBoard(buttonNumber) {
  switch (buttonNumber) {
    case 0: playerTurn ? board[0][0] = playerHas : board[0][0] = computerHas; break;
    case 1: playerTurn ? board[0][1] = playerHas : board[0][1] = computerHas; break;
    case 2: playerTurn ? board[0][2] = playerHas : board[0][2] = computerHas; break;
    case 3: playerTurn ? board[1][0] = playerHas : board[1][0] = computerHas; break;
    case 4: playerTurn ? board[1][1] = playerHas : board[1][1] = computerHas; break;
    case 5: playerTurn ? board[1][2] = playerHas : board[1][2] = computerHas; break;
    case 6: playerTurn ? board[2][0] = playerHas : board[2][0] = computerHas; break;
    case 7: playerTurn ? board[2][1] = playerHas : board[2][1] = computerHas; break;
    case 8: playerTurn ? board[2][2] = playerHas : board[2][2] = computerHas; break;
      default: {
        alert('Invalid button1!');
        console.log('Invalid button1!');
        break;
    }
  }
  switch (buttonNumber) {
    case 0: drawSign(b0); break;
    case 1: drawSign(b1); break;
    case 2: drawSign(b2); break;
    case 3: drawSign(b3); break;
    case 4: drawSign(b4); break;
    case 5: drawSign(b5); break;
    case 6: drawSign(b6); break;
    case 7: drawSign(b7); break;
    case 8: drawSign(b8); break;
      default: {
        alert('Invalid button2!');
        console.log('Invalid button2!');
        break;
    }
  }
}

function playerMove(buttonNumber) 
{
  updateBoard(buttonNumber);
  if (checkWinCon()) {
    gameOver();
  } else {
    playerTurn = false;
    computerMove();
  }
}

function computerMove() {
  // first check if computer can win
  if (computerLogic(computerHas)) {
    alert(`${ String(computerHas).toUpperCase() } wins !`);
    gameOver();
  // if not then block player if possible
  } else if (!computerLogic(playerHas)) {
    // if cant block player then place in "random" spot
    placeRandomSign(); 
  }
  playerTurn = true;
}

// AI attempt (probably bad)
function computerLogic(sign) 
{
  for (let i = 0; i < board.length; i++) {

    // rows check
    if (board[i][0] === sign && (board[i][1] === sign || board[i][2] === sign)) {
      if (board[i][1] === '') {
        if (i === 0) {
          updateBoard(1);
          console.log("1");
        } else if (i === 1) {
          updateBoard(4);
          console.log("2");
        } else {
          updateBoard(7);
          console.log("3");
        }
          return true;
      } else if (board[i][2] === '') {
        if (i === 0) {
          updateBoard(2);
          console.log("4");
        } else if (i === 1) {
          updateBoard(5);
          console.log("5");
        } else {
          updateBoard(8);
          console.log("6");
        }
          return true;
      }
    } else if (board[i][1] === sign && board[i][2] === sign) {
      if (board[i][0] === '') {
        if (i === 0) {
          updateBoard(0);
          console.log("7");
        } else if (i === 1) {
          updateBoard(3);
          console.log("8");
        } else {
          updateBoard(6);
          console.log("9");
        }
          return true;
      } 
    }

    // columns check
    if (board[0][i] === sign && (board[1][i] === sign || board[2][i] === sign)) {
      if (board[1][i] === '') {
        if (i === 0) {
          updateBoard(3);
          console.log("10");
        } else if (i === 1) {
          updateBoard(4);
          console.log("11");
        } else {
          updateBoard(5);
          console.log("12");
        }
          return true;
      } else if (board[2][i] === '') {
        if (i === 0) {
          updateBoard(6);
          console.log("13");
        } else if (i === 1) {
          updateBoard(7);
          console.log("14");
        } else {
          updateBoard(8);
          console.log("15");
        }
          return true;
      }
    } else if (board[1][i] === sign && board[2][i] === sign) {
      if (board[0][i] === '') {
        if (i === 0) {
          updateBoard(0);
          console.log("16");
        } else if (i === 1) {
          updateBoard(1);
          console.log("17");
        } else {
          updateBoard(2);
          console.log("18");
        }
        return true;
      }
    }
  }

  // main diagonal
  if (board[0][0] === sign && (board[1][1] === sign || board[2][2] === sign)) {
    if (board[1][1] === '') {
      updateBoard(4);
      console.log("19");
        return true
    } else if (board[2][2] === '') {
      updateBoard(8);
      console.log("20");
        return true
    }
  } else if (board[1][1] === sign && board[2][2] === sign) {
    if (board[0][0] === '') {
      updateBoard(0);
      console.log("21");
        return true
    }
  }

  // secondary diagonal
  if (board[0][2] === sign && (board[1][1] === sign || board[2][0] === sign)) {
    if (board[1][1] === '') {
      updateBoard(4);
      console.log("22");
        return true;
    } else if (board[2][0] === '') {
      updateBoard(6);
      console.log("23");
        return true
    }
  } else if (board[1][1] === sign && board[2][0] === sign) {
    if (board[0][2] === '') {
      updateBoard(2);
      console.log("24");
        return true
    }
  }
  return false;
}

function placeRandomSign() { 
  /*
  if (board[1][1] === '') { // too hard
    updateBoard(4);
  } else
  */
  // check corners first
  if (board[0][0] === '') {
    updateBoard(0);
  } else if (board[0][2] === '') {
    updateBoard(2);
  } else if (board[2][0] === '') {
    updateBoard(6);
  } else if (board[2][2] === '') {
    updateBoard(8);
  } else {
    //if no corner left then search the rest
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === '') {
          // manually search for the only possible last locations
          switch (`${i}${j}`) { 
            case "01": updateBoard(1); break;
            case "10": updateBoard(3); break;
            case "12": updateBoard(5); break;
            case "21": updateBoard(7); break;
              default: { console.log("something broke at 258 function"); break; }
          }
          return;
        }
      }
    }
  }
}

// adds image html
function drawSign(button) {
  button.innerHTML = playerTurn ? `<img src = 'sign-images/${playerHas}.png' class = 'css-image'></img>` 
  : `<img src = 'sign-images/${computerHas}.png' class = 'css-image'></img>`
  // turn off button
  button.disabled = true;
  console.log(board);
}

// true - won || false - no one won
function checkWinCon() {
  // basic win conditions
  for (let i = 0; i < board.length; i++) {
    
    // rows check
    if ((board[i][0] === 'x' && board[i][1] === 'x' && board[i][2] === 'x') 
    ||(board[i][0] === 'o' && board[i][1] === 'o' && board[i][2] === 'o') ) {
      if (board[i][0] === 'o') {
        alert("O wins !");
        return true;
      } else {
        alert("X wins !");
        return true;
      }
    }

    if ((board[0][i] === 'x' && board[1][i] === 'x' && board[2][i] === 'x') 
    || (board[0][i] === 'o' && board[1][i] === 'o' && board[2][i] === 'o')) {

      // columns check
      if (board[0][i] === 'o') {
        alert("O wins !");
        return true;
      } else {
        alert("X wins !");
        return true;
      }
    }
  }

  // main diagonal
  if ((board[0][0] === 'x' && board[1][1] === 'x' && board[2][2] === 'x') 
  || (board[0][0] === 'o' && board[1][1] === 'o' && board[2][2] === 'o')) {
    if (board[0][0] === 'o') {
      alert("O wins !");
      return true;
    } else {
      alert("X wins !");
      return true;
    }
  }

  // secondary diagonal
  if ((board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x') 
  || (board[0][2] === 'x' && board[1][1] === 'x' && board[2][0] === 'x')) {
    if (board[0][2] === 'o') {
      alert("O wins !");
      return true;
    } else {
      alert("X wins !");
      return true;
    }
  }
  return false;
}