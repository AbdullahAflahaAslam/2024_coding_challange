

//cara bar bar
function arrayPlusArray(arr1, arr2){
    let total = 0;
    for(let i = 0 ;i< arguments.length; i++){
        for (let j = 0; j < arguments[i].length; j++) {
            total += arguments[i][j]            
        }
    }
    return total;

    //argumens adalah array semua argumen yang diparsing pada fungsi
}



//menambah semua angka dalam array
//cara pertama masih statik argumen
var arrayPlusArray = (arr1, arr2)=> (arr1.concat(arr2)).reduce((ac, cur) => ac + cur);

//cara kedua dengan dinamic argumen
var arrayPlusArray = (...arrays)=> [].concat(...arrays).reduce((ac, cur) => ac + cur); 


  
console.log(arrayPlusArray([1, 2, 3], [4, 5, 2])) 