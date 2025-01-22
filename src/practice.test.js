import { capitalize, reverseString, calculator } from "./functionsToTest";

test("capitalize is defined", () => {
  expect(capitalize).toBeDefined();
});

test("capitalize accepts string only", () => {
  const stringArgument = "this is a string argument";
  expect(() => capitalize(stringArgument)).not.toThrow(Error);
  expect(() => capitalize(33)).toThrow(Error);
  expect(() => capitalize()).toThrow(Error);
  expect(() => capitalize(null)).toThrow(Error);
  expect(() => capitalize({})).toThrow(Error);
  expect(() => capitalize(true)).toThrow(Error);
});

test("capitalize return the str with only the first letter capitalized", () => {
  const allLower = "string with all lower case";
  const allUpper = "STRING WITH ALL UPPER CASE";
  const mixedCase = "stRIng wiTH mIXED CasE";

  expect(capitalize(allLower)).toBe("String with all lower case");
  expect(capitalize(allUpper)).toBe("String with all upper case");
  expect(capitalize(mixedCase)).toBe("String with mixed case");
});

test("reverseString is defined", () => {
  expect(reverseString).toBeDefined();
});

test("reverse string accepts string only", () => {
  const stringArgument = "this is a string argument";
  expect(() => reverseString(stringArgument)).not.toThrow(Error);
  expect(() => reverseString(33)).toThrow(Error);
  expect(() => reverseString()).toThrow(Error);
  expect(() => reverseString(null)).toThrow(Error);
  expect(() => reverseString({})).toThrow(Error);
  expect(() => reverseString(true)).toThrow(Error);
});

test("reverseString should return the string reversed, keeping the letter case unchanged", () => {
  const allLower = "string with all lower case";
  const allUpper = "STRING WITH ALL UPPER CASE";
  const mixedCase = "stRIng wiTH mIXED CasE";

  expect(reverseString(allLower)).toBe("esac rewol lla htiw gnirts");
  expect(reverseString(allUpper)).toBe("ESAC REPPU LLA HTIW GNIRTS");
  expect(reverseString(mixedCase)).toBe("EsaC DEXIm HTiw gnIRts");
});

test("calculator is defined", () => {
  expect(calculator).toBeDefined();
});

test("calculator operations accepts only numbers", () => {
  const calc = calculator();
  expect(() => calc.add(1, 2)).not.toThrow(Error);
  expect(() => calc.add(0.5, 0.3)).not.toThrow(Error);
  expect(() => calc.add()).toThrow(Error);
  expect(() => calc.add("string")).toThrow(Error);
  expect(() => calc.add(null)).toThrow(Error);
  expect(() => calc.add({})).toThrow(Error);
  expect(() => calc.add(true)).toThrow(Error);
});

test("calculator can add, subtract, divide and multiply", () => {
  const calc = calculator();
  expect(calc.add(10, 2)).toBe(12);
  expect(calc.subtract(15, 3)).toBe(12);
  expect(calc.multiply(3, 5)).toBe(15);
  expect(calc.divide(100, 4)).toBe(25);
});
