//5

function factorial(n) {
  if (n === 0 || n === 1) return 1;

  const numbers = Array.from({ length: n }, (_, i) => i + 1);
  const result = numbers.reduce((acc, curr) => acc * curr, 1);

  return result;
}

// Example usage:
const number = 5;
console.log(`Factorial of ${number} is:`, factorial(number)); // Output: 120




// // Function to calculate factorial using array and reduce
// function factorialWithArray(n) {
//   // Special case: if n is 0 or 1, the factorial is always 1
//   if (n === 0 || n === 1) {
//     return {
//       numbers: [1],       // Just a single number in the array
//       factorial: 1        // Factorial is 1
//     };
//   }

//   // Create an array like [1, 2, 3, ..., n]
//   const numbers = Array.from({ length: n }, (_, i) => i + 1);

//   // Use reduce to multiply all elements in the array
//   const factorial = numbers.reduce((acc, curr) => acc * curr, 1);

//   // Return both the array and the factorial value
//   return {
//     numbers: numbers,
//     factorial: factorial
//   };
// }

// // Ask user to enter a number (will show a pop-up in browser)
// const userInput = prompt("Enter a number to calculate its factorial:");

// // Convert the input from text to a number
// const number = parseInt(userInput);

// // Check if the input is a number and not negative
// if (!isNaN(number) && number >= 0) {
//   // Call the function to calculate factorial
//   const result = factorialWithArray(number);

//   // Print array and factorial to console
//   console.log(`Array used:`, result.numbers); // Like: [1, 2, 3, 4, 5]
//   console.log(`Factorial of ${number} is:`, result.factorial); // Like: 120

//   // Also show it in a pop-up box
//   alert(`Factorial of ${number} is ${result.factorial}\nArray used: ${result.numbers.join(", ")}`);
// } else {
//   // If input is not valid, show an error
//   alert("Please enter a valid non-negative integer.");
// }

