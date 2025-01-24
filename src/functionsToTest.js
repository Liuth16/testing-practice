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

function caesarCipher(string, key) {
  if (
    typeof string !== "string" ||
    Number.isInteger(key) === false ||
    key < 0
  ) {
    throw new Error("Incorrect argument, enter a string and a integer!");
  }
  let cipheredString = "";
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );
  const alphabetUpper = alphabet.map((element) => element.toUpperCase());
  string.split("").forEach((char) => {
    if (alphabet.includes(char)) {
      cipheredString += alphabet[(alphabet.indexOf(char) + key) % 26];
    } else if (alphabetUpper.includes(char)) {
      cipheredString += alphabetUpper[(alphabetUpper.indexOf(char) + key) % 26];
    } else {
      cipheredString += char;
    }
  });
  return cipheredString;
}

function analyzeArray(array) {
  if (Array.isArray(array) === false) {
    throw new Error("Please pass an array as argument");
  }
  if (
    !array.every((element) => typeof element === "number") ||
    array.length === 0
  ) {
    throw new Error("All array elements need to be numbers");
  }
  const obj = {};
  obj.length = array.length;
  obj.min = Math.min(...array);
  obj.max = Math.max(...array);
  obj.average =
    array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0) / array.length;
  return obj;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
