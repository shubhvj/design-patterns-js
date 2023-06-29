// The Builder pattern is a design pattern that provides a way to construct complex objects step by step.
// It separates the construction of an object from its representation,
// allowing the same construction process to create different representations.

class Product {
  constructor() {
    this.part1 = null;
    this.part2 = null;
  }

  setPart1(part1) {
    this.part1 = part1;
  }
  setPart2(part2) {
    this.part2 = part2;
  }

  getInfo() {
    return `Part 1: ${this.part1}, Part 2: ${this.part2}`;
  }
}

class ProductBuilder {
  constructor() {
    this.product = new Product();
  }

  buildPart1(part1) {
    this.product.setPart1(part1);
    return this;
  }
  buildPart2(part2) {
    this.product.setPart2(part2);
    return this;
  }
  getProduct() {
    return this.product;
  }
}

const builder = new ProductBuilder();

const product = builder.buildPart1('A').buildPart2('B').getProduct();

console.log(product.getInfo());


