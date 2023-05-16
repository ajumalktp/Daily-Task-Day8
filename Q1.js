function determinant(matrix) {
  if (matrix.length === 1) {
    return matrix[0][0];
  }

  if (matrix.length === 2) {
    const a = matrix[0][0];
    const b = matrix[0][1];
    const c = matrix[1][0];
    const d = matrix[1][1];
    return a * d - b * c;
  }

  let det = 0;
  for (let i = 0; i < matrix.length; i++) {
    const sign = (-1) ** i;
    const submatrix = [];
    for (let j = 1; j < matrix.length; j++) {
      const row = matrix[j].slice(0, i).concat(matrix[j].slice(i + 1));
      submatrix.push(row);
    }
    const submatrixDet = determinant(submatrix);
    det += sign * matrix[0][i] * submatrixDet;
  }

  return det;
}
const matrix = [[1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]];

const det = determinant(matrix);
console.log(det);
