/* filename: complexCode.js */
// This code creates a complex data structure and performs various operations on it

// Define a class to represent a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.isAdult = this.age >= 18;
  }

  toString() {
    return `${this.name} is ${this.age} years old.`;
  }
}

// Define a class to represent a book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  toString() {
    return `${this.title} by ${this.author}, published in ${this.year}.`;
  }
}

// Define a class to represent a library
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.members = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  addMember(member) {
    this.members.push(member);
  }

  removeMember(member) {
    const index = this.members.indexOf(member);
    if (index !== -1) {
      this.members.splice(index, 1);
    }
  }

  toString() {
    let result = `Library: ${this.name}\n`;

    result += "\nBooks:\n";
    for (let book of this.books) {
      result += `- ${book.toString()}\n`;
    }

    result += "\nMembers:\n";
    for (let member of this.members) {
      result += `- ${member.toString()}\n`;
    }

    return result;
  }
}

// Create a library
const library = new Library("My Library");

// Create some books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);

// Create some persons
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 17);
const person3 = new Person("Eve", 32);

// Add books and persons to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addMember(person1);
library.addMember(person2);
library.addMember(person3);

console.log(library.toString());

// Remove a book and a member from the library
library.removeBook(book2);
library.removeMember(person2);

console.log(library.toString());

// Output:
/*
Library: My Library

Books:
- The Great Gatsby by F. Scott Fitzgerald, published in 1925.
- To Kill a Mockingbird by Harper Lee, published in 1960.
- 1984 by George Orwell, published in 1949.

Members:
- Alice is 25 years old.
- Bob is 17 years old.
- Eve is 32 years old.

Library: My Library

Books:
- The Great Gatsby by F. Scott Fitzgerald, published in 1925.
- 1984 by George Orwell, published in 1949.

Members:
- Alice is 25 years old.
- Eve is 32 years old.
*/
