const add = (str) => {
  const addition = (acc, num) => acc + num;
  const splitStr = str.split("+").map(Number).reduce(addition);
  const fixed = splitStr.toFixed(2);
  return [str, parseFloat(fixed)];
};

module.exports = add;
