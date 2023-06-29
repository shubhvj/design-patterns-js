// The Prototype pattern is a design pattern in JavaScript that allows objects to be created from a prototype object.
// It enables the creation of new instances by cloning or copying an existing object,
// rather than creating new instances from a class or constructor function.

const carPrototype = {
  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  },

  getInfo() {
    return `Car: ${this.make}, ${this.model}, ${this.year}`;
  },
};

const car1 = Object.create(carPrototype);
car1.init("Honda", "Civic", 2021);

const car2 = Object.create(carPrototype);
car2.init("Toyota", "Corolla", 2022);

console.log(car1.getInfo());
console.log(car2.getInfo());
console.log(car1 === car2);