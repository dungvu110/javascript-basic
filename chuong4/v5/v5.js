console.log('Ò_ó')

//Callback, setTimeout, setInterval

let sum = (a, b, callback) => {
    tong = a + b;
    
    // setTimeout(() => {       //delay sau 2000 ms
    //     callback(tong);
    // }, 2000)

    let i = 0;
    let timer = setInterval(() => {     //delay va lap vo han
        callback(tong);
        i++;
        if (i === 5){
            clearInterval(timer);       //ngung lap
        }
    }, 1000)
}

let printSum = (message) => {
    console.log('>> a + b =', message)
}

sum(4, 5, printSum)

