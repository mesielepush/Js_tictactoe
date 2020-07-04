const Player = (name, token) => ({
  name,
  token,
});
const horizontal = (board) => ((board[0] !== '') && (board[0] === board[1] && board[1] === board[2]))
                            || ((board[3] !== '') && (board[3] === board[4] && board[4] === board[5]))
                            || ((board[6] !== '') && (board[6] === board[7] && board[7] === board[8]));

const vertical = (board) => ((board[0] !== '') && (board[0] === board[3]) && (board[0] === board[6]))
                            || ((board[1] !== '') && (board[1] === board[4] && board[4] === board[7]))
                            || ((board[2] !== '') && (board[2] === board[5] && board[5] === board[8]));

const diagonal = (board) => ((board[0] !== '') && (board[0] === board[4] && board[4] === board[8]))
                            || ((board[2] !== '') && (board[2] === board[4] && board[4] === board[6]));

const isWinner = (board) => horizontal(board) || vertical(board) || diagonal(board);

const draw = (board) => board.filter(x => x === '').length === 0;

const move = (index, token, board) => {
  if (isWinner(board)) {
    return 'Someone win Game is Over';
  }

  if (draw(board)) {
    return "It's a draw, game is over";
  } if (board[index] !== '') {
    return 'There is already a move there';
  }
  board[index] = token;

  return board;
};

module.exports = {
  Player,

  move,
};
