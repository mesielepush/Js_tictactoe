let board = ['', '', '', '', '', '', '', '', ''];


const Player = (name, token) => ({
  name,
  token,
});

const renderBoard = (() => {
  const render = (move) => {
    board.forEach((element, index) => {
      const node = document.getElementById(`square_${index + 1}`);
      let child = node.lastElementChild;
      while (child) {
        node.removeChild(child);
        child = node.lastElementChild;
      }
      const squareSpan = document.createElement('span');
      const textnode = document.createTextNode(element);
      node.addEventListener('click', () => {
        move(index);
      });
      node.appendChild(squareSpan);
      squareSpan.appendChild(textnode);
    });
  };
  return {
    render,
  };
})();

const mainGame = () => {
  let player1;
  let player2;
  let current;
  let gameEnd;
  const setInit = (name, token, name2, token2) => {
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

  const isWinner = () => horizontal() || vertical() || diagonal();
  const draw = () => board.filter(x => x === '').length === 0;
  const move = (index) => {
    if (board[index] !== '') {
      return;
    }
    if (!gameEnd) {
      board[index] = current.token;
      renderBoard.render(move);
    }
    if (isWinner()) {
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
    const token = 'X';
    const token2 = 'O';
    board = ['', '', '', '', '', '', '', '', ''];
    setInit(name, token, name2, token2);
    document.getElementById('current').innerHTML = `It's ${current.name} turn`;
    renderBoard.render(move);
  };

  return {
    move,
    setInit,
    startGame,
  };
};

document.getElementById('start').addEventListener('click', () => {
  const game = mainGame();
  game.startGame();
});
