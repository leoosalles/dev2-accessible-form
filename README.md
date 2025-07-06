# ✉️ Interactive and Accessible Contact Form

This project is a responsive and accessible **Contact Form** built with **HTML5**, **CSS3**, and **Vanilla JavaScript**. It was designed to provide an inclusive, visually appealing, and user-friendly interface — ensuring compatibility with screen readers and assisting users with different accessibility needs.

---

## 📌 Features

- Responsive layout (Mobile First)
- Form validation with visual feedback
- Error messages with dynamic feedback for screen readers
- Full screen reader support
- Clean and accessible design

---

## 📂 Project Structure

📁 src/
<br>
┣ 📂 css/
<br>
┃ ┣ 📄 reset.css
<br>
┃ ┗ 📄 style.css
<br>
┣ 📂 images/
<br>
┃ ┗ 🖼️ bg-repeat.jpg
<br>
┣ 📂 js/
<br>
┃ ┗ 📄 index.js
<br>
📄 index.html

---

## ♿ Accessibility Features

In this section, I will highlight the key accessibility features applied in this project, along with explanations of why and how each one improves accessibility.

### ✅ `role="region"` + `aria-label="Contact information"`
- **Element:** `<section class="text-content" role="region" aria-label="Contact information">`
- **Purpose:** Indicates that the section contains significant content and provides a clear label for screen readers to announce the section's purpose.
- **Benefit:** Helps users with screen readers to understand and navigate different sections of the page.<br><br>

### ✅ `aria-describedby`
- **Element:** `<input aria-descriedby="name-warning">` and `<span id="name-warning">`
- **Purpose:** Links input fields with their respective validation messages, ensuring screen readers announce errors when the field is invalid.
- **Benefit:** Improves accessibility by informing screen reader users about validation messages for each form field.<br><br>

### ✅ `aria-required="true"`
- **Element:** `<input>` and `<textarea>`
- **Purpose:** Indicates that the field is required and must be filled in before form submission.
- **Benefit:** Ensures that users with disabilities are aware of which fields are mandatory, improving accessibility.<br><br>

### ✅ `role="alert"` + `aria-live="assertive"`
- **Element:** `<span class="popover-message" role="alert" aria-live="assertive">`
- **Purpose:** Announces validation error messages dynamically when the user submits a form without filling in required fields, using `aria-live="assertive"` to alert screen readers immediately.
- **Benefit:** Ensures that screen readers announce error messages promptly when users fail to fill out required fields.<br><br>

### ✅ `alt` Attributes on Images
- **Example:**
```html
<img src="..." alt="Contact form illustration">
```
- **Benefit:** Provides descriptive alternative text, making images accessible to users who rely on screen readers.<br><br>

### ✅ `.sr-only`
- **Element:** `<legend class="sr-only">`
- **Purpose:** Hides the element visually while keeping it accessible to screen readers. The form's `<legend>` is hidden using `.sr-only`, as it provides a description of the form for screen readers, improving accessibility without affecting the visual layout.
- **Benefit:** Improves accessibility without affecting the visual layout of the page.

```css
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```
<br>

### ✅ Error Handling and Validation Feedback
- **Visual Feedback:** The form highlights invalid fields with a red border (`.invalid`) and displays an error message in a popover (`.popover-message`) when the field is empty or contains an invalid value. This is important for users with visual impairments or those who rely on screen magnifiers.
- **Accessible Error Messages:** The error messages are displayed dynamically, and they are announced by screen readers when the user interacts with invalid fields.
- **Valid Fields:** When a field is correctly filled, it is visually highlighted with a green border (`.valid`), and its error message disappears.<br><br>

### ✅ Form Submission
- The form submission button is disabled if there are any invalid or empty fields (`#btn:disabled`), ensuring users can only submit a valid form.
- After successful submission, a success message is announced using JavaScript to inform the user that the form was sent successfully.

---

## 📱 Responsive Design

The layout adapts based on screen width:

| Screen Width | Main Adjustments                                        |
| ------------ | ------------------------------------------------------- |
| `< 768px`    | Centered form with inputs stacking vertically           |
| `≥ 768px`    | Form inputs are aligned horizontally for wider screens  |
| `≥ 992px`    | Form fields and description appear side by side         |

