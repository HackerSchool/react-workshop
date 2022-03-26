import React from "react";
import SquareRow from "./SquareRow";

const GameSquares = ({ answer, attempt, attempts, input, rowCount }) => {
  return (
    <div className="squares">
      {Array(rowCount)
        .fill(0)
        .map((_, i) => (
          <SquareRow
            key={i}
            answer={answer}
            word={attempt === i ? input : attempts[i] || []}
            isInput={i >= attempt}
          />
        ))}
    </div>
  );
};

export default GameSquares;
