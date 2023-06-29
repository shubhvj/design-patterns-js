// The Abstract Factory pattern is a design pattern that provides an interface for creating families of
// related or dependent objects without specifying their concrete classes.
// It encapsulates the creation of objects within a factory object,
// allowing the client code to work with abstract interfaces instead of concrete implementations.

class ProductA {
  getInfo() {
    return "Product A";
  }
}

class ProductA1 extends ProductA {
  getInfo() {
    return "Product A1";
  }
}

class ProductA2 extends ProductA {
  getInfo() {
    return "Product A2";
  }
}

class ProductB {
  getInfo() {
    return "Product B";
  }
}

class ProductB1 extends ProductB {
  getInfo() {
    return "Product B1";
  }
}

class ProductB2 extends ProductB {
  getInfo() {
    return "Product B2";
  }
}

class AbstractFactory {
  createProductA() {}
  createProductB() {}
}

// concrete factory 1
class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ProductA1();
  }

  createProductB() {
    return new ProductB1();
  }
}

// concrete factory 2
class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ProductA2();
  }

  createProductB() {
    return new ProductB2();
  }
}

const factory1 = new ConcreteFactory1();
const productA1 = factory1.createProductA();
const productB1 = factory1.createProductB();

console.log(productA1.getInfo());
console.log(productB1.getInfo());

const factory2 = new ConcreteFactory2();
const productA2 = factory2.createProductA();
const productB2 = factory2.createProductB();

console.log(productA2.getInfo());
console.log(productB2.getInfo());
