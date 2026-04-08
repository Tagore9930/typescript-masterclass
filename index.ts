// Setting Up TypeScript Compiler
// console.log("Hello, World!");

/* ////////////////////////////////////
// How TypeScript Helps You Catch Errors
const students = [
    {
        name: "Bharath",
        score: 70,
    },
    {
        name: "Rohit",
        score: 90,
    },
    {
        name: "Tagore",
        score: 50,
    }
];

for (const student of students) {
    console.log("Name:", student.name);
    console.log("Score:", student.score);
    // console.log("Score:", student.grade);
}
*/


/* //////////////////////////////////////
// Your First TypeScript Program

// @ts-ignore
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(2, 3));
// console.log(addNumbers("text", 3));
*/

// string, number and boolean

/** String types */

var firstName: string = "Tagore";
firstName = 1;
let automobile = "BMW";
const city = "India";
let students = 32;
let studentAsString: string = students.toString();


/** Number types */
var age = 20;
let year = 2004;
const numberOfMembers = 61;
numberOfMembers = 128;
let stringToNumber: number = parseInt('1998');

/** Booleans */

let isStudent: boolean = false;
const alwaysStudent = true;
let minimumAge: boolean = age >= 6 ? true : false;