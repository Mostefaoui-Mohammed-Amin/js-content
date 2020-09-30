let person = {
    name:"khalil",
    age:20,
    friends:["mohamed","younes","othman"],
    getProperty (){
        return{
            name:this.name,
            age:this.age
        }
    },
    getInfo (){
        let getName = () =>{
            console.log(this.name)
        }
        getName()
    },
    getMore (){
        let that = this
        function getAge (){
            console.log(that.age)
        }
        getAge()
    }
}
let name = person.name
let age = person['age']
delete person.friends

// person.getProperty()
// person.getInfo()
// person.getMore()

// todo loop on object
for(let property in person){
    console.log(person[property])
}
// to check if object does have specific property
let check ='name' in person
console.log(check)
// to pass object to other object by reference
let me = person
// to pass object to other object by reference
let you = {}
for(let property in person){
    you[property] = person[property]
}
console.log('this is you',you)

//build Factory will return just obj
function Factory (name,age){
    return{
        name,
        age
    }
}
console.log(Factory('khalil',20))
//build constructor will return instance from parent
function Constructor (name,age){
    this.name = name
    this.age= age
}
let as = new Constructor('mohamed',20)
console.log(as)