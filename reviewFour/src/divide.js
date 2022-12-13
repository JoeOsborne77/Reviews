const divide = (str) => {
  const division = (acc, num) => acc / num;
  const splitStr = str.split("/").map(Number).reduce(division);
  const fixed = splitStr.toFixed(2);
  return [str, parseFloat(fixed)];
};

module.exports = divide;
