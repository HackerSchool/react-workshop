import React from "react";

const Square = ({ content, color = "unset" }) => {
  return <div className={`square square--color-${color}`}>{content || ""}</div>;
};

export default Square;
