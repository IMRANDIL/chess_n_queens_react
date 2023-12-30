export function initializeBoard(n) {
    const board = [];
    for (let i = 0; i < n; i++) {
      board.push(Array(n).fill(0));
    }
    return board;
  }
  
  export function isSafe(board, row, col) {
    for (let i = 0; i < col; i++) {
      if (board[row][i] === 1) {
        return false;
      }
    }
  
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 1) {
        return false;
      }
    }
  
    for (let i = row, j = col; i < board.length && j >= 0; i++, j--) {
      if (board[i][j] === 1) {
        return false;
      }
    }
  
    return true;
  }
  
  export function solveNQueensUtil(board, col, setSolution) {
    const n = board.length;
  
    if (col === n) {
      setSolution([...board]);
      return true;
    }
  
    for (let i = 0; i < n; i++) {
      if (isSafe(board, i, col)) {
        board[i][col] = 1;
  
        if (solveNQueensUtil(board, col + 1, setSolution)) {
          return true;
        }
  
        board[i][col] = 0;
      }
    }
  
    return false;
  }
  
  export function solveNQueens(n, setSolution) {
    const board = initializeBoard(n);
    solveNQueensUtil(board, 0, setSolution);
  }

  