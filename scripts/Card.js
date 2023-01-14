
const modalPreview = document.querySelector("#modal-preview");

const modalImage = document.querySelector(".modal__image");
const imageTitle = document.querySelector(".modal__text");
const imageCloseButton = modalPreview.querySelector(
  "#modal-preview-close-button"
);
imageCloseButton.addEventListener("click", (evt) => {
   closeModal(modalPreview);
 });

function closeModalEsc(evt) {
    if (evt.key === 'Escape') {
     const modalOpened = document.querySelector('.modal_opened')
      closeModal(modalOpened)
      
    }
  }
  
  function closeModalOutside(evt) {
    if (evt.target.classList.contains("modal")) {
      const modalOpened = document.querySelector('.modal_opened')
      closeModal(modalOpened)
    }
  }
  
  
  function openModal(modal) {
    modal.classList.add("modal_opened");
    document.addEventListener('keydown', closeModalEsc)
    document.addEventListener('mousedown', closeModalOutside)
  }
  
  function closeModal(modal) {
    modal.classList.remove("modal_opened");
    document.removeEventListener('keydown', closeModalEsc)
    document.removeEventListener('mousedown', closeModalOutside)
  }
  


class Card {
    constructor(data, cardSelector) {
        this._name = data.name
        this._link = data.link

        this._cardSelector = cardSelector
    }


    _setEventListeners() {

    }

    _handleLikeButton() {
        evt.target.classList.toggle("nature__like-button_active");
    }

    _handleDeleteButton() {
        cardEl.remove();
    }

    _handleImagePreview() {
        modalImage.src = data.link;
        modalImage.alt = "Image of " + data.name;
        imageTitle.textContent = data.name;
        openModal(modalPreview);
    }
    _getTemplate() {
        const cardEl = document.querySelector(this._cardSelector).content.querySelector('.nature__card').cloneNode(true)
        return cardEl
    }

    getView() {
        this._element = this._getTemplate()
        this._setEventListeners()
    }
}

export default Card