// Set Up Global Constant
const FACTORIALS = [1,1,2,6,24,120,720,5040,40320,362880];

// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = `Solution is ${digitFactorial().sum} <br>`;
    // Display Solution in the Browser
    document.getElementById("solution").innerHTML = txt;
}

/*
    Function to return an object in the form of
    sum: number,
    numbers: [number1,number2]

    sum is the sum of all numbers whose sum of all the factorials of
    all digits add up to the number itself.

*/
function digitFactorial() {
    let result = {
        sum: 0,
        numbers: []
    }
    let max = 2177282;
    for (let i=10;i<=max;i++) {
        let factorialSum = i.toString().split("").reduce((sum,digit) => sum + FACTORIALS[digit], 0);
        if (factorialSum === i) {
            result['sum'] += i;
            result['numbers'].push(i);
        }
    }

    return result;
}

// Function to Hide Solution
function hideSolution() {
    let txt = "";
    document.getElementById("solution").innerHTML = txt;
}