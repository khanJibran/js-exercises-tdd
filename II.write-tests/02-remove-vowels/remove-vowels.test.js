removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  var result1 = removeVowels("Samuel");
  expect(result1).toBe("_a_ue_");
});
test("length of nam11e after removing vowels", function() {
  var result1 = removeVowels("Samuel");
  var result1 = result1.length;
  expect(result1).toBe(6);
});
