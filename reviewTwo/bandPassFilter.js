const { error } = require("console");

const bandPassFilter = (freq, lowerLimit = 40, upperLimit = 1000) => {
  const outPutFreq = [];
  if (freq.length === 0) {
    return "No frequencies supplied";
  }
  freq.forEach((fr) => {
    const pushUpper = () => {
      outPutFreq.push(upperLimit);
    };
    const pushLower = () => {
      outPutFreq.push(lowerLimit);
    };
    const pushFreq = () => {
      outPutFreq.push(fr);
    };

    if (isNaN(fr) || fr <= 0) {
      throw "Something is corrupted";
    } else if (fr > upperLimit) {
      pushUpper();
    } else if (fr < lowerLimit) {
      pushLower();
    } else {
      pushFreq();
    }
  });
  return outPutFreq;
};

module.exports = bandPassFilter;
