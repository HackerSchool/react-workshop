import React from "react";
import KeyboardKey from "./KeyboardKey";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <KeyboardKey label="q" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="w" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="e" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="r" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="t" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="y" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="u" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="i" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="o" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="p" /* TODO onKeyPress={...} */ />
      </div>
      <div className="keyboard-row">
        <KeyboardKey label="a" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="s" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="d" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="f" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="g" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="h" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="j" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="k" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="l" /* TODO onKeyPress={...} */ />
      </div>
      <div className="keyboard-row">
        <KeyboardKey label="enter" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="z" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="x" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="c" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="v" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="b" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="n" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="m" /* TODO onKeyPress={...} */ />
        <KeyboardKey label="backspace" /* TODO onKeyPress={...} */ />
      </div>
    </div>
  );
};

export default Keyboard;
