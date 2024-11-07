console.log(`:v`)

//function vs method

let sum = (a, b) => {
    return a + b;
}

console.log(`check sum: 4 + 5 =`, sum(4, 5));

//method is the function in class or object

let obj = {
    name: `Z`,
    address: `Hanoi`,
    getName: function(){
        return this.name;
    }
}

console.log(`>>> get name:`, obj.getName())