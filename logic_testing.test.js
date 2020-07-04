const {
  Player,
  move,
} = require('./logic_testing');

test('It test the players name', () => {
  const playerOne = 'Popotito';
  const token = 'X';
  const playerInit = Player(playerOne, token);
  expect(playerInit.name).toBe('Popotito');
});

test('Test to not commit on a occupied square', () => {
  const board = ['', '', '', '', '', '', '', '', 'O'];
  expect(move(8, 'X', board)).toBe('There is already a move there');
});
test('Test to a horizontal win', () => {
  const board = ['', '', '', '', '', '', 'O', 'O', 'O'];
  expect(move(6, 'X', board)).toBe('Someone win Game is Over');
});
test('Test to a vertical win', () => {
  const board = ['', '', 'O', '', '', 'O', '', '', 'O'];
  expect(move(6, 'X', board)).toBe('Someone win Game is Over');
});
test('Test to a diagonal win', () => {
  const board = ['O', '', '', '', 'O', '', '', '', 'O'];
  expect(move(6, 'X', board)).toBe('Someone win Game is Over');
});
test('Test to a Draw', () => {
  const board = ['O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'];
  expect(move(6, 'X', board)).toBe("It's a draw, game is over");
});