const SpellChecker = require("./SpellChecker");

describe("Given an array of words", () => {
  it("returns correctly spelt words exactly the same", () => {
    expect(SpellChecker("hello")).toEqual("hello");
  });

  it("returns correctly spelt words exactly the same", () => {
    expect(SpellChecker("Hello")).toEqual("Hello");
  });

  it("returns correctly spelt words exactly the same", () => {
    expect(SpellChecker("world")).toEqual("world");
  });

  it("returns incorrectly spelt words surrounded by tilda's", () => {
    expect(SpellChecker("hlelo")).toEqual("~hlelo~");
  });

  it("returns incorrectly spelt words surrounded by tilda's", () => {
    expect(SpellChecker("pinapple")).toEqual("~pinapple~");
  });

  it("raises an error if non-string data provided", () => {
    expect(SpellChecker(1234)).toEqual("Incorrect data provided");
  });

  it("raises an error if non-string data provided", () => {
    expect(SpellChecker(-10)).toEqual("Incorrect data provided");
  });

  it("raises an error if non-string data provided", () => {
    expect(SpellChecker(-10)).toEqual("Incorrect data provided");
  });

  it("returns words that are not in the wordBank surrounded by tilda's", () => {
    expect(SpellChecker("Oranges")).toEqual("~Oranges~");
  });

  it("returns words that are not in the wordBank surrounded by tilda's", () => {
    expect(SpellChecker("hello pineapple earth stars")).toEqual(
      "hello pineapple earth stars"
    );
  });
});
