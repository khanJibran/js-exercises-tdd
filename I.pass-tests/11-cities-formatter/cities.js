
function formatCities(capitals, transform) {
  var formatArray = [];
  for (var i = 0; i < capitals.length; i++) {
    var firstFormat = transform(capitals[i]);
    formatArray.push(firstFormat);
  }
  return formatArray;   
}
module.exports = formatCities;     
​