function checkIfPrime(number) {
    let prime = true;
    for (let i = 2; i < number - 2; i++) {
        if (number % i === 0) {
            let prime = false;
            break;
        } else {
            continue;
        };
    };

    if (prime) {
        return "Prime"
    } else if (!prime) {
        return "Composite"
    }
};

const prompt = require("prompt-sync")();
const userInput = prompt("Enter a number: ");

if (userInput <= 0) {
    console.log(userInput + "is not a positive number.")
} else if (userInput === 1) {
    console.log("1 is nether prime nor composite.")
} if (checkIfPrime(userInput) === true) {
    console.log(userInput + " is a Prime Number");
} else {
    console.log(userInput + " is a Composite Number")
}
