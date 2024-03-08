
//overrding  uses the concept of inheritance
// Base class (superclass)
class ClassA {
  //my funciton or it can be any fucniton
  arithmeticoperation(a,b) {
    //multiply
    return a*b;
  }
}

// Subclass (derived class) inheriting from Animal
class ClassB extends ClassA {
    arithmeticoperation(a,b) {
    return a+b;
  }

  // New method specific to Dog
  childfucntion() {
    return "this is from child";
  }
}

// Create an instance of the subclass
const objB = new ClassB();//this is fopr child
const objA = new ClassA();// this is for parent

// Call the overridden method
console.log(objB.arithmeticoperation(2,3)); 
console.log(objA.arithmeticoperation(2,3)); 

// Call the new method specific to Dog
// console.log(myDog.fetch()); // Outputs: "Fetching the ball!"
