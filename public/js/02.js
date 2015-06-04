function isEvenNumber(a){
  var result = null;

  if(a % 2 == 0) {
    result = true;
  }
  else if(a % 2 !== 0){
    result = false;
  }
  return result;
}