---

## Explanation of JavaScript Code

### 1. Variables and Elements Selection
```js
const inputFields = document.querySelectorAll('.input-field');
const submitBtn = document.getElementById('btn');
```
**Explanation:** You are selecting all input fields (`.input-field`) and the submit button (`#btn`) to manipulate them later in the code.<br><br>

### 2. Get Warning Message Element Function
```js
function getWarningElement(input) {
    const warningId = input.getAttribute('aria-describedby');
    return document.getElementById(warningId);
}
```
#### `function getWarningElement(input) {`
- **Purpose:** This function takes an input element as an argument and returns the associated warning message element based on the `aria-describedby` attribute.
- **Explanation:** This function is used to retrieve the error message or warning associated with a specific input field. It's particularly useful when you need to display or hide validation messages dynamically.

#### `const warningId = input.getAttribute('aria-describedby');`
- **Purpose:** This retrieves the value of the `aria-describedby` attribute from the input element.
- **Explanation:** The `aria-describedby` attribute points to the ID of an element (usually a `<span>`) that contains a description or error message related to the input. This line extracts that ID value.

#### `return document.getElementById(warningId);`
- **Purpose:** This returns the element whose ID matches the value stored in the `warningId`.
- **Explanation:** Using `document.getElementById(warningId)`, the function finds the warning element (the error message) and returns it. This allows you to manipulate or display the warning message based on the current state of the input field.<br><br>

### 3. Email Validation Function
```js
function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
```
#### `function isEmailValid(email) {`
- **Purpose:** This function checks if the provided email address matches the standard email format using a regular expression.
- **Explanation:** It's used to validate email fields by checking if the provided email is in a proper format (e.g., `user@example.com`).

#### `const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;`
- **Purpose:** This defines a regular expression (`regex`) to match a valid email format.
- **Explanation:** The regular expression breaks down as follows:
  - `^[^\s@]+`: Ensures the email starts with one or more characters that are not spaces or the `@` symbol.
  - `@`: The `@` symbol, separating the local part from the domain part of the email.
  - `[^\s@]+`: Ensures the domain name contains one or more characters that are not spaces or `@`.
  - `\.`: A literal dot (`.`), separating the domain name from the top-level domain (TLD).
  - `[^\s@]+$`: Ensures the TLD contains one or more characters that are not spaces or `@`.

This regular expression checks for a general valid email format but may not be 100% exhaustive for all edge cases of email addresses.

#### `return regex.test(email);`
- **Purpose:** This checks if the provided email matches the regular expression (`regex`).
- **Explanation:** The `test()` method checks whether the email string matches the pattern defined in regex. If it does, the method returns `true` (meaning the email is valid); otherwise, it returns `false`.<br><br>

### 4. Field Validation Function
```js
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
```
#### `function validateFields() {`
- **Purpose:** This is the declaration of the `validateFields` function, which is responsible for validating all input fields in the form. It checks each field for any errors and dynamically updates the user interface (e.g., adding visual feedback for errors and updating the state of the submit button).

#### `let hasEmptField = false;`
- **Purpose:** A flag (`hasEmptField`) is created to track whether there are any empty or invalid fields in the form.
- **Explanation:** If any field is found to be empty or invalid, this variable will be set to `true`, which will disable the submit button to prevent form submission until all fields are valid.

#### `inputFields.forEach((input) => {`
- **Purpose:** The function `forEach` is used to iterate over all form input fields stored in the `inputFields` collection (which is assumed to be a NodeList of all the `input` and `textarea` elements).
- **Explanation:** For each input field (`input`), the following validation checks will be performed.

#### `const warning = getWarningElement(input);`
- **Purpose:** This retrieves the associated warning element (which shows validation messages) for the current input field.
- **Explanation:** The `getWarningElement(input)` function is called with the current input field as an argument. This function finds the corresponding error message associated with that field, ensuring that error messages are shown when necessary.

#### `input.classList.remove('valid', 'invalid');`
- **Purpose:** This line removes any previous `valid` or `invalid` classes from the input field.
- **Explanation:** If the input field was previously marked as valid or invalid, those visual states (such as border colors) are reset, as the field will be re-evaluated for validation.

