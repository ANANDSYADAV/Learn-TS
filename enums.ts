// enum Direction {
//     North, // 0
//     East,
//     West,
//     South, // 3
// }

// console.log(Direction.North); // 0
// console.log(Direction[0]);  // North

// Internal storage
// Reverse Mapping is Available only in numeric enums
// {
//   0: "North",
//   1: "East",
//   2: "South",
//   3: "West",
//   North: 0,
//   East: 1,
//   South: 2,
//   West: 3
// }


// enum Status {
//     Pending = 1,
//     Approved,
//     Rejected,
// }

// console.log(Status.Pending);   // 1
// console.log(Status.Approved); // 2
// console.log(Status.Rejected); // 3
// console.log(Status[1]);   // 1
// console.log(Status[2]); // 2
// console.log(Status[3]); // 3


// String Enums
// Each member must be initialized with a string literal. No auto-increment.
// enum FileType {
//   PDF = "pdf",
//   DOC = "doc",
//   TXT = "txt",
// }

// console.log(FileType.PDF); // 'pdf'
// console.log(FileType["pdf"]);

// 4. Heterogeneous Enums (Mixed Types)
// Not recommended, but allowed.
// Reverse mapping only for numeric part:
// enum Mixed {
//   No = 0,
//   Yes = "YES",
// }

// console.log(Mixed.No);  // 0
// console.log(Mixed.Yes); // 'YES'
// console.log(Mixed[0]); // 'No'


// 5. When are enums replaced with their values?
// Enums are compiled to real JavaScript objects and replaced at compile time (during transpilation from TypeScript to JavaScript). This is different from types or interfaces, which are removed in JS output.
// enum Mode {
//   DARK,
//   LIGHT,
// }
// let currentMode = Mode.DARK;
// console.log(currentMode);

// Compiled JS for above TS:
// "use strict";
// var Mode;
// (function (Mode) {
//     Mode[Mode["DARK"] = 0] = "DARK";
//     Mode[Mode["LIGHT"] = 1] = "LIGHT";
// })(Mode || (Mode = {}));
// let currentMode = Mode.DARK;

//  6. Const Enums (Compile-Time Inlining)
// Use const enum to completely remove enum from compiled JS and inline values.
// No reverse mapping is possible, since no enum object is created.
// const enum Direction {
//   Up,
//   Down,
// }
// let d = Direction.Up;

// Compiled JS for above TS:
// let d = 0; // No enum object is emitted

// Patial Auto increment in case of heterogenous enums
// Strings should be one end and numbers other end
// If nums are on up side, no exclusive initialisation needed
// If nums are on below side, exclusive initialisation needed for atleast first one
// enum Values {
//     x,
//     z,
//     y = "yes",
//     f = "no",
// }
// console.log(Values.z);