// cara manual
// function rot13(message) {
//     var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
//     return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
//   }


// cara expert
function rot13(str){
    return str.replace(/[a-zA-Z]/g,function(char){
        var base = char <= 'Z' ? 'A' : 'a';
        //jika code dari alfabet lebih dari 26 diambil sisanya/mod ditambah base (A/a)
        return (char.charCodeAt(0) - base.charCodeAt(0) +13)%26 + base.charCodeAt(0)
    })
}

console.log(rot13('z'))