// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript


// convensional
// function repeatStr (n, s) {
//     var combine = '';

//     for (let i = 0; i < n ; i++) {
//         combine += s;

//     }
//     return combine;
// }


//pembuatan fnugsi
// function repeatStr(n, s) {
//     String.prototype.test = function (n) {
//         return (new Array(n + 1)).join(this);
//     };
//     return s.test(n);
// }

// cara cepat
repeatStr = (n, s) => s.repeat(n)

console.log(repeatStr(3, "*"))