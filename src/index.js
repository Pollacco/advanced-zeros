module.exports = function getZerosCount(number, base) {
  // your implementation
  let power = Math.floor(Math.log(number)/Math.log(base));
  let sum=0;
  for(let i=1; i<=power; i++){
    let num=Math.pow(base,i);
    sum+=Math.floor(number/num);
  }
  return sum;
}