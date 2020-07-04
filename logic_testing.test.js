const {
    Player,
  horizontal,
  vertical,
  diagonal,
  isWinner,
  draw,
  move
  } = require('./logic_testing');

test('It test the players name',()=>{
    const playerOne = 'Popotito';
    const token = 'X';
    const playerInit = Player(playerOne,token)
    expect(playerInit.name).toBe('Popotito')
})

test('Test to not commit on a occupied square',()=>{
    let board = [ '', '', '', '', '', '','', '', 'O',];
    expect(move(8,'X',board)).toBe('There is already a move there');
})
test('Test to a horizontal win',()=>{
    let board = [ '', '', '', '', '', '','O', 'O', 'O',];
    expect(move(6,'X',board)).toBe('Someone win Game is Over');
})