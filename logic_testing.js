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

  const move = (index,token,board)=>{
        
    if (isWinner(board)) {
      console.log('Someone win Game is Over')
      return 'Someone win Game is Over'
    } 
    else if (board[index] !== ''){
      console.log('There is already a move there')
        return 'There is already a move there'
    }
    else if (draw(board)) {
      console.log("It's a draw, game is over")
      return "It's a draw, game is over"
    } else {
      board[index] = token;
    
      console.log(board)
      return board
    }
  }
  
let board = [ '', '', '', '', '', '','O', 'O', 'O',];
move(6,'X',board)

module.exports = {
  Player,
  horizontal,
  vertical,
  diagonal,
  isWinner,
  draw,
  move
}

