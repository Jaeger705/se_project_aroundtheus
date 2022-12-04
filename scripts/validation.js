// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEl, options) {
    const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`)
    inputEl.classlist.add(options.inputErrorClass)
    errorMessageEl.textContent = inputEl.validationMessage
    errorMessageEl.classlist.add(options.errorClass)
}

function hideInputError(formEl, inputEl, options) {
    inputEl.classlist.remove(options.inputErrorClass)
}

function checkInputValidity(formEl, inputEl, options) {
    if (!inputEl.validity.valid) {
        showInputError(formEl, inputEl, options)
    }   else {
        hideInputError(formEl, inputEl, options)
    }
}

function setEventListeners(formEl, options) {
 
    const {inputSelector} = options
    const inputEls = [...formEl.querySelectorAll(inputSelector)]
    inputEls.forEach(inputEl => {
        inputEl.addEventListener('input', (evt) => {
            checkInputValidity(formEl, inputEl, options)
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