#### `const value = input.value.trim();`
- **Purpose:** The value entered in the input field is retrieved and any leading/trailing spaces are removed using `trim()`.
- **Explanation:** This ensures that empty spaces at the beginning or end of the input do not affect the validation process.

#### `const type = input.getAttribute('type');`
- **Purpose:** This retrieves the type of the input field (e.g., `text`, `email`, `tel`).
- **Explanation:** Knowing the field type is important because different types of fields may require different validation rules (e.g., email validation).

#### `let isValid = value !== '';`
- **Purpose:** This checks if the input field is empty.
- **Explanation:** If the field has a non-empty value (i.e., the user has typed something), `isValid` will be `true`; otherwise, it will be `false`. This is the basic check for required fields.

#### `if (type === 'email') isValid = isValid && isEmailValid(value);`
- **Purpose:** If the input type is `email`, it runs additional validation to check if the email address is in a valid format.
- **Explanation:** The `isEmailValid(value)` function is called, which uses a regular expression to verify that the email follows a standard format (e.g., `user@example.com`). If the email is valid, `isValid` remains `true`; otherwise, it will be set to `false`.

#### `if (!isValid) {`
- **Purpose:** This conditional checks if the current field is invalid.
- **Explanation:** If `isValid` is `false`, meaning the field either is empty or contains invalid data (e.g., an incorrectly formatted email), the following actions will be executed to mark the field as invalid.

#### `input.classList.add('invalid');`
- **Purpose:** Adds the `invalid` class to the input field.
- **Explanation:** This class is used for styling, typically to highlight the input field with a red border or other visual cues indicating an error.

#### `warning.classList.add('show');`
- **Purpose:** Adds the `show` class to the warning message associated with the current input field.
- **Explanation:** This makes the error message visible to the user, alerting them that the input is invalid.

#### `input.setAttribute('aria-invalid', 'true');`
- **Purpose:** Sets the `aria-invalid` attribute to `true` on the input element.
- **Explanation:** This is an accessibility feature that informs screen readers that the input field contains an error. Users relying on screen readers will be notified of the issue.

#### `hasEmptField = true;`
- **Purpose:** Sets the `hasEmptField` flag to `true` if any field is invalid.
- **Explanation:** This will eventually be used to disable the submit button to prevent the user from submitting an incomplete form.

#### `} else {`
- **Purpose:** This is the else statement that is executed if the field is valid.
- **Explanation:** If the field passes validation (i.e., is not empty and is a valid email, if applicable), the following actions will be executed.

#### `input.classList.add('valid');`
- **Purpose:** Adds the `valid` class to the input field.
- **Explanation:** This class is used for styling the input field, typically with a green border or other visual feedback indicating the input is correct.

#### `warning.classList.remove('show');`
- **Purpose:** Removes the `show` class from the warning message.
- **Explanation:** This hides the error message since the field is now valid.

#### `input.removeAttribute('aria-invalid');`
- **Purpose:** Removes the `aria-invalid` attribute from the input element.
- **Explanation:** Since the field is now valid, the `aria-invalid` attribute is removed to update its state, which is helpful for screen reader users.

#### `submitBtn.disabled = hasEmptField;`
- **Purpose:** This line disables or enables the submit button based on whether any fields are empty or invalid.
- **Explanation:** If `hasEmptField` is `true` (indicating that at least one field is invalid), the submit button will be disabled, preventing the form from being submitted. If all fields are valid, the button will be enabled.

#### Summary:
This function checks all input fields in the form for validity. It provides real-time visual feedback by marking fields as valid or invalid and dynamically displaying validation messages. It also ensures that users with accessibility needs are informed of errors through **ARIA** attributes and screen reader support. Lastly, the function prevents form submission if any fields are invalid by disabling the submit button.<br><br>

### 5. Clear Fields Function
```js
function clearFields() {
    inputFields.forEach((input) => {
        input.value = '';
        input.classList.remove('valid', 'invalid');
        input.removeAttribute('aria-invalid');
        getWarningElement(input).classList.remove('show');
    });
};
```
#### `function clearFields() {`
- **Purpose:** This function clears the values, validation states, and error messages of all form input fields.
- **Explanation:** It resets the form fields, removing any error messages and restoring the form to its initial state after submission or when clearing the form.

