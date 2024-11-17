const tb = document.getElementById("tb");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const res = document.getElementById("res");
const button = document.getElementById("button");

// Random facts about temperature
const facts = [
    "Celsius is named after Anders Celsius, a Swedish astronomer!",
    "Fahrenheit was created by Daniel Gabriel Fahrenheit in 1724.",
    "The Kelvin scale is named after physicist William Thomson, 1st Baron Kelvin.",
    "Rankine is used primarily in engineering systems in the United States.",
    "Absolute zero (0 K) is the lowest possible temperature where nothing could be colder."
];

// Display a random fact
function displayRandomFact() {
    const factElement = document.getElementById("fact");
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.textContent = facts[randomIndex];
}

// Call the function once when the page loads
displayRandomFact();

button.onclick = function () {
    let temp = parseFloat(tb.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    let convertedTemp;
    
    // Check if the entered value is valid
    if (isNaN(temp)) {
        res.textContent = "Please enter a valid number!";
        return;
    }
    
    // Conversion logic
    if (from === to) {
        convertedTemp = temp;
    } else if (from === "C") {
        if (to === "F") convertedTemp = temp * 9 / 5 + 32;
        if (to === "K") convertedTemp = temp + 273.15;
        if (to === "R") convertedTemp = (temp + 273.15) * 9 / 5;
    } else if (from === "F") {
        if (to === "C") convertedTemp = (temp - 32) * 5 / 9;
        if (to === "K") convertedTemp = (temp - 32) * 5 / 9 + 273.15;
        if (to === "R") convertedTemp = temp + 459.67;
    } else if (from === "K") {
        if (to === "C") convertedTemp = temp - 273.15;
        if (to === "F") convertedTemp = (temp - 273.15) * 9 / 5 + 32;
        if (to === "R") convertedTemp = temp * 9 / 5;
    } else if (from === "R") {
        if (to === "C") convertedTemp = (temp - 491.67) * 5 / 9;
        if (to === "F") convertedTemp = temp - 459.67;
        if (to === "K") convertedTemp = temp * 5 / 9;
    }
    
    // Display the result
    res.textContent = `${temp} ${from} = ${convertedTemp.toFixed(2)} ${to}`;
};
