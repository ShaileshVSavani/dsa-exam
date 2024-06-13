

const principal = document.querySelector('#load-amount-input');
const interest = document.querySelector('#interest-rate-input');
const tenure = document.querySelector('#months-to-pay-input');
const calculate = document.querySelector('#calculate');
const emi = document.querySelector('#emi');

function validateInputs() {
    if (principal.value === '' || interest.value === '' || tenure.value === '') {
        alert('Please enter all the values');
        return false;
    }
    
    if (isNaN(principal.value) || principal.value <= 0) {
        alert('Please enter a valid positive number for the principal amount');
        return false;
    }

    if (isNaN(interest.value) || interest.value <= 0) {
        alert('Please enter a valid positive number for the interest rate');
        return false;
    }

    if (isNaN(tenure.value) || tenure.value <= 0) {
        alert('Please enter a valid positive number for the tenure');
        return false;
    }

    return true;
}

function calculateEMI() {
    if (validateInputs()) {
        const p = parseFloat(principal.value);
        const r = parseFloat(interest.value) / 1200;
        const n = parseInt(tenure.value);
        const emiValue = (p * r * (1 + r) ** n) / ((1 + r) ** n - 1);
        // emi.textContent = emiValue.toFixed(2);
        emi.innerHTML = emiValue.toFixed(2);
    }
}


calculate.addEventListener('click', calculateEMI);

