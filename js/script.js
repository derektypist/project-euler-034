// Set Up Global Constant
const FACTORIALS = [1,1,2,6,24,120,720,5040,40320,362880];

// Function to Show Solution
function showSolution() {
    // Set Up Variable
    let txt = `Solution is ${digitFactorial()} <br>`;
    // Display Solution in the Browser
    document.getElementById("solution").innerHTML = txt;
}