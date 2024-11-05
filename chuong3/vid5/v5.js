console.log('konichiwa')

//variables and block scope
//bien va pham vi

console.log('>> check x: ', x);
var x = 8;          //undefined 
// let x = 8;       //error

{
    let a = 2
}
console.log('>> check a:', a)   //not printed