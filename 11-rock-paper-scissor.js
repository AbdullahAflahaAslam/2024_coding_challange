//cara bar bar
// const rps = (p1, p2) => {
//     if(p1 == p2){
//       return 'Draw!'
//     }else if(
//         (p1=='paper' && p2 == 'rock') ||
//         (p1=='scissors' && p2 == 'paper') ||
//         p1=='rock' && p2 == 'scissors'
//     ){
//         return `Player 1 won!`;
//     }else{
//         return `Player 2 won!`;
//     }
// };
const rules_win = {
    paper: 'rock',
    scissors: 'paper',
    rock: 'scissors',
}
const rps = (p1, p2) => (p1===p2)?'Draw!':`Player ${(rules_win[p1]===p2)?"1":"2"} won!`;




  console.log(rps('rock', 'scissors'))