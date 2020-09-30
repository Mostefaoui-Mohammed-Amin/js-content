let array = [4,12,1,8,17]
// start  Search by Testing
let result = array.find((item) => item > 10) // return first value that check condition or return undefined
let index = array.findIndex((item)=> item === 12) // return  index of first value that check condition or return -1
let filter = array.filter((item)=> item < 5 ) // return  array of values that check condition or return empty array
let every = array.every((item)=> item > 0) // return true if all or every items of array check condition or false if it'sn't
let some = array.some((item)=> item > 15) // return true if some items of array check condition or false if it'sn't
//start Search by Value
let indexOf = array.indexOf(12) // return  index of value if he exist in array or return -1
let lastIndexOf = array.lastIndexOf(12) // return  index of value if he exist in array or return -1 but its start check from the end
let include = array.includes(12) // return true of value exist in array or false if it'sn't
//start mapping
array.forEach(item=>{console.log(item)}) // let me just take loop in array
let newArray = array.map(item=> item * 5) // return new array and let me play in values of new array from old array
let reduce = array.reduce((some,item)=> some - item) // return value after loping on array and do some calculi
let reduceRight = array.reduceRight((some,item, index)=> some - item) // it's just like reduce but it's start from right
for(item of array){
    // console.log(item)
}