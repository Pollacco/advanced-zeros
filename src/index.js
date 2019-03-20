module.exports = function getZerosCount(number, base) {

  for (let i = 2; i <= base; i++) {
    if (base % i === 0) {
      let exponentIndex = 0;
      while (base % i === 0) {
        base = base / i;     
        exponentIndex++;
      }
      let multiplier = 0;
      let primesInNumber = Math.floor(number / i);
      while (primesInNumber > 0) {
        multiplier += primesInNumber;
        primesInNumber = Math.floor(primesInNumber / i);
      }
      zeros = Math.min(Math.floor(multiplier / exponentIndex))
    }
  }
  return zeros;
}