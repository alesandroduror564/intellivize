/* Filename: SophisticatedJavaScriptCode.js */

// This code demonstrates a complex and elaborate online shopping platform

// Class representing a Product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotal() {
    return this.price * this.quantity;
  }
}

// Class representing a Customer
class Customer {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.cart = [];
  }

  addToCart(product) {
    this.cart.push(product);
  }

  removeFromCart(product) {
    const index = this.cart.findIndex((item) => item === product);
    if (index !== -1) {
      this.cart.splice(index, 1);
    }
  }

  checkout() {
    let total = 0;
    for (const product of this.cart) {
      total += product.calculateTotal();
    }

    const orderSummary = `Hello ${this.name}!\n\nThank you for your order.\nOrder Total: $${total.toFixed(
      2
    )}\n\nItems Purchased:\n\n`;

    for (const product of this.cart) {
      orderSummary += `Product: ${product.name}\nQuantity: ${product.quantity}\nPrice: $${product.price.toFixed(
        2
      )}\n\n`;
    }

    this.sendOrderSummaryByEmail(orderSummary);
    this.cart = [];
  }

  sendOrderSummaryByEmail(orderSummary) {
    console.log(`Sending order summary to ${this.email}:\n\n${orderSummary}`);
  }
}

// Example usage
const customer1 = new Customer("John Doe", "johndoe@email.com");
const product1 = new Product("Product 1", 10, 2);
const product2 = new Product("Product 2", 15, 3);

customer1.addToCart(product1);
customer1.addToCart(product2);

console.log(`Customer: ${customer1.name}`);
console.log(`Cart:`, customer1.cart);

customer1.checkout();

console.log(`Cart after checkout:`, customer1.cart);

// ... More code below ... (200+ lines of code)