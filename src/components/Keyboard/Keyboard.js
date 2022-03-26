import React from "react";
import BackspaceIcon from "../Icons/BackspaceIcon";
import KeyboardKey from "./KeyboardKey";

const Keyboard = ({ onKeyPress }) => {
  return (
    <div className="keyboard">
      <div className="keyboard-row">
        <KeyboardKey label="q" onKeyPress={onKeyPress} />
        <KeyboardKey label="w" onKeyPress={onKeyPress} />
        <KeyboardKey label="e" onKeyPress={onKeyPress} />
        <KeyboardKey label="r" onKeyPress={onKeyPress} />
        <KeyboardKey label="t" onKeyPress={onKeyPress} />
        <KeyboardKey label="y" onKeyPress={onKeyPress} />
        <KeyboardKey label="u" onKeyPress={onKeyPress} />
        <KeyboardKey label="i" onKeyPress={onKeyPress} />
        <KeyboardKey label="o" onKeyPress={onKeyPress} />
        <KeyboardKey label="p" onKeyPress={onKeyPress} />
      </div>
      <div className="keyboard-row">
        <KeyboardKey label="a" onKeyPress={onKeyPress} />
        <KeyboardKey label="s" onKeyPress={onKeyPress} />
        <KeyboardKey label="d" onKeyPress={onKeyPress} />
        <KeyboardKey label="f" onKeyPress={onKeyPress} />
        <KeyboardKey label="g" onKeyPress={onKeyPress} />
        <KeyboardKey label="h" onKeyPress={onKeyPress} />
        <KeyboardKey label="j" onKeyPress={onKeyPress} />
        <KeyboardKey label="k" onKeyPress={onKeyPress} />
        <KeyboardKey label="l" onKeyPress={onKeyPress} />
      </div>
      <div className="keyboard-row">
        <KeyboardKey label="enter" onKeyPress={onKeyPress} />
        <KeyboardKey label="z" onKeyPress={onKeyPress} />
        <KeyboardKey label="x" onKeyPress={onKeyPress} />
        <KeyboardKey label="c" onKeyPress={onKeyPress} />
        <KeyboardKey label="v" onKeyPress={onKeyPress} />
        <KeyboardKey label="b" onKeyPress={onKeyPress} />
        <KeyboardKey label="n" onKeyPress={onKeyPress} />
        <KeyboardKey label="m" onKeyPress={onKeyPress} />
        <KeyboardKey
          label={<BackspaceIcon />}
          code="backspace"
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};

export default Keyboard;
