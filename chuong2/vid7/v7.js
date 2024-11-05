//template string js
let a = 5
let b = 10

console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.')
console.log('Fifteen is ' + a + b + ' and\nnot ' + (2 * a + b) + '.')   //wrong a+b

//${...} marked as a variable
console.log(`Fifteen is ${a + b} and
    not ${2 * a + b}.`)
console.log(`value check a = ${a}`)