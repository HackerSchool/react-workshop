import React from "react";
import Square from "./Square";

const SquareRow = () => {
  return (
    <div className="squares-row">
      <Square />
      <Square content="a" color="gray" />
      <Square content="a" color="green" />
      <Square content="a" color="yellow" />
      <Square content="a" />
    </div>
  );
};

export default SquareRow;
