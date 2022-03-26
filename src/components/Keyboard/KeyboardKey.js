import React from "react";

const KeyboardKey = ({ label, onKeyPress, color = "unset" }) => {
  return (
    <button
      className={`keyboard-key keyboard-key--color-${color}`}
      onClick={onKeyPress}
    >
      {label}
    </button>
  );
};

export default KeyboardKey;
