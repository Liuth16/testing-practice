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

export { capitalize };
