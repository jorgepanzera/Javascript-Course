// Ejercicio 1
interface Person {
    name: string;
    age: number;
    profession: string;
}

type aNumberOrString = Array<number | string> 

let PersonToArrayv1 = (person: Person): aNumberOrString => {
    let aResult : aNumberOrString
    aResult = []
    aResult.push(person.name)
    aResult.push(person.age)
    aResult.push(person.profession)
    return aResult
    //return Object.values(person);
}

// version optimizada utilizando metodo Object.keys
let PersonToArray = (person: Person): aNumberOrString => {
    // return Object.values(person); .values no andaba con el compilador (tema de version()
    return Object.keys(person).map(key => person[key]);
}

let aPerson : Person = { name:"Jorge", age: 50, profession: "Ingeniero"}

// ambas versiones dan el mismo resultado
console.log(PersonToArrayv1(aPerson))
console.log(PersonToArray(aPerson))

// Ejercicio 2

type NumberOrString = number | string

function sumOrConcatenate(x: NumberOrString, y: NumberOrString) : NumberOrString {
    if (typeof x === "number" && typeof y === "number") {
        return x + y
    }
    if (typeof x === "string" && typeof y === "string"){
        return x + "-" + y
    }
    if (typeof x === "string" && typeof y === "number"){
        return x + "+" + String(y)
    }
    if (typeof x === "number" && typeof y === "string"){
        return String(x) + "+" + y
    }
    throw new Error(`Expected string or number in both parameters, x is '${typeof x}', y is ${typeof y}`);
}

console.log(sumOrConcatenate(4, 3)); // 7
console.log(sumOrConcatenate(4, "hello")); // 4+hello 
console.log(sumOrConcatenate("hello", "world")); //hello-world


// Ejercicio 3

// Ejercicio 4
