import { factorial } from "../../../src/day1/Functions.js";
import { expect }  from "chai";

describe("factorial", () => {
  it("should return 1 when n is 0", () => {
    const result = factorial(0);
    expect(result).to.equal(1);
  });

  it("should return 1 when n is 1", () => {
    const result = factorial(1);
    expect(result).to.equal(1);
  });

  it("should return 2 when n is 2", () => {
    const result = factorial(2);
    expect(result).to.equal(2);
  });

  it("should return 6 when n is 3", () => {
    const result = factorial(3);
    expect(result).to.equal(6);
  });

  it("should return 24 when n is 4", () => {
    const result = factorial(4);
    expect(result).to.equal(24);
  });

  it("should return 120 when n is 5", () => {
    const result = factorial(5);
    expect(result).to.equal(120);
  });
});
