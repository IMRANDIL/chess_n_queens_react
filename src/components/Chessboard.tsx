import React from 'react'

const Chessboard = ({solution}) => {
    return (
        <div className="chessboard">
          {solution.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell ${cell === 1 ? 'queen' : ''}`}
                ></div>
              ))}
            </div>
          ))}
        </div>
      );
}

export default Chessboard