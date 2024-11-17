console.log('hello world')

// let arr = [1,2,3,4,5,6,7,8,9,10];
let arr = [
    { name: "Alek", age: 30},
    { name: 'Akusov', age: 24},
    { name: `Pavel`, age: 21},
    { name: 'Roy', age: 21}
];

//filter, tra ve array
let filtered = arr.filter((item, index) => {
    return item && item.age <25;
});
console.log(filtered)

//find, tra ve 1 phan tu
let found = arr.find((item, index) => {
    return item && item.age === 21;
});
console.log(found)