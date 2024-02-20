https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str) {
    let n = ''
    for (let i of str) {
        n = i + n
    }
    return n
}

// one line code

solution = (str) => str.split('').reverse().join('')

console.log(solution('world'))