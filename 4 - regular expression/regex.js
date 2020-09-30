/*
    /pattern/modifiers
        i => insensitive don't mater character if it's capital or small
        g => global
        m => multi line search
    Brackets use =>
        [...] character like /[d]/ /[ayx]/ all will replace like in our example
        [^...]  not character like /[^F]/
        [...-...] range like /[a-c]/; /[C-I]/; /[0-9]/
        [^...-...] not range like /[^d-x]/
        [A-z] = range from [A-Z] to /[a-z]/
        [0-9A-V] => double range
     Quantifiers use =>
        letter+ => ...+ take any letter how meter repeat like /e+/
        letter{number} => ...{number} its will take all characters Consecutive require similar like /a{2}/ in our example expected output => i love jav#script and sass and we have also letter{number,number} like /a{2,3}/ and we have this /a{2,}/ meaning at least 2
        /(x|s)/
        /(\d)/ to find number
        /(\s)/ to find space
        n* and n?  in n+ 
*/

let string = `i love javascript and sass 56`
let result = string.replace(/(n*)/gi,'#')
console.log(result)