// filename: complexAlgorithm.js
// Description: This code implements a complex algorithm to find the n-th Fibonacci number efficiently.

/**
 * @function fibonacci
 * @description Function to calculate the n-th Fibonacci number
 * @param {number} n - The number indicating the position of the Fibonacci number
 * @returns {number} - The n-th Fibonacci number
 */
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let fibArray = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
  }

  return fibArray[n];
}

/**
 * @function isPrime
 * @description Function to check if a number is prime
 * @param {number} num - The number to check for primality
 * @returns {boolean} - True if num is prime, False otherwise
 */
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

/**
 * @function complexAlgorithm
 * @description A complex algorithm utilizing the Fibonacci sequence and prime numbers
 * @param {number} n - The input number
 * @returns {number} - The result of the complex algorithm
 */
function complexAlgorithm(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime(fibonacci(i))) {
      result += i;
    } else {
      result -= i;
    }
  }

  return result;
}

// Example usage
const input = 10;
const result = complexAlgorithm(input);
console.log(`The result of the complex algorithm for input ${input} is: ${result}`);