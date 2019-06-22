const isLucky = require("../../src/isLucky");

describe("isLucky", () => {
  beforeEach(() => {
    global.Math.random = () => 0.5;
  });

  it("returns true when Math.random is less than .5", () => {
    global.Math.random = () => 0.25;
    expect(isLucky()).toBe(true);
  });

  it("returns false when Math.random is greater than .5", () => {
    global.Math.random = () => 0.75;
    expect(isLucky()).toBe(false);
  });
});
