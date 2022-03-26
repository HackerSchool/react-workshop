import answerWords from "./input_words.json";
import validWords from "./words.json";

export const getRandomAnswerWord = () => {
  const index = Math.floor(Math.random() * answerWords.length);

  return answerWords[index];
};

export const isValidWord = (word) => {
  return answerWords.includes(word) || validWords.includes(word);
};
