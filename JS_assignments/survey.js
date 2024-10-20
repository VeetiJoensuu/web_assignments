document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const errorMessage = document.getElementById('error-message');

    let errorMessages = [];

    if (name === '') {
        errorMessages.push('Name is required');
    }

    if (email === '') {
        errorMessages.push('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errorMessages.push('Email is not valid');
    }

    if (errorMessages.length > 0) {
        errorMessage.innerHTML = errorMessages.join('<br>');
    } else {
        errorMessage.innerHTML = '';
        alert('Form submitted successfully!');
    }
});
