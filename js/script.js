// JavaScript Document
	// Function to calculate MPG
function calculateMPG() {
    // Get values from input fields
    const miles = parseFloat(document.getElementById("miles").value);
    const gallons = parseFloat(document.getElementById("gallons").value);

    // Check if inputs are valid
    if (isNaN(miles) || isNaN(gallons) || miles <= 0 || gallons <= 0) {
        document.getElementById("result").innerText = "Please enter valid numbers for miles and gallons.";
        return;
    }

    // Calculate MPG
    const mpg = miles / gallons;

    // Display the result
    document.getElementById("result").innerText = `Miles Per Gallon (MPG): ${mpg.toFixed(2)}`;
}


