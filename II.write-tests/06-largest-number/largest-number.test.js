// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
largestNumber = require("./largest-number");

test("show largest number", function() {
  var input = [3, 21, 88, 4, 36];
  var expected = 88;
  var result = largestNumber(input);
  expect(result).toBe(expected);
});
