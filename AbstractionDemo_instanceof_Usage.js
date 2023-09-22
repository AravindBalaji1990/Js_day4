// use of "instance of" in abstraction
function Vehicle()  
{  
    this.vehicleName=vehicleName;  
    throw new Error("You cannot create an instance of Abstract class");  
}  
//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
} 

function car(){
    this.vehicleName=vehicleName;  
    throw new Error("You cannot create an instance of Abstract class"); 
}

Bike.prototype=Object.create(Vehicle.prototype);  

// object creation of the class
var bikeees=new Bike("Honda");  
console.log(bikeees instanceof Vehicle);  //true
console.log(bikeees instanceof car);  //false