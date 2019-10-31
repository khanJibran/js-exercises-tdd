function removeMiddle(words) {
  var cyf = words.length;
  if (cyf % 2 != 0) {
    var removedElement = Math.floor(cyf / 2); 
    //console.log(Math.floor(cyf / 2));
    var arrEle = words.splice(removedElement, 1);
    return arrEle; 
  }
}
//console.log(removeMiddle(["jjkjd", "jkkkd", "jhjk"]));
module.exports = removeMiddle;  

