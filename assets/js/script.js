const flexboxChessboard = document.querySelector('.flex-chessboard')

function populateFlexChessboard(flexBoard) {
  const rows = 8
  const cols = 8

  for (let i = 0; i < rows; i++) {
    const row = document.createElement('div')
    row.classList.add('flex-chessboard-row')
    for (let j = 0; j < cols; j++) {
      const col = document.createElement('div')
      col.classList.add('flex-chessboard-item')
      row.appendChild(col)
    }
    flexBoard.appendChild(row)
  }
}

populateFlexChessboard(flexboxChessboard)
