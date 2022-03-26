import React, { useMemo } from "react";
import BackspaceIcon from "../Icons/BackspaceIcon";
import KeyboardKey from "./KeyboardKey";

const Keyboard = ({ answer, attempts, onKeyPress }) => {
  const keyColors = useMemo(
    () => calculateKeyColors(answer, attempts),
    [answer, attempts]
  );

  return (
    <div className="keyboard">
      <div className="keyboard-row">
        {"qwertyuiop".split("").map((keyLabel) => (
          <KeyboardKey
            key={keyLabel}
            label={keyLabel}
            onKeyPress={onKeyPress}
            color={keyColors[keyLabel]}
          />
        ))}
      </div>
      <div className="keyboard-row">
        {"asdfghjkl".split("").map((keyLabel) => (
          <KeyboardKey
            key={keyLabel}
            label={keyLabel}
            onKeyPress={onKeyPress}
            color={keyColors[keyLabel]}
          />
        ))}
      </div>
      <div className="keyboard-row">
        <KeyboardKey label="enter" onKeyPress={onKeyPress} />
        {"zxcvbnm".split("").map((keyLabel) => (
          <KeyboardKey
            key={keyLabel}
            label={keyLabel}
            onKeyPress={onKeyPress}
            color={keyColors[keyLabel]}
          />
        ))}
        <KeyboardKey
          label={<BackspaceIcon />}
          code="backspace"
          onKeyPress={onKeyPress}
        />
      </div>
    </div>
  );
};

const calculateKeyColors = (answer, attempts) => {
  const keyColors = {};

  attempts.forEach((attempt) => {
    attempt.forEach((letter, i) => {
      if (letter === answer[i]) {
        keyColors[letter] = "green";
      } else if (answer.includes(letter)) {
        // do not downgrade the color of a key
        if (keyColors[letter] !== "green") {
          keyColors[letter] = "yellow";
        }
      } else {
        // do not downgrade the color of a key
        if (!keyColors[letter]) {
          keyColors[letter] = "gray";
        }
      }
    });
  });

  return keyColors;
};

export default Keyboard;
