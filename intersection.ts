// // 1. Intersection of Types
// type Person = {
//     name: string;
//     age: number;
// };

// type Employee = {
//     company: string;
//     role: string;
// };

// type Workers = Person & Employee; // Must have all properties from Person and Employee

// const worker: Workers = {
//     name: "Alice",
//     age: 30,
//     company: "TechCorp",
//     role: "Software Engineer",
// };

// console.log(worker);

// // 2. Intersection of Interfaces
// interface Person {
//     name: string;
//     age: number;
// }

// interface Employee {
//     company: string;
//     role: string;
// }

// interface MyWorker extends Person, Employee { }  // Equivalent to an intersection

// const worker12: MyWorker = {
//     name: "Bob",
//     age: 25,
//     company: "OpenAI",
//     role: "AI Researcher",
// };

// console.log(worker12);


// 3. Intersection of Type and Interface
type Person = {
    name: string;
    age: number;
};

interface Employee {
    company: string;
    role: string;
}

// type Workers = Person & Employee;

// const worker3: Workers = {
//     name: "Charlie",
//     age: 35,
//     company: "Google",
//     role: "Product Manager",
// };

// console.log(worker3);

// interface Workers extends Person, Employee { } // Equivalent

// const worker3: Workers = {
//     name: "Charlie",
//     age: 35,
//     company: "Google",
//     role: "Product Manager",
// };

// console.log(worker3);

