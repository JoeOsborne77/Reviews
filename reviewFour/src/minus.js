const minus = (str) => {
  const subtraction = (acc, num) => acc - num;
  const splitStr = str.split("-").map(Number).reduce(subtraction);
  const fixed = splitStr.toFixed(2);
  return [str, parseFloat(fixed)];
};

module.exports = minus;
