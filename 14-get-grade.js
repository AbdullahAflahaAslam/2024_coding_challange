//https://www.codewars.com/kata/55cbd4ba903825f7970000f5



// CARA BARBAR
function getGrade(...arrays) {
    average = arrays.length ? arrays.reduce((total, nilai) => total + nilai, 0) / arrays.length : 0
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'E'
}



// //cara cepat
// var konversiNilaiKeGrade = (nilai) => nilai >= 90 ? 'A' : nilai >= 80 ? 'B' : nilai >= 70 ? 'C' : nilai >= 60 ? 'D' : 'F';
// var getGrade = (...arrays) => konversiNilaiKeGrade(arrays.length ? arrays.reduce((total, nilai) => total + nilai, 0) / arrays.length : 0);
console.log(getGrade(82, 85, 87))