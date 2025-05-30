// // 📂 mathModule.ts(Module File)
// export function add(a: number, b: number): number {
//     return a + b;
// }

// // export const PI = 3.14;

// // 📂 main.ts(Importing the Module)
// import { add, PI } from "./mathModule"; // Importing from module

// console.log(add(5, 3)); // Output: 8
// console.log(PI); // Output: 3.14

// // Requires module setting in tsconfig.json (e.g., "module": "ES6")


// // *******************************************


// // Using a Namespace (Legacy Approach)
// 📂 mathNamespace.ts
namespace MathUtils {
    export function add(a: number, b: number): number {
        return a + b;
    }
    export const PI = 3.14;
}

// Using namespace functions
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.PI); // Output: 3.14
