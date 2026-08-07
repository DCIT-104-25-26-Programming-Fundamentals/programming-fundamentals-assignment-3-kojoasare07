// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    // Build a list of the first 'count' Fibonacci numbers using a loop
    public static List<Long> generateFibonacci(int count) {
        List<Long> result = new ArrayList<>();
        long prev = 0;
        long curr = 1;

        for (int i = 0; i < count; i++) {
            result.add(prev);
            long temp = prev + curr; // advance: new prev is old curr, new curr is their sum
            prev = curr;
            curr = temp;
        }
        return result;
    }

    // Check if a number is part of the Fibonacci sequence
    public static boolean isFibonacci(long target) {
        // Negative numbers can't be Fibonacci numbers
        if (target < 0) {
            return false;
        }

        // Generate Fibonacci numbers until we reach or pass the target
        long prev = 0;
        long curr = 1;

        while (prev < target) {
            long temp = prev + curr;
            prev = curr;
            curr = temp;
        }

        // If we landed exactly on the target, it's a Fibonacci number
        return prev == target;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // -------- PART A: Print first N terms --------
        System.out.print("How many terms? ");
        if (scanner.hasNextInt()) {
            int count = scanner.nextInt();

            if (count <= 0) {
                System.out.println("Error: N must be a positive integer.");
            } else {
                List<Long> result = generateFibonacci(count);

                // Print the sequence space-separated
                System.out.print("Fibonacci sequence: ");
                for (int i = 0; i < result.size(); i++) {
                    System.out.print(result.get(i) + (i < result.size() - 1 ? " " : ""));
                }
                System.out.println();
            }
        } else {
            System.out.println("Error: Invalid input.");
            scanner.close();
            return;
        }

        // -------- PART B: Check membership --------
        System.out.print("\nEnter a number to check: ");
        if (scanner.hasNextLong()) {
            long target = scanner.nextLong();

            if (isFibonacci(target)) {
                System.out.println(target + " is a Fibonacci number.");
            } else {
                System.out.println(target + " is NOT a Fibonacci number.");
            }
        } else {
            System.out.println("Error: Invalid input.");
        }

        scanner.close();
    }
}
