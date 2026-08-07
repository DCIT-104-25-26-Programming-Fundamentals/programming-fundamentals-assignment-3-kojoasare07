// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

import java.util.Scanner;

public class Main {

    // Read a matrix row by row; each row is space-separated values on one line
    public static int[][] readMatrix(Scanner scanner, int numRows, int numCols) {
        int[][] grid = new int[numRows][numCols];
        for (int r = 0; r < numRows; r++) {
            System.out.print("Enter row " + (r + 1) + ": ");
            for (int c = 0; c < numCols; c++) {
                grid[r][c] = scanner.nextInt();
            }
        }
        return grid;
    }

    // Find the widest number so every column lines up neatly and print formatted
    public static void displayMatrix(int[][] grid) {
        int pad = 0;
        for (int[] line : grid) {
            for (int entry : line) {
                pad = Math.max(pad, String.valueOf(entry).length());
            }
        }

        // Print each row with every value right-justified to that width
        String formatSpecifier = "%" + pad + "d  ";
        for (int[] line : grid) {
            for (int entry : line) {
                System.out.printf(formatSpecifier, entry);
            }
            System.out.println();
        }
    }

    public static int[][] transpose(int[][] grid) {
        int rCount = grid.length;        // number of rows in the original
        int cCount = grid[0].length;     // number of columns in the original
        
        // Result has swapped dimensions: cCount x rCount
        int[][] output = new int[cCount][rCount];
        for (int c = 0; c < cCount; c++) {
            for (int r = 0; r < rCount; r++) {
                output[c][r] = grid[r][c]; // column c becomes row c
            }
        }
        return output;
    }

    public static int[][] addMatrices(int[][] x, int[][] y) {
        int rCount = x.length;
        int cCount = x[0].length;
        int[][] output = new int[rCount][cCount];
        
        for (int r = 0; r < rCount; r++) {
            for (int c = 0; c < cCount; c++) {
                output[r][c] = x[r][c] + y[r][c]; // element-wise sum
            }
        }
        return output;
    }

    public static int[][] multiplyMatrices(int[][] x, int[][] y) {
        int rowsX = x.length;       // rows in A
        int inner = x[0].length;    // columns in A (= rows in B)
        int colsY = y[0].length;    // columns in B
        
        int[][] output = new int[rowsX][colsY];
        for (int r = 0; r < rowsX; r++) {
            for (int c = 0; c < colsY; c++) {
                int acc = 0;
                for (int k = 0; k < inner; k++) {
                    acc += x[r][k] * y[k][c];
                }
                output[r][c] = acc;
            }
        }
        return output;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // -------- PART A: Transpose --------
        System.out.println("=== Part A: Transpose ===");
        System.out.print("Enter number of rows: ");
        int numRows = scanner.nextInt();
        System.out.print("Enter number of columns: ");
        int numCols = scanner.nextInt();
        int[][] grid = readMatrix(scanner, numRows, numCols);

        System.out.println("\nOriginal Matrix:");
        displayMatrix(grid);
        System.out.println("\nTransposed Matrix:");
        displayMatrix(transpose(grid));

        // -------- PART B: Addition --------
        System.out.println("\n=== Part B: Addition ===");
        System.out.print("Enter number of rows: ");
        numRows = scanner.nextInt();
        System.out.print("Enter number of columns: ");
        numCols = scanner.nextInt();
        
        System.out.println("Matrix A:");
        int[][] x = readMatrix(scanner, numRows, numCols);
        System.out.println("Matrix B:");
        int[][] y = readMatrix(scanner, numRows, numCols);

        System.out.println("\nSum (A + B):");
        displayMatrix(addMatrices(x, y));

        // -------- PART C: Multiplication --------
        System.out.println("\n=== Part C: Multiplication ===");
        System.out.print("Enter rows of A (M): ");
        int m = scanner.nextInt();
        System.out.print("Enter columns of A / rows of B (N): ");
        int n = scanner.nextInt();
        System.out.print("Enter columns of B (P): ");
        int p = scanner.nextInt();

        System.out.printf("Matrix A (%dx%d):\n", m, n);
        x = readMatrix(scanner, m, n);
        System.out.printf("Matrix B (%dx%d):\n", n, p);
        y = readMatrix(scanner, n, p);

        System.out.println("\nProduct (A x B):");
        displayMatrix(multiplyMatrices(x, y));

        scanner.close();
    }
}
