
//CARA BARBAR
// function points(games) {
//     total = 0;
//     games.map((el,i)=>{
//         if (el.split(':')[0]>el.split(':')[1]){
//             point = 3
//         }else if(el.split(':')[0]<el.split(':')[1]){
//             point = 0
//         }else{
//             point = 1
//         }
//         total+= point;
//     })
//     return total;
// }


//cara simple
var points  =(games) => games.reduce((acc,[x,_,y])=>(x>y?3:x==y)+acc,0)


  console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))