// class way of implementing a abstraction
class Car {
  constructor(make, model) {
    this.make = make;       // Public property
    this.model = model;     // Public property
    this._mileage = 1;      // Private property (indicated by the underscore)

    // Private method (not accessible from outside)
    this._updateMileage = function (distance) {
        // private varibale
        // this._mileage = _mileage+distance -> abbreavaiton of the below line
      this._mileage += distance; // this._mileage = this._mileage+distance
    };
  }

  // Public method
  drive(distance) {
    // i am invokinghte provate method inside a public
    this._updateMileage(distance);
    console.log(`Driving ${distance} miles.`);
  }

  // Public method
  getMileage() {
    return this._mileage; // distance 100 , 100+1(mileage value)
  }
}

// create a object for the car class
const myCar = new Car("Toyota", "Corolla");
myCar.drive(100);
console.log(myCar.getMileage()); // Output: 100
