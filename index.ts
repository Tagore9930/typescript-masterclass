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


// Your First TypeScript Program

// @ts-ignore
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(2, 3));
// console.log(addNumbers("text", 3));