const board = ['','','','','','','','','']

const theBoard = document.getElementById('board_container');

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

  render()