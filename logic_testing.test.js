const {
  Player,
  horizontal,
  vertical,
  diagonal,
  draw,
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

test('Test every horizontal win ', () => {
  const board1 = ['', '', '', '', '', '', 'O', 'O', 'O'];
  const board2 = ['O', 'O', 'O', '', '', '', '', '', ''];
  const board3 = ['', '', '', 'O', 'O', 'O', '', '', ''];

  expect(horizontal(board1)).toBe(true);
  expect(horizontal(board2)).toBe(true);
  expect(horizontal(board3)).toBe(true);
});
test('Test every vertical win ', () => {
  const board1 = ['O', '', '', 'O', '', '', 'O', '', ''];
  const board2 = ['', 'O', '', '', 'O', '', '', 'O', ''];
  const board3 = ['', '', 'O', '', '', 'O', '', '', 'O'];
  expect(vertical(board1)).toBe(true);
  expect(vertical(board2)).toBe(true);
  expect(vertical(board3)).toBe(true);
});
test('Test every non horizontal win to be false at horizontal', () => {
  const board1 = ['O', '', '', 'O', '', '', 'O', '', ''];
  const board2 = ['', 'O', '', '', 'O', '', '', 'O', ''];
  const board3 = ['', '', 'O', '', '', 'O', '', '', 'O'];
  const board4 = ['O', '', '', '', 'O', '', '', '', 'O'];
  const board5 = ['', '', 'O', '', 'O', '', 'O', '', ''];

  expect(horizontal(board1)).toBe(false);
  expect(horizontal(board2)).toBe(false);
  expect(horizontal(board3)).toBe(false);
  expect(horizontal(board4)).toBe(false);
  expect(horizontal(board5)).toBe(false);
});
test('Test every non vertical win to be false at vetical', () => {
  const board1 = ['', '', '', '', '', '', 'O', 'O', 'O'];
  const board2 = ['O', 'O', 'O', '', '', '', '', '', ''];
  const board3 = ['', '', '', 'O', 'O', 'O', '', '', ''];
  const board4 = ['O', '', '', '', 'O', '', '', '', 'O'];
  const board5 = ['', '', 'O', '', 'O', '', 'O', '', ''];

  expect(vertical(board1)).toBe(false);
  expect(vertical(board2)).toBe(false);
  expect(vertical(board3)).toBe(false);
  expect(vertical(board4)).toBe(false);
  expect(vertical(board5)).toBe(false);
});
test('Test every non diagonal win to be false at diagonal', () => {
  const board1 = ['', '', '', '', '', '', 'O', 'O', 'O'];
  const board2 = ['O', 'O', 'O', '', '', '', '', '', ''];
  const board3 = ['', '', '', 'O', 'O', 'O', '', '', ''];
  const board4 = ['O', '', '', 'O', '', '', 'O', '', ''];
  const board5 = ['', 'O', '', '', 'O', '', '', 'O', ''];
  const board6 = ['', '', 'O', '', '', 'O', '', '', 'O'];

  expect(diagonal(board1)).toBe(false);
  expect(diagonal(board2)).toBe(false);
  expect(diagonal(board3)).toBe(false);
  expect(diagonal(board4)).toBe(false);
  expect(diagonal(board5)).toBe(false);
  expect(diagonal(board6)).toBe(false);
});
test('Test a Drawing position to be true in draw function', () => {
  const board = ['O', 'X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'];
  expect(draw(board)).toBe(true);
});
test('Test to an not Drawing position to be false at the draw function', () => {
  const board = ['O', '', 'O', 'X', 'X', 'O', 'X', 'O', 'X'];
  expect(draw(board)).toBe(false);
});