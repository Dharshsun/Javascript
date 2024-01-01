/*let year = 0;
 year=2023;
 console.log("Happy new year"+year);*/

//  let name = prompt("what's your name");
//  console.log('hi',name)

// let tickets = prompt('how many tickets do you want?');
// console.log("you showuld pay",Number(tickets)*20);

// let firstName="Dharshsun"
// let lastname = "Srinivasan"
// let city = "Chennai"
// console.log(`${firstName} ${lastname} lives in ${city}`)

// msg=`$95`
// console.log(msg)

let arr = [5,6,7,8,"abc",[3,4]]
console.log(arr)
console.log(arr[5][0])

let array = ['a','b','c','d','e']
array.push('f')
console.log(array)

console.log(array.pop())//removes last element
console.log(array.shift())//removes first element
console.log(array)

console.log(array.unshift('a'))

delete array[2]
console.log(array[2])

array.splice(2,2)
console.log(array)

array.splice(1,1,'m')
console.log(array)

// array.splice(1,2,'x','y')
// console.log(array)

// array.splice(1,0,'b')
// console.log(array)

// console.log(array.slice(1))

// array.reverse()
// console.log(array)

// let str = array.join()
// console.join(str)

let firstArr = [1,2,3]
let secondArr = [4,5,6]

// let joinedArr = [firstArr,secondArr]
// console.log(joinedArr)

joinedArr = firstArr.concat(secondArr)
console.log(joinedArr)

let joined = [...firstArr,...secondArr]
console.log(joined)

let a = 20, b = 30;
let max

max = a>b?a:b
console.log(max)


