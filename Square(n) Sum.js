// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript


// konvensional dengan foreach
function squareSum(numbers){
    var sum = 0;
    numbers.forEach(function(n) {
      sum += n * n
    });
    return sum;
  }
  
//dengan funsgi javascript
const squareSum = (numbers) => numbers.reduce((a,b)=>a+(b*b),0)


console.log(squareSum([0, 3, 4, 5]))

