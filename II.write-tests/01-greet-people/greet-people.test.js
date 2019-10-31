var greetPeople = require("./greet-people");

test("print list of names ", function() {
  var mentors = ["Irina", "Ashleigh", "Etza"];
  //var expected = ["Hello Irina, Ashleigh, Etza"];
  var result = greetPeople(mentors);

  expect(result).toBe(["Hello Irina, Ashleigh, Etza"]);
});
