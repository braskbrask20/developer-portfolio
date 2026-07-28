console.log("Hello, World");
console.log("stacks");
console.log("32");
console.log("software engineer");
console.log("java script");
let age = 10;
if (age >= 10) {
    console.log("Eligible");
} else {
    console.log("Ineligible");
}

// Welcome Function
function welcome() {
console.log("Welcome to my portfolio!");
}

welcome();


// Greeting Function
function greet(name) {
console.log("Hello, " + name);
}

greet("Stacks");


// Addition Function
function add(num1, num2) {
return num1 + num2;
}

console.log(add(5, 3));


// Age Checker
function checkAge(age) {

if (age >= 18) {
return "Adult";
} else {
return "Minor";
}

}

console.log(checkAge(20));
console.log(checkAge(15));

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

event.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;

if (name === "" || email === "" || message === "") {

document.getElementById("output").textContent =
"Please fill in all fields.";

} else {

document.getElementById("output").textContent =
"Thank you, " + name + "! Your message has been received.";

}

});