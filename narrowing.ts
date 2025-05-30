// 1️⃣ Type Narrowing Helps TypeScript Infer More Specific Types
// function printLength(value: string | string[]) {
//     if (typeof value === "string") {  
//         console.log(value.length);  // Treated as a string
//     } else {
//         console.log(value.length);  // Treated as an array
//     }
// }

// 2️⃣ TypeScript Uses typeof, instanceof, and Equality Checks for Narrowing
// function process(value: string | number) {
//     if (typeof value === "number") {
//         console.log(value.toFixed(2));  // ✅ Treated as a number
//     } else {
//         console.log(value.toUpperCase());  // ✅ Treated as a string
//     }
// }


// 3️⃣ Discriminated Unions Use a Common Property for Narrowing
type Circle = { kind: "circle", radius: number };
type Square = { kind: "square", side: number };

function getArea(shape: Circle | Square) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;  // ✅ TypeScript knows it's a Circle
    }
    return shape.side ** 2;  // ✅ Treated as a Square
}
const gola: Circle = {
    kind: "circle",
    radius: 3,
}
console.log(getArea(gola));