#### `inputFields.forEach((input) => {`
- **Purpose:** This line starts a loop that iterates over all input fields in the form (`inputFields`).
- **Explanation:** For each field (`input`), the following actions will be executed.

#### `input.value = '';`
- **Purpose:** This sets the value of the current input field to an empty string.
- **Explanation:** This effectively clears the user input from the field, making it empty again.

#### `input.classList.remove('valid', 'invalid');`
- **Purpose:** This removes the `valid` and `invalid` classes from the current input field.
- **Explanation:** The `valid` and `invalid` classes are used to style the input based on whether it is correctly filled out. Removing these classes resets the visual validation state of the input field.

#### `input.removeAttribute('aria-invalid');`
- **Purpose:** This removes the `aria-invalid` attribute from the input field.
- **Explanation:** The `aria-invalid` attribute is used to indicate that a field is invalid. Removing it when the field is cleared ensures that screen readers no longer announce the field as invalid.

#### `getWarningElement(input).classList.remove('show');`
- **Purpose:** This finds the associated warning message for the current input and removes the `show` class.
- **Explanation:** The `show` class is responsible for making the warning message visible. By removing it, the warning message is hidden again, indicating that there is no issue with the input.<br><br>

### 6. Form Submit Event Listener
```js
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    validateFields();

    if(!submitBtn.disabled) {
        alert("Informações enviadas com sucesso!");
        clearFields();
    };
});
```
#### `document.querySelector('form').addEventListener('submit', (e) => {`
- **Purpose:** This attaches an event listener to the form that listens for the `submit` event.
- **Explanation:** When the user submits the form (by clicking the submit button or pressing Enter), the following callback function will be triggered.

#### `e.preventDefault();`
- **Purpose:** This prevents the form from being submitted in the traditional way (i.e., the page does not reload).
- **Explanation:** By calling `preventDefault()`, the form submission is intercepted so the JavaScript validation can take place first.

#### `validateFields();`
- **Purpose:** This calls the `validateFields` function, which checks the validity of all input fields in the form.
- **Explanation:** Before proceeding with the form submission, this ensures that all fields are validated. If any fields are invalid, the form will not be submitted.

#### `if (!submitBtn.disabled) {`
- **Purpose:** This checks if the submit button is not disabled.
- **Explanation:** If the submit button is enabled (i.e., all fields are valid), the following actions will be executed.

#### `alert("Informações enviadas com sucesso!");`
- **Purpose:** This shows a success message in the form of an alert box to notify the user that the form was successfully submitted.
- **Explanation:** This message informs the user that their submission was successful.

#### `clearFields();`
- **Purpose:** This calls the `clearFields` function to clear all input fields and validation messages.
- **Explanation:** After a successful form submission, this clears the form and resets it to its initial state.<br><br>

### 7. Real-Time Field Validation
```js
inputFields.forEach((input) => {
    input.addEventListener('input', validateFields);
});
```
#### `inputFields.forEach((input) => {`
- **Purpose:** This attaches an event listener to each input field in the form that listens for the input event.
- **Explanation:** The `input` event is triggered whenever the user types into the input fields. The following callback function will be triggered each time a user interacts with an input.

#### `input.addEventListener('input', validateFields);`
- **Purpose:** This attaches the `validateFields` function to the input event for each form field.
- **Explanation:** Whenever the user types in an input field, the `validateFields` function is called to validate the field in real-time. This ensures that any errors are caught immediately as the user fills out the form.

#### Summary:
- **`clearFields`:** This function clears the values, removes the visual feedback, and resets the form validation states.
- **Form Submit Handling:** When the form is submitted, it first prevents the default submission, validates the fields, and, if valid, shows a success message and clears the form.
- **Real-time Validation:** The input event listener ensures that the form fields are validated in real-time as the user types.

---

## 🧪 Technologies Used
- Semantic HTML5
- CSS3 with Flexbox and Media Queries
- Vanilla JavaScript (ES6+)
- Roboto font from Google Fonts

---

## 🙋 About the Author

Developed by **Leonardo Salles de Oliveira**, passionate about accessibility, clean code, and inclusive user interfaces.

💼 [LinkedIn](https://www.linkedin.com/in/leonardosalles/)  
