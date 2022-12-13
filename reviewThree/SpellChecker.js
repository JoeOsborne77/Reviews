const SpellChecker = (string) => {
  const wordBank = ["hello", "world", "pineapple", "the", "earth", "stars"];

  if (typeof string === "string") {
    const splitWords = string.split(" ");
    const mappedWords = splitWords.map((word) => {
      if (wordBank.includes(word.toLowerCase())) {
        return (word = word);
      } else {
        return (word = `~${word}~`);
      }
    });
    return mappedWords.join(" ");
  }
  if (typeof string != "string") {
    return "Incorrect data provided";
  }
};

module.exports = SpellChecker;
