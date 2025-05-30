// 1. Generic Function
// const printVal = <T>(msg: T): T => {
//     return msg;
// }

// console.log(printVal("anand"));

// 2. Generic Function with Multiple Types
// function merge<T, U>(obj1: T, obj2: U): T & U {
//     return { ...obj1, ...obj2 };
// }
// const object1 = {};
// const object2 = {
//     name: "Anand",
// }
// console.log(merge(object1, object2));

// 4. Generic Interface
// interface Box<T> {
//   value: T;
// }

// const stringBox: Box<string> = { value: "hello" };
// const numberBox: Box<number> = { value: 123 };

// 7. Generic Constraint
// function logLength<T extends { length: number }>(item: T): void {
//     console.log(item.length);
// }

// logLength("abxjsks");
// logLength([1, 2, 3, 5]);

// 8. Default Type for Generics
// interface APIRes<T = string> {
//     data: T;
// }
// const response: APIRes = {
//     data: "",
// }

// 9. Generic with keyof
// function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
// const sample = {
//     name: "Anand",
// }
// console.log(getValue(sample, "name"));

// 10. Generic Utility Types (Partial, Readonly, etc.)
interface User {
    name: string;
    age: number;
}

const partialUser: Partial<User> = {
    name: "Anand",
}
const readonlyUser: Readonly<User> = {
    name: "Anand",
    age: 21,
}