const multiply = (str) => {
  const times = (acc, num) => acc * num;
  const splitStr = str.split("*").map(Number).reduce(times);
  const fixed = splitStr.toFixed(2);
  return [str, parseFloat(fixed)];
};

module.exports = multiply;
