// simple script to invoke data via constructor
let empdetails = function(name, age){
this.name = name;
this.age = age;

this.getName = function(){
    return this.name;
};

this.getAge = function(){
    return this.age;
};
}

let emp1 = new empdetails('sam', 50)
let emp2 = new empdetails('samual', 52)
console.log(emp1.getName())
console.log(emp1.getAge())
console.log(emp2.getName())
console.log(emp2.getAge())