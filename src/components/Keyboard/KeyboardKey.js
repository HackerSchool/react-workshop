import React, { useCallback } from "react";

const KeyboardKey = ({ label, code, onKeyPress, color = "unset" }) => {
  const keyCode = code || label;
  const handleClick = useCallback(
    () => onKeyPress(keyCode),
    [onKeyPress, keyCode]
  );

  return (
    <button
      className={`keyboard-key keyboard-key--color-${color}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default KeyboardKey;
