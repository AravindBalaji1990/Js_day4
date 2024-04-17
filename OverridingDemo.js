// Base class (superclass)
class ParentClass {
  makeSound(a) {
    return "Some generic sound " +a;
  }
}

// Subclass (derived class) inheriting from Animal
class ChildClass extends ParentClass {
  makeSound(a) {
    return "Sound of dog " + a;
  }

  // New method specific to Dog
  fetch() {
    return "Fetching the ball!";
  }
}

// Create an instance of the subclass
const objchild = new ChildClass();//this is fopr child
const objparent = new ParentClass();// this is for parent

// Call the overridden method
console.log(objchild.makeSound("sample")); // Outputs: "Woof! Woof!"
console.log(objparent.makeSound("from parent")); // Outputs: "Woof! Woof!"

// Call the new method specific to Dog
// console.log(myDog.fetch()); // Outputs: "Fetching the ball!"
