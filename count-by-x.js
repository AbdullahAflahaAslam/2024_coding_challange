const countBy = (x, n) => Array.from({ length: n }, (value, index) => x * (index + 1));


// const countBy = (x, n) => [...Array(n)].map((el,i)=>(i+1)*x)


console.log(countBy(1,4));
