 let myDate = new Date()

//  console.log(myDate)
//  console.log(myDate.toString())
//  console.log(myDate.toDateString())
//  console.log(myDate.toISOString())
//  console.log(myDate.toJSON())
//  console.log(myDate.toLocaleDateString())
//  console.log(myDate.toLocaleTimeString())
//  console.log(myDate.toTimeString())


 // let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
// let myCreatedDate = new Date("01-14-2023")
// // console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()


// console.log(myTimeStamp);// mili seconds
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)) // seconds

console.log(myDate.getMonth() + 1) //js start month from 0

myDate.toLocaleString('default', {
    weekday: "long",
})

