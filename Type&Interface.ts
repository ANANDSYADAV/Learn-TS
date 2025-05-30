type A = {
    name: string,
    age: number,
}

type D = A & {
    address: string,
}

interface B {
    name: string;
    age: number;
}

interface C extends B {
    address: string;
}

const obj1: A = {
    name: "anand",
    age: 21,
}

const obj2: B = {
    name: "anand",
    age: 21,
}

const obj3: C = {
    name: "anand",
    age: 21,
    address: "delhi",
}

const obj4: D = {
    name: "anand",
    age: 21,
    address: "hyd",
}

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);