import $ from '../../bower_components/jquery/dist/jquery.min.js';
import Game from './game.js';

export default class {
  constructor() {
    this.player = 1;
  }

  newGame() {
    let game = new Game();
    let columns = '';
    for (let i = 0; i < game.columns; i++) {
      columns += '<td></td>';
    }

    let rows = '';
    for (let i = 0; i < game.rows; i++) {
      rows += `<tr>${columns}</tr>`;
    }

    let board = $('.board');
    board.children('tbody').html(rows);
    board.on('click', 'td', (e) => {
      let cell = $(e.currentTarget);
      let columnIndex = cell.index();
      let rowIndex = game.dropDisc(this.player, columnIndex);

      if (rowIndex >= 0) {
        //draw the disc
        let disc = `<span class="disc disc-player-${this.player}"></span>`;
        board.find('tr').eq(rowIndex).children('td').eq(columnIndex).append(disc);

        var winner = game.getWinner();
        if (winner === 0) {
          //switch player
          this.player = this.player === 1 ? 2 : 1;

          let message = $('.message');
          message.html(`<span class="disc disc-player-${this.player}"></span>Player ${this.player}'s turn.`);
        } else {
          board.off('click', 'td');
          let resultContainer = $('.result-container');
          let result = winner > 0 ? `<span class="disc disc-player-${winner}"></span> Player ${winner} wins!` : 'Draw!';
          message.html(result);

          let btnNewGame = $('<button type="button" class="btn btn-default btn-new-game">Play Again</button>');
          btnNewGame.click(() => {
            btnNewGame.remove();
            this.newGame();
          });

          resultContainer.append(btnNewGame);
          board.after(resultContainer);
        }
      }
    });

    let message = $('.message');
    message.html(`<span class="disc disc-player-${this.player}"></span>Player ${this.player}'s turn.`);
  }
}
