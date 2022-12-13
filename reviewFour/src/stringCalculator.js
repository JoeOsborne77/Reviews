const add = require("./add");
const minus = require("./minus");
const multiply = require("./multiply");
const divide = require("./divide");

const stringCalculator = (str) => {
  if (str.includes("+")) {
    return add(str);
  }
  if (str.includes("-")) {
    return minus(str);
  }
  if (str.includes("*")) {
    return multiply(str);
  }
  if (str.includes("/")) {
    return divide(str);
  }
};

module.exports = stringCalculator;
