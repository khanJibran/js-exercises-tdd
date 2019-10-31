// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
secondThird = require("./get-second-third");
test("should show second and third value of array", function() {
  var input = [90, 5, 11, 8, 6];
  var output = [6, 8];
  var result = secondThird(input);
  expect(result).toEqual(output);
});
