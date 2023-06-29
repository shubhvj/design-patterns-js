// The Singleton pattern is a design pattern that restricts the instantiation of a class to a single instance.
// It ensures that there is only one instance of the class throughout the application, 
// and provides a global point of access to that instance.
let instance = null;

class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  // class methods and properties
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2);