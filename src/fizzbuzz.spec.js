import fizz from "./fizz.js";
import buzz from "./buzz.js";
import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia salir fizz si es 3", () => {
    expect(fizz(3)).toEqual("fizz");
  });
});

describe("FizzBuzz", () => {
  it("deberia salir buzz si es 5", () => {
    expect(buzz(5)).toEqual("buzz");
  });
});

describe("FizzBuzz", () => {
  it("deberia salir fizz si es multiplo de 3", () => {
    expect(fizz(6)).toEqual("fizz");
  });
});

describe("FizzBuzz", () => {
  it("deberia salir buzz si es multiplo de 5", () => {
    expect(buzz(10)).toEqual("buzz");
  });
});


describe("FizzBuzz", () => {
  it("deberia salir fizzbuzz si es multiplo de 5 o 3", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });
});

