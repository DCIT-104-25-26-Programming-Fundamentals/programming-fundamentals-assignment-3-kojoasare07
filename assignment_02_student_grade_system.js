// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 2
// =============================================================================
//
// TASK: Student Grade System
//
// Write a JavaScript program that reads a student's score and outputs the
// corresponding letter grade based on the scale below.
//
// Grading Scale:
//   Score 80 – 100  →  Grade A
//   Score 70 – 79   →  Grade B
//   Score 60 – 69   →  Grade C
//   Score 50 – 59   →  Grade D
//   Score below 50  →  Grade F
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_02_student_grade_system.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLES
// -----------------------------------------------------------------------------
//
//   Enter student score (0-100): 85
//   Grade: A
//
//   Enter student score (0-100): 73
//   Grade: B
//
//   Enter student score (0-100): 45
//   Grade: F
//
//   Enter student score (0-100): 110
//   Error: Score must be between 0 and 100.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST use functions (see scaffold below).
// - Validate the score inside getGrade(). If it is out of range, return null
//   and let main() print the error message.
// - Use if / else if / else to determine the grade.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


import java.util.Scanner;

public class Main {

    // Validates range and determines letter grade
    public static String getGrade(int mark) {
        // Validate the range first
        if (mark < 0 || mark > 100) {
            return null; // Java equivalent of Python's None
        }
        // Determine the letter grade
        if (mark >= 80) {
            return "A";
        } else if (mark >= 70) {
            return "B";
        } else if (mark >= 60) {
            return "C";
        } else if (mark >= 50) {
            return "D";
        } else {
            return "F";
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter student score (0-100): ");
        if (scanner.hasNextInt()) {
            int studentMark = scanner.nextInt();
            String letter = getGrade(studentMark);

            if (letter == null) {
                System.out.println("Error: Score must be between 0 and 100.");
            } else {
                System.out.println("Grade: " + letter);
            }
        } else {
            System.out.println("Error: Please enter a valid integer.");
        }

        scanner.close();
    }
}
