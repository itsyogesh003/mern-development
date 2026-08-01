// ++++++++++ numbers +++++++++++++++++ 
const score = 400
console.log(score)
console.log(score.toString().length)


const balance = new Number(100)
console.log(balance)
console.log(balance.toFixed(2))

const otherNumber = 123.8966

console. log(otherNumber.toPrecision(4));

const hundreds = 1000000
console. log(hundreds. toLocaleString('en-IN'));

// ++++++++++++++ Maths +++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6)) //uper-round up
console.log(Math.floor(4.6))// lower - round up

console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

// most important 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
