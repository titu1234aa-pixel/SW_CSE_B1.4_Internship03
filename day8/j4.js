// Variables in JS
var x = 10;
var x = 20;
x = 30;
console.log(x)

if (true) {
    var message = "Hello";
}
// var in JS is not block-scoped
console.log(message);
let score = 100;
score = 160; // re-assignment is valid
console.log(score)
if(true){
    let secret = "Password@123"; // let in JS is block-scoped
}
console.log(secret); 
if(true){
    const pi = 3.14159;
    console.log(pi)