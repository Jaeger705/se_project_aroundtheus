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

   _toggleButtonState() {


        if (this._hasInvalidInput(this._inputEls)) {
            this._submitButton.classList.add(this._inactiveButtonClass)
            this._submitButton.disabled = true
        
        }
        else {
            this._submitButton.classList.remove(this._inactiveButtonClass)
            this._submitButton.disabled = false
        }
    }

    _checkInputValidity(inputEl) {
        if (!inputEl.validity.valid) {
            this._showInputError(inputEl)
        }   else {
            this._hideInputError(inputEl)
        }
    }

    _hasInvalidInput(inputList) {
        return !inputList.every((inputEl) => inputEl.validity.valid)
    }

    _setEventListeners() {
    
        this._inputEls = [...this._formEl.querySelectorAll(this._inputSelector)]
        this._submitButton = this._formEl.querySelector(this._submitButtonSelector)
        this._inputEls.forEach(inputEl => {
            inputEl.addEventListener('input', (evt) => {
                this._checkInputValidity(inputEl)
                this._toggleButtonState()
            })
        })
    }
  
    enableValidator() {
      this._formEl.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
      this._setEventListeners();
    }
  
  }
  


  export default FormValidator 