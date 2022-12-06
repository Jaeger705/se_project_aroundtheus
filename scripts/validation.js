// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEl, options) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`)
    inputEl.classList.add(options.inputErrorClass)
    errorMessageEl.textContent = inputEl.validationMessage
    errorMessageEl.classList.add(options.errorClass)
}

function hideInputError(formEl, inputEl, options) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`)
    inputEl.classList.remove(options.inputErrorClass)
    errorMessageEl.textContent = ""
    errorMessageEl.classList.remove(options.errorClass)
}

function checkInputValidity(formEl, inputEl, options) {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, options)
    }   else {
        hideInputError(formEl, inputEl, options)
    }
}

function toggleButtonState(inputEls, submitButton, options) {
    let foundInvalid = false
    inputEls.forEach(inputEl => {
        if(!inputEl.validity.valid) {
            foundInvalid = true
        }
    })

    if(foundInvalid) {
        submitButton.classList.add(options.inactiveButtonClass)
        submitButton.disabled = true
    } else {
        submitButton.classList.remove(options.inactiveButtonClass)
        submitButton.disabled = false
    }
}

function setEventListeners(formEl, options) {
 
    const {inputSelector} = options
    const inputEls = [...formEl.querySelectorAll(inputSelector)]
    const submitButton = formEl.querySelector('.form__button')
    inputEls.forEach(inputEl => {
        inputEl.addEventListener('input', (evt) => {
            checkInputValidity(formEl, inputEl, options)
            toggleButtonState(inputEls, submitButton, options)
        })
    })
}

function enableValidation(options) {
    const formEls = [...document.querySelectorAll(options.formSelector)]
    formEls.forEach((formEl) => {
        formEl.addEventListener('submit', (evt) => {
            evt.preventDefault()
        })
        setEventListeners(formEl, options) 
    })
}



const config = {
    formSelector: ".modal__form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible"
  }

enableValidation(config);