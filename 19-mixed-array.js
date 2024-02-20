
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/javascript

// cara normal

// function sumMix(x){
//     sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         sum += parseInt( x[i])
//     }
//     return sum;
// }

//cara cepat
const sumMix = (x)=> x.reduce((a,b)=> a+(+b),0);


console.log(sumMix([9, 3, '7', '3']))



// const test = (x) => (+x)

// console.log(test('2'))
