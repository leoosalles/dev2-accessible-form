const inputFields = document.querySelectorAll('.input-field');
const submitBtn = document.getElementById('btn');

function getWarningElement(input) {
    const warningId = input.getAttribute('aria-describedby');
    return document.getElementById(warningId);
}

function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateFields() {
    let hasEmptField = false;

    inputFields.forEach((input) => {
        const warning = getWarningElement(input);
        input.classList.remove('valid', 'invalid');

        const value = input.value.trim();
        const type = input.getAttribute('type');

        let isValid = value !== '';

        if(type === 'email') isValid = isValid && isEmailValid(value);

        if (!isValid) {
            input.classList.add('invalid');
            warning.classList.add('show');
            input.setAttribute('aria-invalid', 'true');
            hasEmptField = true;
        } else {
            input.classList.add('valid');
            warning.classList.remove('show')
            input.removeAttribute('aria-invalid');
        };
    });

    submitBtn.disabled = hasEmptField;
};

function clearFields() {
    inputFields.forEach((input) => {
        input.value = '';
        input.classList.remove('valid', 'invalid');
        input.removeAttribute('aria-invalid');
        getWarningElement(input).classList.remove('show');
    });
};

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    validateFields();

    if(!submitBtn.disabled) {
        alert("Informações enviadas com sucesso!");
        clearFields();
    };
});

inputFields.forEach((input) => {
    input.addEventListener('input', validateFields);
});