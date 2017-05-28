import {Move} from "./move";
import {Board} from "../board/board";
import {Piece} from "../pieces/piece";
export class PawnJumpMove extends Move {

  constructor(board: Board, movedPiece: Piece, destinationCoordinate: number) {
    super(board, movedPiece, destinationCoordinate);
  }
}
