import { mul, div, add, minus, exp, factorial, pow } from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  it("exp 3^2 to equal 9", () => {
    expect(exp(3, 2)).toBe(9);
  });

  it("exp 3^4 to equal 81", () => {
    expect(exp(3, 4)).toBe(81);
  });

  it("4! to equal 24", () => {
    expect(factorial(4)).toBe(24);
  });

  it("5! to equal 120", () => {
    expect(factorial(5)).toBe(120);
  });

  it("pow 3 to equal 9", () => {
    expect(pow(3)).toBe(9);
  });

  it("pow 4 to equal 16", () => {
    expect(pow(4)).toBe(16);
  });
});
