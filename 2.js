// Input test: 1 20 13 14 50 16 23 12 9 100
// Output: 20 14 50 16 12 100

// Используется модуль readline для чтения ввода из консоли
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Введите строку с числами, разделенными пробелом: ", (input) => {
    const evenNumbers = findEvenNumbers(input);
    console.log("Четные числа: " + evenNumbers);
    rl.close();
});

function findEvenNumbers(input) {
    var numbers = input.split(" ");
    var evenNumbers = [];

    numbers.forEach(function(number) {
        if (parseInt(number) % 2 === 0) {
            evenNumbers.push(number);
        }
    });

    return evenNumbers.join(" ");
}
