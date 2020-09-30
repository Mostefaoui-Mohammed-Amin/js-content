//Object Constructor
function Constructor (name,age){
    this.name = name
    this.age = age
    this.getInfo = ()=>{
        return `${this.name}  ${this.age}`
    }
}
function Student (name,age,faculty){
    Constructor.call(this,name,age)
    this.faculty = faculty
    this.getInfo = ()=>{
        return `${this.name} : ${this.age} : ${this.faculty}`
    }
}
let me = new Constructor('khalil',20)
let newMe = new Student('khalil',20,'info')

//Class Syntax
class Person{
    name
    age
    constructor(name,age) {
        this.age = age
        this.name = name
    }
    getInfo(){
        return `${this.name}  ${this.age}`
    }
}
class NewStudent extends Person {
    faculty
    constructor(name,age,faculty){
        super(name,age)
        this.faculty = faculty
    }
    getInfo(){
        return `${this.name} : ${this.age} : ${this.faculty}`
    }
}
let you = new Person('mohamed',20)
let newYou = new NewStudent('mohamed',20,'info')