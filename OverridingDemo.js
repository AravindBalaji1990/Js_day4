// Base class (superclass)
class Animal {
  makeSound(a) {
    return "Some generic sound " +a;
  }
}

// Subclass (derived class) inheriting from Animal
class Dog extends Animal {
  makeSound(a) {
    return "Sound of dog " + a;
  }

  // New method specific to Dog
  fetch() {
    return "Fetching the ball!";
  }
}

// Create an instance of the subclass
const myDog = new Dog();
const myDog1 = new Animal();

// Call the overridden method
console.log(myDog.makeSound("sample")); // Outputs: "Woof! Woof!"
console.log(myDog1.makeSound("from parent")); // Outputs: "Woof! Woof!"

// Call the new method specific to Dog
console.log(myDog.fetch()); // Outputs: "Fetching the ball!"
