//object
// console.log(`Hello World from JavaScript!`)

let a = {}  //obj
let b = ``  //str
// console.log('type of a:', typeof a, 'type of b:', typeof b)

//key: 'value'
let x ={
    name: 'Aleksandr',
    nationality: 'Russian',
    r: function(){
        console.log(`Hello World from Moskva!`)
        return''
    }
}
console.log('What is your name?', `My name is`, x.name)
console.log('What is your nationality?', `I'm`, x['nationality'])
console.log(`Hello (call function):`, x.r())