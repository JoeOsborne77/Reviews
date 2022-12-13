const stringCalculator = require("../src/stringCalculator");

describe("given a string", () => {
  it("should return the string, plus expected output using addition", () => {
    expect(stringCalculator("1 + 1")).toEqual(["1 + 1", 2.0]);
  });

  it("should return the string, plus expected output using addition", () => {
    expect(stringCalculator("1 + 1 + 1")).toEqual(["1 + 1 + 1", 3.0]);
  });

  it("should return the string, plus expected output up to two decimal places using addition", () => {
    expect(stringCalculator("1 + 1.75")).toEqual(["1 + 1.75", 2.75]);
  });

  it("should return the string, plus expected output using subtraction", () => {
    expect(stringCalculator("2 - 1")).toEqual(["2 - 1", 1.0]);
  });

  it("should return the string, plus expected output using subtraction up to two decimal places", () => {
    expect(stringCalculator("3 - 1.75")).toEqual(["3 - 1.75", 1.25]);
  });

  it("should return the string, plus expected output using multiplication", () => {
    expect(stringCalculator("3 * 2")).toEqual(["3 * 2", 6.0]);
  });

  it("should return the string, plus expected output using multiplication", () => {
    expect(stringCalculator("2 * 1.5")).toEqual(["2 * 1.5", 3.0]);
  });

  it("should return the string, plus expected output using multiplication with multiple decimal points", () => {
    expect(stringCalculator("2.25 * 1.75")).toEqual(["2.25 * 1.75", 3.94]);
  });

  it("should return the string, plus expected output using division", () => {
    expect(stringCalculator("4 / 2")).toEqual(["4 / 2", 2.0]);
  });

  it("should return the string, plus expected output using division, with decimal places", () => {
    expect(stringCalculator("3 / 1.5")).toEqual(["3 / 1.5", 2.0]);
  });
});
