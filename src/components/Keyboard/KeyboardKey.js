import React from "react";

const KeyboardKey = ({ label, onKeyPress }) => {
  return (
    <button className="keyboard-key" onClick={onKeyPress}>
      {label}
    </button>
  );
};

export default KeyboardKey;
