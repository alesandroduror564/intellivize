// complex_program.js

/*
This code demonstrates a complex program that performs advanced mathematical operations and handles various exceptions.
It includes multiple functions for calculating Fibonacci series, factorial, prime numbers, and finding the GCD.
The program also handles exceptions for invalid inputs and displays the results in a formatted manner.
*/

function calculateFibonacciSeries(n) {
  if (n <= 0) {
    throw new Error("Invalid input: n must be a positive integer.");
  }

  let fibSeries = [0, 1];
  for (let i = 2; i < n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }

  return fibSeries;
}

function calculateFactorial(n) {
  if (n < 0 || !Number.isInteger(n)) {
    throw new Error("Invalid input: n must be a non-negative integer.");
  }

  if (n === 0) {
    return 1;
  }

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

function isPrime(n) {
  if (n < 2 || !Number.isInteger(n)) {
    throw new Error("Invalid input: n must be an integer greater than or equal to 2.");
  }

  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function calculateGCD(a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Invalid input: a and b must be integers.");
  }

  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

try {
  console.log("Calculating Fibonacci series...");
  let fibonacciSeries = calculateFibonacciSeries(10);
  console.log(fibonacciSeries);

  console.log("Calculating factorial...");
  let factorial = calculateFactorial(5);
  console.log(factorial);

  console.log("Checking prime number...");
  let number = 17;
  if (isPrime(number)) {
    console.log(number + " is a prime number.");
  } else {
    console.log(number + " is not a prime number.");
  }

  console.log("Calculating GCD...");
  let num1 = 24,
    num2 = 18;
  let gcd = calculateGCD(num1, num2);
  console.log("GCD of " + num1 + " and " + num2 + " is: " + gcd);
} catch (error) {
  console.log(error.message);
}