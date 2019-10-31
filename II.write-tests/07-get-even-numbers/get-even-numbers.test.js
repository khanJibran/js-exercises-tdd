// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
evenNumbers = require("./get-even-numbers");
test("show even  number", function() {
  var input = [22, 13, 73, 82, 4];
  var expected = [22, 82, 4];
  var result = evenNumbers(input);
  expect(result).toEqual(expected);
});
