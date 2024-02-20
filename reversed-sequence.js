//cara lama
const reverseSeq = n => {
    var arr = [];
    while (n > 0) {
        arr.push(n)
        n--;
    }
    return arr;
  };

  const reverseSeqMin = n => Array(n).fill().map((e,i) => n-i)

console.log(reverseSeqMin(10))