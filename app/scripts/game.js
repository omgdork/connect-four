export default class {
  constructor(rows = 6, columns = 7, toWin = 4) {
    this.board = [];
    this.rows = rows;
    this.columns = columns;
    this.toWin = toWin;
    this.moveCount = 0;

    for (let i = 0; i < this.rows; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.board[i].push(0);
      }
    }
  }

  dropDisc(player, columnIndex) {
    for (let i = this.rows - 1; i >= 0; i--) {
      if (this.board[i][columnIndex] === 0) {
        this.board[i][columnIndex] = player;
        this.moveCount++;
        return i;
      }
    }
    return -1;
  }

  getWinner() {
    //vertical
    for (let row = 0; row < Math.ceil(this.rows / 2); row++) {
      for (let column = 0; column < this.columns; column++) {
        let pos1 = this.board[row][column];
        let pos2 = this.board[row + 1][column];
        let pos3 = this.board[row + 2][column];
        let pos4 = this.board[row + 3][column];
        if (hasFourConsecutive(pos1, pos2, pos3, pos4)) {
          return this.board[row][column];
        }
      }
    }

    //horizontal
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < Math.ceil(this.columns / 2); column++) {
        let pos1 = this.board[row][column];
        let pos2 = this.board[row][column + 1];
        let pos3 = this.board[row][column + 2];
        let pos4 = this.board[row][column + 3];
        if (hasFourConsecutive(pos1, pos2, pos3, pos4)) {
          return this.board[row][column];
        }
      }
    }

    //diagonal
    for (let row = 0; row < Math.ceil(this.rows / 2); row++) {
      for (let column = 0; column < Math.ceil(this.columns / 2); column++) {
        let pos1 = this.board[row][column];
        let pos2 = this.board[row + 1][column + 1];
        let pos3 = this.board[row + 2][column + 2];
        let pos4 = this.board[row + 3][column + 3];
        if (hasFourConsecutive(pos1, pos2, pos3, pos4)) {
          return this.board[row][column];
        }
      }
    }

    for (let row = Math.ceil(this.rows / 2); row < this.rows; row++) {
      for (let column = 0; column < Math.ceil(this.columns / 2); column++) {
        let pos1 = this.board[row][column];
        let pos2 = this.board[row - 1][column + 1];
        let pos3 = this.board[row - 2][column + 2];
        let pos4 = this.board[row - 3][column + 3];
        if (hasFourConsecutive(pos1, pos2, pos3, pos4)) {
          return this.board[row][column];
        }
      }
    }

    //draw
    let maxMoves = this.rows * this.columns;
    if (this.moveCount === maxMoves) {
      return -1;
    }

    //no winner yet
    return 0;
  }
}

function hasFourConsecutive(pos1, pos2, pos3, pos4) {
  return pos1 !== 0 && pos1 === pos2 && pos1 === pos3 && pos1 === pos4;
}
