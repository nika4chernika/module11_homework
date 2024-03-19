// import { reverseStr } from "./index.js";
const countDown = require('./index');

describe ("tests for countDown function", () => {
  it("should return numbers", () => expect(countDown(5)).toBe([5, 4, 3, 2, 1]));
  it("should return big number warning", () => expect(countDown(501)).toBe("Слишком большое число"));
  it("should return zero umber warning", () => expect(countDown(0)).toBe("Число не может быть нулевым"));
  it("should return negative number warning", () => expect(countDown(-10)).toBe("Число должно быть положительным"));
})


