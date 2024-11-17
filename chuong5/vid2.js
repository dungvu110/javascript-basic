console.log(`privyet iz js`)

//map function instead of for loops
let arr = [1,2,3,4,5,6,7,8,9,10];

//for, thay doi arr ban dau
// for (let i=0; i<arr.length; i++){
//     arr[i] = arr[i] * arr[i];
// }
// console.log('check value arr:', arr);

//map, giu nguyen arr ban dau
let mapArr = arr.map((item, index) => {
    item = item * item;
    return item;
})
console.log('check value arr:', arr);
console.log('check value mapArr:', mapArr);
