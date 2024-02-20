
https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript


//cara barbar
// function sumArray(array){
//     if((array === null) || array.lenght <=2) return 0;

//     const sorted = array.sort((a,b)=>a-b)
//     let result = 0;

//     for (let i = 1; i < array.length-1; i++) {
//         result +=  sorted[i]
//     }

//     return result;

// }



//cara cepat
var sumArray =  (array)=> (array)?array.sort((a,b)=>a-b).slice(1,-1).reduce((ac, cur) => ac + cur,0):0;


console.log(sumArray([ 3, 5 ]))

