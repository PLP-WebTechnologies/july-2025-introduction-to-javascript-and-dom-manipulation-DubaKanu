// Part 1: Variables & Conditionals
// -----------------------------
let userName = prompt("What is your name?");
let age = Number(prompt("How old are you?"));

if (age >= 18) {
  console.log(`${userName}, you are an adult.`);
  document.getElementById('output').textContent = `Welcome, ${userName}! You are an adult.`;
} else {
  console.log(`${userName}, you are a minor.`);
  document.getElementById('output').textContent = `Hello, ${userName}! You are a minor.`;
}

// -----------------------------
// Part 2: Functions
// -----------------------------
// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + price * taxRate;
}

// Function 2: Format a greeting
function formatGreeting(name) {
  return `Hello, ${name}! Have a great day!`;
}

// Example usage:
console.log(formatGreeting(userName));
console.log("Total: $" + calculateTotal(100, 0.15));

// -----------------------------
// Part 3: Loops
// -----------------------------
// Loop 1: For loop to display numbers 1-5
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// Loop 2: While loop for countdown
document.getElementById('countdownBtn').addEventListener('click', function() {
  let count = 5;
  let countdown = setInterval(function() {
    document.getElementById('output').textContent = `Countdown: ${count}`;
    count--;
    if (count < 0) {
      clearInterval(countdown);
      document.getElementById('output').textContent = "Countdown finished!";
    }
  }, 1000);
});

// -----------------------------
// Part 4: DOM Manipulation
// -----------------------------
// 1. Toggle message on button click
let showMessage = false;
document.getElementById('toggleBtn').addEventListener('click', function() {
  showMessage = !showMessage;
  document.getElementById('output').textContent = showMessage ? "You toggled the message!" : "";
});

// 2. Dynamically create a list
const items = ["Apple", "Banana", "Cherry"];
const list = document.getElementById('list');
items.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  list.appendChild(li);
});

// 3. Change list item color on click
list.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('highlight');
  }
});