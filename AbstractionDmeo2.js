//proper way of implementing abstraction
// using a constructor function - ES6
function Vehicle()  
{  
    this.vehicleName="vehicleName";  
    throw new Error("You cannot create an instance of Abstract Class");  
}  
// declation of function
Vehicle.prototype.display=function()  
{  
    return "Vehicle is: "+this.vehicleName;  
}  

//Creating a constructor function  
function Bike(vehicleName)  
{  
    this.vehicleName=vehicleName;  
}  

//Creating object without using the function constructor  
Bike.prototype=Object.create(Vehicle.prototype);  
var bike=new Bike("Honda");  
console.log(bike.display());  