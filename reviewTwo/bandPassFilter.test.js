const bandPassFilter = require("./bandPassFilter.js");

describe("Given an array of numbers, which represent frequencies", () => {
  it("given array", () => {
    expect(bandPassFilter([60, 10, 45, 60, 1500])).toEqual([
      60, 40, 45, 60, 1000,
    ]);
  });

  it("given array", () => {
    expect(bandPassFilter([60, 10, 50, 1000, 1500])).toEqual([
      60, 40, 50, 1000, 1000,
    ]);
  });

  it("should return given array with frequencies changed to reflect lower limit", () => {
    expect(bandPassFilter([60, 10, 50, 1000, 1500], 50)).toEqual([
      60, 50, 50, 1000, 1000,
    ]);
  });

  it("should return given array with frequencies changed to reflect lower limit", () => {
    expect(bandPassFilter([250, 10, 50, 1000, 1500], 200)).toEqual([
      250, 200, 200, 1000, 1000,
    ]);
  });

  it("should return given array with frequencies changed to reflect upper limit", () => {
    expect(bandPassFilter([250, 10, 50, 1000, 1500], 200, 1000)).toEqual([
      250, 200, 200, 1000, 1000,
    ]);
  });

  it("should return given array with frequencies changed to reflect upper limit", () => {
    expect(bandPassFilter([50, 10, 10000, 1000, 1500], 750, 1000)).toEqual([
      750, 750, 1000, 1000, 1000,
    ]);
  });

  it("should return an er array with frequencies changed to reflect upper limit", () => {
    expect(bandPassFilter([50, 10, 10000, 1000, 1500], 750, 1000)).toEqual([
      750, 750, 1000, 1000, 1000,
    ]);
  });

  it("should return an error if NaN", () => {
    expect(() => {
      bandPassFilter([50, 10, "jhfjhf", 1000, 1500], 750, 1000);
    }).toThrow("Something is corrupted");
  });

  it("should return an error if negative", () => {
    expect(() => {
      bandPassFilter([50, 10, -10000, 1000, 1500], 750, 1000);
    }).toThrow("Something is corrupted");
  });

  it("should return an error if zero", () => {
    expect(() => {
      bandPassFilter([50, 10, 0, 1000, 1500], 750, 1000);
    }).toThrow("Something is corrupted");
  });

  it("should return error if array empty", () => {
    expect(bandPassFilter([], 750, 1000)).toEqual("No frequencies supplied");
  });
});
