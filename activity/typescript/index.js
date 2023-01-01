var PersonToArrayv1 = function (person) {
    var aResult;
    aResult = [];
    aResult.push(person.name);
    aResult.push(person.age);
    aResult.push(person.profession);
    return aResult;
    //return Object.values(person);
};
// version optimizada utilizando metodo Object.keys
var PersonToArray = function (person) {
    // return Object.values(person); .values no andaba con el compilador (tema de version()
    return Object.keys(person).map(function (key) { return person[key]; });
};
var aPerson = { name: "Jorge", age: 50, profession: "Ingeniero" };
// ambas versiones dan el mismo resultado
console.log(PersonToArrayv1(aPerson));
console.log(PersonToArray(aPerson));
function sumOrConcatenate(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    if (typeof x === "string" && typeof y === "string") {
        return x + "-" + y;
    }
    if (typeof x === "string" && typeof y === "number") {
        return x + "+" + String(y);
    }
    if (typeof x === "number" && typeof y === "string") {
        return String(x) + "+" + y;
    }
    throw new Error("Expected string or number in both parameters, x is '".concat(typeof x, "', y is ").concat(typeof y));
}
console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4+hello 
console.log(sumOrConcatenate("hello", "world")); //hello-world
// Ejercicio 3
// Ejercicio 4
