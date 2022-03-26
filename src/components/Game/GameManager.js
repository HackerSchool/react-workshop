import React, { useCallback, useEffect, useState } from "react";
import GameSquares from "./GameSquares";
import Keyboard from "../Keyboard/Keyboard";
import { getRandomAnswerWord, isValidWord } from "../../wordlist/wordlist";

const WORD_LENGTH = 5;
const ATTEMPT_COUNT = 6;

const GameManager = () => {
  const [answer] = useState(() => getRandomAnswerWord().split(""));
  const [attempt, setAttempt] = useState(0);
  const [attempts, setAttempts] = useState([]);
  const [input, setInput] = useState([]);

  const handleKeyButtonClick = useCallback(
    (key) => {
      if (key === "enter") {
        if (
          input.length === WORD_LENGTH &&
          attempt < ATTEMPT_COUNT &&
          isValidWord(input.join(""))
        ) {
          setAttempts((oldAttempts) => [...oldAttempts, input]);
          setInput([]);
          setAttempt((oldAttempt) => oldAttempt + 1);
        }
      } else if (key === "backspace") {
        setInput((oldInput) => oldInput.slice(0, -1));
      } else {
        setInput((oldInput) =>
          oldInput.length >= WORD_LENGTH ? oldInput : [...oldInput, key]
        );
      }
    },
    [setInput, input, attempt, setAttempt, setAttempts]
  );

  useEffect(() => {
    const keyPressListener = (event) => {
      const keyCode = event.key.toLowerCase();
      if (
        keyCode === "enter" ||
        keyCode === "backspace" ||
        (keyCode.length === 1 &&
          keyCode.charCodeAt(0) >= 97 &&
          keyCode.charCodeAt(0) <= 122)
      ) {
        handleKeyButtonClick(keyCode);
      }
    };

    window.addEventListener("keydown", keyPressListener);

    return () => {
      window.removeEventListener("keydown", keyPressListener);
    };
  }, [handleKeyButtonClick]);

  return (
    <>
      <span>Answer: {answer}</span>
      <GameSquares
        answer={answer}
        attempt={attempt}
        attempts={attempts}
        input={input}
        rowCount={ATTEMPT_COUNT}
      />
      <Keyboard onKeyPress={handleKeyButtonClick} />
    </>
  );
};

export default GameManager;
