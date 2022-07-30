const form = document.getElementById('form');
const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const eMail = document.getElementById('email');
const nUmber = document.getElementById('number');




form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');


    errorDisplay.innertext = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}



const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');



    errorDisplay.innertext = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};


const isValidEmail = eMail => {

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(eMail).toLowerCase());
}


const validateInputs = () => {

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const eMailValue = eMail.value.trim();
    const nUmberValue = nUmber.value.trim();




    if (firstNameValue === '') {
        setError(firstName, 'First name is required');
    } else {
        setSuccess(firstName);
    }


    if (lastNameValue === '') {
        setError(lastName, 'Last name is required');
    } else {
        setSuccess(lastName);
    }


    if (eMailValue === '') {
        setError(eMail, 'Email is required');
    } else if (!isValidEmail(eMailValue)) {
        setError(eMail, 'Please provide a valid email address');
    } else {
        setSuccess(eMail);
    }

};


