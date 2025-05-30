// // interface IPersonClass {
// //     greet(): void;
// // }

// // type TPersonClass = {
// //     greet(): void,
// // }

// // class Person implements TPersonClass {
// //     // private name: string;
// //     // private age: number;
// //     // constructor(name: string, age: number) {
// //     //     this.name = name;
// //     //     this.age=  age;
// //     // }
// //     constructor(private name: string, private age: number) { }

// //     greet(): void {
// //         console.log(`Hello from ${this.name}`);
// //     }
// // }

// // const raj = new Person("Raj", 20);
// // raj.greet();

// // Using Abstract class
// abstract class AbsClassForPerson {
//     protected name: string;
//     protected age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     abstract greet(): void;
// }

// class Person extends AbsClassForPerson {
//     greet(): void {
//         console.log(`Hello from ${this.name}`);
//     }
// }

// const obj = new Person("Anand", 21);
// obj.greet();