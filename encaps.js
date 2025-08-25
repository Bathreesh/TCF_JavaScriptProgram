function Person(name, age) {
    let _age = age; // private variable

    this.name = name;

    this.getAge = function () {
        return _age; // access private variable
    };

    this.setAge = function (newAge) {
        if (newAge > 0) {
            _age = newAge;
        }
    };
}

const p1 = new Person("joy", 25);
console.log(p1.name);     // joy
console.log(p1.getAge()); // 25
p1.setAge(30);
console.log(p1.getAge()); // 30
