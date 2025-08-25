
// constructor.js

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Create objects
const p1 = new Person("Robert", 25);
const p2 = new Person("Bob", 30);

console.log(p1.name, p1.age); // Robert 25
console.log(p2.name, p2.age); // Bob 30
