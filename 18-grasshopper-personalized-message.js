
//https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/javascript

const greet = (name, owner) =>`Hello ${(name==owner)?`boss`:`guest`}`;


console.log(greet('Daniel', 'Daniel'))