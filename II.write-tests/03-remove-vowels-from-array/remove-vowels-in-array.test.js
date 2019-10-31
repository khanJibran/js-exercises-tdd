removeVowels = require("./remove-vowels-in-array");

test("remove vowels from all words in array", function() {
  var input = ["Irina", "Etza", "Daniel"];
  var output = ["rn", "tz", "Dnl"];
  var result = removeVowels(input);
  expect(result).toBe(output);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "Dnl"]
