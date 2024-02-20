
// https://www.codewars.com/kata/563e320cee5dddcf77000158


// cara barbar
// function getAverage(marks){
//     if(marks.length ===0 )return 0;
//     let sum = 0;

//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i]
        
//     }
//     mean = sum/marks.length;
//     return Math.floor(mean);
// }


//cara cepat 
var getAverage = (marks)=> (marks)?Math.floor(marks.reduce((cur,acc)=>cur+acc,0)/marks.length):0; 


console.log(getAverage([1,2,3,4,5,]))