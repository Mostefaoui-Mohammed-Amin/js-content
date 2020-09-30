let myArray = [1,2,3,4,5,6,7]
myArray.push(8,9,10) //to add items in end of array
myArray.unshift(-1,0) //to add items in start of array
myArray.pop() //to delete last item in array EX: let x = myArray.pop()
myArray.shift() //to delete first item in array
// methods that add items return length of array after adding && methods that delete items return items deleted
// |||||||||||||||||||||||||||||||||||||||||||||||
let myArray2 = [1,2,5,8,12,23]
myArray2.splice(1,3,5,7,9,45,67) //to delete items from array its take startIndex(required),countDelete(required),items that replace items deleted(optional) its accept many new items
// EX: myArray2.splice(4,0,45,67) to add new items with out delete any item
// EX: myArray2.splice(0, 1) to delete first item
let sliceArray = myArray2.slice(1,4) // to take slice from array take tow parameters startIndex , endIndex and return array of length 4-1 = 3 EX: myArray2.slice(-6,-3) start from end 
// |||||||||||||||||||||||||||||||||||||||||||||||
let strArray =  myArray2.toString() //return string return 1,2,5,8,12,23 or myArray2.toLocaleString()
let strJoin = myArray2.join('-') // take separator between items and return string return 1-2-5-8-12-23
let newArray = myArray2.concat(myArray,[6,8,9],'khalil') //to concat arrays
let arrayLength = myArray2.length //return length of array
let itemIndex = myArray2.indexOf('khalil') // return index of items in array if doesn't exist return -1 he take value that i recherche and index of start of recherche Ex: myArray2.indexOf('khalil,2)
let lastIndexOf = myArray2.lastIndexOf('khalil',4) //its will recherche from end to start in ex start from index 4 to 0
let checkArray = Array.isArray(myArray2) //return true  if she array or false if isn't or myArray.constructor === Array
let newArray3 = Array.from(myArray2) //to get new array from author array with out reference
let newArray4 = Array.of(1,2,3,4) // to get new array from values or can use Array(8,9,10)  EX: Array.of(...myArray2)
let newArray5 = Array(7) // to get new array empty of length 7
let includes = myArray2.includes(12,8) //check if items exist in my arrays take value and index of start
let sortArray = [5,12,9].sort() // to sorting array
console.log(array.sort((a,b)=>{
    if(a<b) return -1
    else if(a>b) return 1
    else return 0
}))
let reverseArray = [5,12,9].reverse() // to reverse array
let copyWithin = [5,12,9].copyWithin(0,2) //method shallow copies part of an array to another location in the same array and returns it without modifying its length.
let myArray3 = Array.from(myArray2,item=>item * 2)
myArray3.fill(100,0,array.lenght)// all item of array will be 100its work like slice doesn't take last element