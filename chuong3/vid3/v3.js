console.log('bonjour')

//if else
//break continue
let arrTop4 = ['chel', 'mc', 'liver', 'mu'];

let i = 0;
while(i < arrTop4.length){
    i++;
    if (arrTop4[i] === 'liver'){
        console.log('Found it:',arrTop4[i]);
        continue;
        //break;
    }
    //i++;
    console.log('>>check i:',i)
}