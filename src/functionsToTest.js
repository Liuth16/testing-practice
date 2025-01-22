function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }
  const lowerCase = string.toLowerCase();
  const firstLetter = lowerCase.charAt(0);
  const remainingLetters = lowerCase.slice(1);
  const capitalized = firstLetter.toUpperCase() + remainingLetters;

  return capitalized;
}

function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("Input must be a string");
  }
  return string.split("").reverse().join("");
}

function calculator() {
  function validateNumbers(...args) {
    if (!args.every((arg) => typeof arg === "number")) {
      throw new Error("All arguments must be numbers");
    }
  }

  function add(a, b) {
    validateNumbers(a, b);
    return a + b;
  }
  function subtract(a, b) {
    validateNumbers(a, b);
    return a - b;
  }

  function multiply(a, b) {
    validateNumbers(a, b);
    return a * b;
  }

  function divide(a, b) {
    validateNumbers(a, b);
    return a / b;
  }
  return { add, subtract, multiply, divide };
}

export { capitalize, reverseString, calculator };
