// Function to add 7 to a number
function add7(number) {
    return number + 7;
}

// Test the add7 function
console.log("Testing add7:");
console.log(add7(5)); // Should output 12
console.log(add7(-3)); // Should output 4
console.log(add7(0)); // Should output 7
console.log(add7(10)); // Should output 17

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Test the multiply function
console.log("\nTesting multiply:");
console.log(multiply(5, 3)); // Should output 15
console.log(multiply(-2, 4)); // Should output -8
console.log(multiply(0, 100)); // Should output 0
console.log(multiply(7, 0)); // Should output 0

// Function to capitalize the first letter of a string
function capitalize(inputString) {
    // Check if the inputString is not empty
    if (inputString.length > 0) {
        // Convert the first character to uppercase and concatenate the rest of the string
        return inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase();
    } else {
        // If the string is empty, return it as is
        return inputString;
    }
}

// Test the capitalize function
console.log("\nTesting capitalize:");
console.log(capitalize("hello")); // Should output "Hello"
console.log(capitalize("WORLD")); // Should output "World"
console.log(capitalize("RaNdOmCaSe")); // Should output "Randomcase"
console.log(capitalize("")); // Should output an empty string

// Function to get the last letter of a string
function lastLetter(inputString) {
    // Check if the inputString is not empty
    if (inputString.length > 0) {
        // Return the last character of the string
        return inputString.charAt(inputString.length - 1);
    } else {
        // If the string is empty, return an empty string
        return "";
    }
}

// Test the lastLetter function
console.log("\nTesting lastLetter:");
console.log(lastLetter("abcd")); // Should output "d"
console.log(lastLetter("xyz")); // Should output "z"
console.log(lastLetter("12345")); // Should output "5"
console.log(lastLetter("")); // Should output an empty string
