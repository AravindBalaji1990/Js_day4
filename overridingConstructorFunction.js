//overriding with constructor function

function functionone(name){
    this.name = name
}

functionone.prototype.display = function(){
    console.log(`${this.name} this is the name`)
}


function functiontwo(name, age){
    functionone.call(this, name)
    this.age = age
}

//setup of inheritance
functiontwo.prototype = Object.create(functionone.prototype)
functiontwo.prototype.constructor = functiontwo

functiontwo.prototype.display = function(){
    console.log(`${this.name} this is the second name`)
}


const obj = new functiontwo('second' , 123)
obj.display()
const obj1 = new functionone('one')
obj1.display()