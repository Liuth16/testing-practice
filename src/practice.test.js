import { capitalize } from "./functionsToTest";

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
