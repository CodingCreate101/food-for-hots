const { flipArgs } = require("./flipArgs");

describe("flipArgs", () => {
  test("should return a function", () => {
    expect(typeof flipArgs(() => {})).toEqual("function");
  });

  test("should return flipped args", () => {
    const flipper = flipArgs((...args) => args);
    expect(flipper("a", "b")).toEqual(["b", "a"]);
    expect(flipper(1, 2, 3, 4)).toEqual([4, 3, 2, 1]);
    expect(flipper(1, 2, 3, 4, 5)).toEqual([5, 4, 3, 2, 1]);
  });
});
