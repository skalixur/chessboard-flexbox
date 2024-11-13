const flexboxChessboard = document.querySelector('.flex-chessboard')

const rowRanksPiecesPlacementImageNames = [
  [
    'black_rook',
    'black_knight',
    'black_bishop',
    'black_queen',
    'black_king',
    'black_bishop',
    'black_knight',
    'black_rook',
  ],
  [
    'black_pawn',
    'black_pawn',
    'black_pawn',
    'black_pawn',
    'black_pawn',
    'black_pawn',
    'black_pawn',
    'black_pawn',
  ],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  [
    'white_pawn',
    'white_pawn',
    'white_pawn',
    'white_pawn',
    'white_pawn',
    'white_pawn',
    'white_pawn',
    'white_pawn',
  ],
  [
    'white_rook',
    'white_knight',
    'white_bishop',
    'white_queen',
    'white_king',
    'white_bishop',
    'white_knight',
    'white_rook',
  ],
]

function populateFlexChessboard(flexBoard) {
  const rows = 8
  const cols = 8

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div')
    row.classList.add('flex-chessboard-row')

    for (let j = 0; j < cols; j++) {
      let currentSquare = rowRanksPiecesPlacementImageNames[i][j]

      const col = document.createElement('div')
      col.classList.add('flex-chessboard-item')
      row.appendChild(col)

      if (currentSquare === '') continue

      let pieceImage = document.createElement('img')
      pieceImage.src = `assets/img/${currentSquare.slice(
        0,
        5
      )}/${currentSquare}.png`
      pieceImage.classList.add('piece-image')

      col.appendChild(pieceImage)
    }
    flexBoard.appendChild(row)
  }
}

populateFlexChessboard(flexboxChessboard)
