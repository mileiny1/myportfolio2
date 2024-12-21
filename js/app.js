
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('mortgage-form');
    const mortgageInput = document.getElementById('Mortgage');
    const interestRateInput = document.getElementById('interest-rate');
    const loanTermInput = document.getElementById('loan-term');
    const resultContainer = document.getElementById('result');
    const monthlyPaymentDisplay = document.getElementById('monthly-payment');
    const resetButton = document.querySelector('button[type="Reset"]');

    // Function to calculate monthly mortgage payment
    function calculateMonthlyPayment(principal, annualInterestRate, years) {
        const monthlyInterestRate = annualInterestRate / 100 / 12; // Convert to a decimal monthly rate
        const numberOfPayments = years * 12; // Total number of payments

        // Formula to calculate monthly payment
        const monthlyPayment = (principal * monthlyInterestRate) /
            (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

        return monthlyPayment;
    }

    // Function to handle form submission
    function handleFormSubmit(event) {
        event.preventDefault(); // Prevent form submission

        const principal = parseFloat(mortgageInput.value);
        const annualInterestRate = parseFloat(interestRateInput.value);
        const years = parseInt(loanTermInput.value);

        if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(years)) {
            alert("Please fill in all fields correctly.");
            return;
        }

        // Calculate the monthly payment
        const monthlyPayment = calculateMonthlyPayment(principal, annualInterestRate, years);

        // Update the result display
        monthlyPaymentDisplay.textContent = monthlyPayment.toFixed(2);

        // Show the result container
        resultContainer.classList.remove('hidden');
    }

    // Function to handle reset
    function handleReset() {
        mortgageInput.value = '';
        interestRateInput.value = '';
        loanTermInput.value = '';
        resultContainer.classList.add('hidden');
    }

    // Event listeners
    form.addEventListener('submit', handleFormSubmit);
    resetButton.addEventListener('click', handleReset);
});
