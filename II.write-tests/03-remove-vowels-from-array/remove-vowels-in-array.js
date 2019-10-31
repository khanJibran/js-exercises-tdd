function removeVowelsForWords(words) {
  var result = words.map(function(word) {
    return removeVowelsForWords(word);
  });

  return result;
}

module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]  
*/
