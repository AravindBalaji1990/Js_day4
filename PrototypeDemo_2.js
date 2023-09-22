// simple script to invoke data via constructor
let empdetails = function(name, age){
this.name = name;
this.age = age;


}
empdetails.prototype.getName = function(){
    return this.name;
};
empdetails.prototype.getAge = function(){
    return this.age;
};
let emp1 = new empdetails('sam', 50)
let emp2 = new empdetails('samual', 52)
console.log(emp1.getName())
console.log(emp1.getAge())