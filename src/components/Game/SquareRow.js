import React, { useMemo } from "react";
import Square from "./Square";

const SquareRow = ({ answer, word, isInput }) => {
  // Calculate color of each square
  const colors = useMemo(
    () => calculateSquareColors(answer, word, isInput),
    [answer, word, isInput]
  );

  return (
    <div className="squares-row">
      {answer.map((_, i) => (
        <Square key={i} content={word[i]} color={colors[i]} />
      ))}
    </div>
  );
};

const calculateSquareColors = (answer, word, isInput) => {
  if (isInput) {
    return answer.map(() => "unset");
  }

  // convert letter array to count map
  // e.g. hello would be {'h': 1, 'e': 1, 'l': 2, 'o': 1}
  const letterCount = answer.reduce(
    (acc, letter) => ({ ...acc, [letter]: (acc[letter] || 0) + 1 }),
    {}
  );

  // make two runs, one for green, another for yellow
  // this helps avoid errors when calculating colors (e.g. with hello and eexyz)
  let colors = answer.map((letter, i) => {
    if (letter === word[i]) {
      // green
      letterCount[letter]--;
      return "green";
    }
    return "gray";
  });

  colors = colors.map((color, i) => {
    if (color === "gray") {
      if (letterCount[word[i]] > 0) {
        // yellow
        letterCount[word[i]]--;
        return "yellow";
      }
    }
    return color;
  });

  return colors;
};

export default SquareRow;
