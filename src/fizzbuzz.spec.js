import fizz from "./fizz.js";

describe("FizzBuzz", () => {
  it("deberia salir fizz si es 3", () => {
    expect(fizz(3)).toEqual(true);
  });
});

