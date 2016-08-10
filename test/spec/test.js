import Game from '../../app/scripts/game.js';
import UI from '../../app/scripts/ui.js';

describe('Gameplay', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  });

  describe('Game', () => {
    it('should create a new instance of the game', () => {
      expect(game).toBeDefined();
    });

    it('should have a default of six rows and seven columns', () => {
      expect(game.rows).toEqual(6);
      expect(game.columns).toEqual(7);
    });
  });

  describe('Drop Disc', () => {
    it('should place a disc at next available row of selected column', () => {
      game.dropDisc(1, 0);
      let expectedBoardStateAfterFirstMove = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0]
      ];
      expect(game.board).toEqual(expectedBoardStateAfterFirstMove);

      game.dropDisc(2, 0);
      let expectedBoardStateAfterSecondMove = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0]
      ];
      expect(game.board).toEqual(expectedBoardStateAfterSecondMove);
    });
  });

  describe('Get Winner', () => {
    it('should get a winner when there are four consecutive discs in a horizontal line by a single player', () => {
      game.board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [2, 2, 2, 0, 0, 0, 0],
        [1, 1, 1, 1, 0, 0, 0]
      ];
      expect(game.getWinner()).toEqual(1);
    });

    it('should get a winner when there are four consecutive discs in a vertical line by a single player', () => {
      game.board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 2, 1, 0, 0, 0, 0],
        [2, 2, 1, 0, 0, 0, 0]
      ];
      expect(game.getWinner()).toEqual(1);
    });

    it('should get a winner when there are four consecutive discs in a diagonal line by a single player', () => {
      game.board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0],
        [0, 0, 1, 2, 0, 0, 0],
        [2, 1, 1, 1, 0, 0, 0],
        [1, 2, 2, 2, 0, 0, 0]
      ];
      expect(game.getWinner()).toEqual(1);

      game.board = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 2, 0, 0, 0, 0, 0],
        [0, 1, 2, 2, 0, 0, 0],
        [0, 2, 1, 2, 1, 0, 0],
        [0, 1, 1, 1, 2, 0, 0]
      ];
      expect(game.getWinner()).toEqual(2);
    });
  });
});
