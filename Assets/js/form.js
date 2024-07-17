const submit = document.querySelector('#submit');
const disabledSwitch = document.querySelector('.class')

function submitForm(event) {
    event.preventDefault();
    // fetch sends user form data from front-end to back-end into database
    // should be post method
    // get form data after form submission
    // start with '/api'
}

submit.addEventListener('click', submitForm)
