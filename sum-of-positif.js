// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript


//cara bar bar
function positiveSum(arr) {
    sum = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>0){
            sum += arr[i];
        }
        
    }
    return sum
}

// cara cepat
positiveSum = (arr) => arr.reduce((a,b)=> b>0? a+b:a,0)


console.log(positiveSum([1,-2,3,4,5]))