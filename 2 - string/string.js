let string = 'i love javascript and sass' //  "i love \"javascript\"" output => i love "javascript"
let length = string.length
let typeOf = typeof (string)
let convert = 42
let convertToString = convert.toString() // or String(convert)
// start locate in string
let indexOf = string.indexOf('javascript',15) // its take value and start point of recherche
let lastIndexOf = string.lastIndexOf('javascript',15) // it's start from start-point and go to start of string
let search = string.search('javascript') // return index of word or -1 if not exist
let split = string.split(' ', 3) // return array from string and take tow parameters separator & limit of length of array
let slice = string.slice(0,14) // return string it's take start point and end point && take negative point that return lasts characters of string
let subStr = string.substr(0,5) // return string and take tow parameters start point and length of new string(limit)
let subString = string.substring(0,5) // return string and take tow parameters start point and end point
// deferent between substring and slice is if start point less than end point in slice wil return nothing and in substring will swap this values like: substring(20,6) it's will be substring(6,20)
let charAt = string.charAt(7) //it's take index and return character of that index
let charCodeAt = string.charCodeAt(7) //return ascii code of character
let replace = string.replace(/javascript/g,'nodejs') // return new string take tow parameters  first olw value second new value
let fromCharCode = String.fromCharCode(107,104,97,108,105,108)
let concat = string.concat(" hi from sass", " -----", "good by")
let lowercase = string.toLowerCase()
let uppercase = string.toUpperCase()
let trim = string.trim() // its delete space  just in start & end of string like : "    khalil   " => "khalil" && we have trimStart() & trimEnd()
let link = string.link("https://www.google.com") // output=>  <a href="https://www.google.com">i love javascript and sass</a>
let valueOf = string.valueOf() // its return same string (are kidding!!)
let checkOfStart = string.startsWith('i love') //it's check if string start with specific value
let checkOfEnd = string.endsWith('sass') //it's check if ending start with specific value
let repeat = string.repeat(2) //its repeat string in self
let match = string.match('javascript') // its searches a string for a match, and returns the matches, as an Array object. output => ["java", index: 7, input: "i love javascript and sass", groups: undefined] or null
let includes = string.includes('sass') // check if string include value
console.log(+("120".toString().replace(/2/g,5)))