import { useState } from 'react'

import './App.css'
import { solveNQueens } from './services/chessBoard';
import Chessboard from './components/Chessboard';

function App() {
  const [solution, setSolution] = useState(null);
  const handleSolveClick = () => {
    solveNQueens(8, setSolution); // Change the board size if needed
  };
  return (
    <div className="App">
      <h1>N-Queens Visualizer</h1>
      <button onClick={handleSolveClick}>Solve N-Queens</button>
      {solution && <Chessboard solution={solution} />}
    </div>
  );
}

export default App
