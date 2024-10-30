console.log(`Hello world from JavaScript`.toUpperCase())

let a = 5

let b = 6
let c = 6.1
// console.log(a + b)  //11
// console.log(a + c)  //11.1

let d = `5`
// console.log(a + d)  //55
// console.log(a * d)  //25
// console.log(a / d)  //1
// console.log(a - d)  //0
console.log(a === d, `a:`, typeof(a), `b:`, typeof(d))    //false

let e = +d
//let e = Number(d)
console.log(`e value:`, e, `type:`, typeof(e))
console.log(a === e, `a:`, typeof(a), `e:`, typeof(e))    //true