/*
  Filename: sophisticated_code.js
  Content: Complex JavaScript code demonstrating advanced functionality and techniques
*/

// Object representing a person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Function to calculate the factorial of a number recursively
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

// Array of people
const people = [
  new Person("John", 25, "Male"),
  new Person("Emily", 30, "Female"),
  new Person("David", 22, "Male")
];

// Higher-order function to filter people by gender
function filterByGender(gender) {
  return function (person) {
    return person.gender === gender;
  }
}

// Filter only male people from the array
const males = people.filter(filterByGender("Male"));

// Calculate factorial of a number
const number = 5;
const fact = factorial(number);

// Print the results
console.log("--- People ---");
people.forEach(person => person.greet());
console.log("--- Male People ---");
males.forEach(person => person.greet());
console.log(`Factorial of ${number} is ${fact}.`);

// Complex algorithm to find the Nth Fibonacci number iteratively
function fibonacci(n) {
  let prev = 0;
  let curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

// Calculate the 10th Fibonacci number
const fibNumber = fibonacci(10);

// Print the result
console.log(`The 10th Fibonacci number is ${fibNumber}.`);

// Advanced feature: Promises
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

console.log("--- Async Processing ---");

// Promise chain to simulate async operations
delay(1000)
  .then(() => {
    console.log("Operation 1 done!");
    return delay(2000);
  })
  .then(() => {
    console.log("Operation 2 done!");
    return delay(3000);
  })
  .then(() => {
    console.log("Operation 3 done!");
  });

// Complex regular expression matching
const regex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z]{2,5})$/;

const validEmails = ["test@test.com", "invalid.email", "john.doe@gmail.com"];

console.log("--- Email Validation ---");
validEmails.forEach(email => {
  const isValid = regex.test(email);
  console.log(`${email} is ${isValid ? "valid" : "invalid"}.`);
});

// And many more sophisticated and complex features...