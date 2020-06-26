let board = ['','','','','','','','','']

const theBoard = document.getElementById('board_container');

const Player = (name, token) => ({
    name,
    token,
});

function makeAMove(index,token) {
    board[index] = token
}

function render() {
    theBoard.innerHTML = '';
    
    const template = `
        
            <div class="board">
                <div class="row">
                    <div class="square" id='square_1'><span>${board[0]}</span></div>
                    <div class="square" id='square_2'><span>${board[1]}</span></div>
                    <div class="square" id='square_3'><span>${board[2]}</span></div>
                </div>
                <div class="row">
                    <div class="square" id='square_4'><span>${board[3]}</span></div>
                    <div class="square" id='square_5'><span>${board[4]}</span></div>
                    <div class="square" id='square_6'><span>${board[5]}</span></div>
                </div>
                <div class="row">
                    <div class="square" id='square_7'><span>${board[6]}</span></div>
                    <div class="square" id='square_8'><span>${board[7]}</span></div>
                    <div class="square" id='square_9'><span>${board[8]}</span></div>
                </div>            
            </div>
            
        
        `;
        theBoard.innerHTML += template;
    
  }
  const mainGame = () => {
    let player1;
    let player2;
    let current;
    let gameEnd;
    const set_init = (name, token, name2, token2) => {
      player1 = Player(name, token);
      player2 = Player(name2, token2);
      current = player1;
    };
    const horizontal = () => ((board[0] !== '') && (board[0] === board[1] && board[1] === board[2]))
                            || ((board[3] !== '') && (board[3] === board[4] && board[4] === board[5]))
                            || ((board[6] !== '') && (board[6] === board[7] && board[7] === board[8]));
  
    const vertical = () => ((board[0] !== '') && (board[0] === board[3]) && (board[0] === board[6]))
                            || ((board[1] !== '') && (board[1] === board[4] && board[4] === board[7]))
                            || ((board[2] !== '') && (board[2] === board[5] && board[5] === board[8]));
  
    const diagonal = () => ((board[0] !== '') && (board[0] === board[4] && board[4] === board[8]))
                            || ((board[2] !== '') && (board[2] === board[4] && board[4] === board[6]));
  
    const is_winner = () => horizontal() || vertical() || diagonal();
    const draw = () => board.filter(x => x === '').length === 0;
    const move = (index) => {
      if (board[index] !== '') {
        return;
      }
      if (!gameEnd) {
        board[index] = current.token;
        render();
      }
      if (is_winner()) {
        gameEnd = true;
        document.getElementById('current').innerHTML = `${current.name} Has Won. Congratulations!`;
      } else if (draw()) {
        gameEnd = true;
        document.getElementById('current').innerHTML = "...It's a Draw You're both losers smh...";
      } else {
        current = current === player1 ? player2 : player1;
        document.getElementById('current').innerHTML = `It's ${current.name} turn`;
      }
    };
    const startGame = () => {
      gameEnd = false;
      const name = document.getElementById('player1').value;
      const name2 = document.getElementById('player2').value;
      const token = document.getElementById('token1').value;
      const token2 = document.getElementById('token2').value;
      board = ['', '', '', '', '', '', '', '', ''];
      set_init(name, token, name2, token2);
      document.getElementById('current').innerHTML =`It's ${current.name} turn`;
      render();
    };
    return {
      move,
      set_init,
      startGame,
    };
  };
  
  document.getElementById('start').addEventListener('click', () => {
    console.log('lkasjlkdj');
    mainGame().startGame();
  });