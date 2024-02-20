var countSheep = (numbers)=>Array.from({ length: numbers }, (_, index) => `${index + 1} sheep...`).join('');

var countSheep2 = (numbers) =>[...Array(numbers)].map((_,i) => `${i+1} sheep...`).join('');

console.log(countSheep(2));

console.log(countSheep2(2))