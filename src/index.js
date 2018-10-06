module.exports = function solveSudoku(matrix) {
  for (let i = 0; i < 9; i++) {
    for (let t = 0; t < 9; t++) {
      if (!matrix[i][t]) {
        let arr = [];
        let col = Math.floor(t / 3) * 3;
        let row = Math.floor(i / 3) * 3;
        Array.from({ length: 9 }).forEach((item, k) => {
          arr = [
            ...arr,
            [
              matrix[row + (k % 3)][col + Math.floor(k / 3)],
              matrix[i][k],
              matrix[k][t],
            ]
          ];
        });
        arr.forEach(item => {
          matrix[i][t] = item;
          solveSudoku(matrix);
        });
      }
    }
  }
  return matrix;
}
