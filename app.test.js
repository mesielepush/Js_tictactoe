const {
    mainGame,
  Player
  } = require('./app.js');

test('It test the players name',()=>{
    const playerOne = 'Popotito';
    const token = 'X';
    const playerInit = Player(playerOne,token)
    expect(playerInit.name).toBe('Popotito')
})