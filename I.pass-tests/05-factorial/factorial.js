// int is an integer
// a factorial is the product of all non-negative integers
// less than or equal to the iniital number.

// for example the factorial of 5 is 120
// 120 = 1 * 2 * 3 * 4 * 5

// calculate and return the factorial of int
// note: factorial of 0 is 1

// function factorial(Y) {
//   var aa = [];
//   var i = 1;
//   while (Y >= i) {
//     aa.push(i);
//     i++;
//   }
//   //console.log(aa);
//   if (aa.length > 0) {
//     return aa.reduce((totall, num) => totall * num);
//   } else {
//     return 1;
//   }
// }
function factorial(y) {
  var fact = 1;
  var i;
  for (i = 1; i <= y; i++) {
    fact *= i;
  }
  return fact;
}
//console.log(factorial(0));
module.exports = factorial;
