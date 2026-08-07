// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

// Arithmetic Functions
function add(numbers) {
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result;
}

function subtract(numbers) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        result -= numbers[i];
    }

    return result;
}

function multiply(numbers) {
    let result = 1;

    for (let i = 0; i < numbers.length; i++) {
        result *= numbers[i];
    }

    return result;
}

function divide(numbers) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] === 0) {
            return null;
        }

        result /= numbers[i];
    }

    return result;
}

function modulus(numbers) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] === 0) {
            return null;
        }

        result %= numbers[i];
    }

    return result;
}

function exponentiate(numbers) {
    let result = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        result **= numbers[i];
    }

    return result;
}

// Function to get multiple numbers
function getNumbers() {

    let count;

    while (true) {

        let input = readlineSync.question(
            "How many numbers do you want to enter? "
        );

        if (Number.isInteger(Number(input)) && Number(input) >= 2) {
            count = Number(input);
            break;
        }

        console.log(
            "Error: Please enter an integer greater than or equal to 2."
        );
    }

    let numbers = [];

    for (let i = 0; i < count; i++) {

        while (true) {

            let input = readlineSync.question(
                `Enter number ${i + 1}: `
            );

            if (!isNaN(input) && input.trim() !== "") {
                numbers.push(Number(input));
                break;
            }

            console.log("Error: Please enter a valid number.");
        }
    }

    return numbers;
}

// Main Function
function main() {

    let running = true;

    while (running) {

        console.log("\n============================");
        console.log("     SIMPLE CALCULATOR");
        console.log("============================");
        console.log("1. Addition");
        console.log("2. Subtraction");
        console.log("3. Multiplication");
        console.log("4. Division");
        console.log("5. Modulus");
        console.log("6. Exponentiation");
        console.log("7. Quit");

        let choice = readlineSync.question(
            "Select an operation (1-7): "
        );
