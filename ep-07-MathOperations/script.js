const width = +prompt("Please Enter Rectangle Width");
const height = +prompt("Please Enter Rectangle Height");

console.log(width * height);
document.write(`Rectangle Area: ${width * height}`);
console.log(Math.PI);

//To generate random integer between two values
let min = 10;
let max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min));