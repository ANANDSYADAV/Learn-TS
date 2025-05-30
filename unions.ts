// // // 1️⃣ Basic Union Type

// function printId(id: string | number) {
//     console.log(`ID: ${id}`);
// }

// printId(101);
// printId("A102");
// // printId(true); 



// // // 2️⃣ Function with Union Type
// // function print(id: string | number) {
// //     console.log(`ID: ${id}`);
// // }

// // print(101);
// // print("A102");
// // // printId(true); 

// // // 3️⃣ Union Type in Objects
// type User = {
//     id: number;
//     name: string;
//     role: "admin" | "user";
// };

// const user1: User = { id: 1, name: "Alice", role: "admin" };
// const user2: User = { id: 2, name: "Bob", role: "user" };
// const user3: User = { id: 3, name: "Charlie", role: "guest" };

// // // 4️⃣ Union Type in Function Return Type
// function getStatus(code: number): "success" | "error" | "pending" {
//     if (code === 200) return "success";
//     if (code === 400) return "error";
//     return "pending";
// }

// console.log(getStatus(200));
// console.log(getStatus(400));
// console.log(getStatus(500));


// // 5️⃣ Union of Interfaces
interface Dog {
    breed: string;
    bark(): void;
}

interface Cat {
    breed: string;
    meow(): void;
}

type Pet = Dog | Cat;

function makeSound(pet: Pet) {
    if ("bark" in pet) {
        pet.bark();
    } else {
        pet.meow();
    }
}

const myDog: Dog = { breed: "Labrador", bark: () => console.log("Woof!") };
const myCat: Pet = { breed: "Siamese", meow: () => console.log("Meow!") };

makeSound(myDog); // Output: Woof!
makeSound(myCat); // Output: Meow!