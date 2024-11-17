console.log(`I'm tired boss...`);

//sort

const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
//sap xep theo ky tu dau tien -> Dec, Feb, Jan, March

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
//sap xep theo ky tu dau tien -> 1, 100000, 21, 30, 4

array1.sort((a, b) => {
    return a-b;
});
//thuc hien so sanh gia tri 2 so truoc khi
console.log(array1);