class FormValidator {
    constructor(settings, formEl) {
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
        this._formEl = formEl
  
      
    }


    _showInputError(inputEl) {
        const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`)
        inputEl.classList.add(this._inputErrorClass)
        errorMessageEl.textContent = inputEl.validationMessage
        errorMessageEl.classList.add(this._errorClass)
    }

    _hideInputError(inputEl) {
        const errorMessageEl = this._formEl.querySelector(`#${inputEl.id}-error`)
        inputEl.classList.remove(this._inputErrorClass)
        errorMessageEl.textContent = ""
        errorMessageEl.classList.remove(this._errorClass)
    }

   _toggleButtonState(inputEls, submitButton, inactiveButtonClass) {


        if (hasInvalidInput(inputEls)) {
            submitButton.classList.add(inactiveButtonClass)
            submitButton.disabled = true
        
        }
        else {
            submitButton.classList.remove(inactiveButtonClass)
            submitButton.disabled = false
        }
    }

    _hasInvalidInput(inputList) {

            return !inputList.every((inputEl) => inputEl.validity.valid)
        
    }

    _setEventListeners() {
        const {inputSelector} = options
        this._inputEls = [...this._formEl.querySelectorAll(this._inputSelector)]
        this._submitButton = this._formEl.querySelector(this._submitButtonSelector)
        this._inputEls.forEach(inputEl => {
            inputEl.addEventListener('input', (evt) => {
                checkInputValidity(formEl, inputEl, options)
                toggleButtonState(inputEls, submitButton, options)
            })
        })
    }
  
    enableValidator() {
      this._form.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
      setEventListeners(formEl, options);
    }
  
  }
  
  /*const settings = {
    formSelector: ".modal__form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__button",
    inactiveButtonClass: "form__button_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible"
  }*/
  
  const editFormValidator = new FormValidator();
  editFormValidator.enableValidator();

  export default FormValidator