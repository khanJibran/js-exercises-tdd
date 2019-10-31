function greetPeople(people) {
  var greeting = "Hello ";
  var greet = [];

  people.forEach(function(person) {
    sayGreeting = [greeting + greet.push(people)];
  });

  return sayGreeting;
}

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
