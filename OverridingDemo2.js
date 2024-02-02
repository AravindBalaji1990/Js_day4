// Base class (superclass)
class ClassA {
  arithmeticoperation(a,b) {
    return a*b;
  }
}

// Subclass (derived class) inheriting from Animal
class ClassB extends ClassA {
    arithmeticoperation(a,b) {
    return a+b;
  }

  // New method specific to Dog
  fetch() {
    return "Fetching the ball!";
  }
}

// Create an instance of the subclass
const myDog = new ClassB();//this is fopr child
const myDog1 = new ClassA();// this is for parent

// Call the overridden method
console.log(myDog.arithmeticoperation(2,3)); 
console.log(myDog1.arithmeticoperation(2,3)); 

// Call the new method specific to Dog
// console.log(myDog.fetch()); // Outputs: "Fetching the ball!"
