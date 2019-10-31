var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {
  var input = [4, 10, 32, 9, 21];
  var output = [32, 21];
  var numbersGreaterThan10 = largerThanTen(input);
  expect(numbersGreaterThan10).toEqual([32, 21]);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
