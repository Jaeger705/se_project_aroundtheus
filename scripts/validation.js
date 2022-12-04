// enabling validation by calling enableValidation()
// pass all the settings on call

function setEventListeners(formEl, options) {
 
    const {inputSelector} = options
    const inputEls = [...formEl.querySelectorAll(inputSelector)]
    inputEls.forEach(inputEl => {
        inputEl.addEventListener('input', (evt) => {
            console.log(inputEl.validity)
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