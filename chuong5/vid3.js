console.log('lorem ipsum')

//reduce
const array1 = [1, 2, 3, 4, 5];

// 1 + 2 + 3 + 4 + 5
const sumArray = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// 10 + 1 + 2 + 3 + 4 + 5
const initialValue = 10;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(`tinh tong mang:`, sumArray);
//15
console.log(`tinh tong mang va gia tri ban dau:`, sumWithInitial);
//25

console.log(array1)