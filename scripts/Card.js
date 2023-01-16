import { openModal } from "./utils.js"


class Card {
    constructor(data, cardSelector) {
        this._name = data.name
        this._link = data.link

        this._cardSelector = cardSelector
    }


    _setEventListeners() {
        this._element.querySelector('.nature__like-button').addEventListener('click', () => this._handleLikeButton())
        this._element.querySelector('.nature__delete-button').addEventListener('click', () => this._handleDeleteButton())
        this._element.querySelector('.nature__image').addEventListener('click', () => this._handleImagePreview())
    }

    _handleLikeButton() {
        this._element.querySelector('.nature__like-button').classList.toggle("nature__like-button_active");
    }

    _handleDeleteButton() {
        this._element.remove();
    }

    _handleImagePreview() {
        const modalPreview = document.querySelector("#modal-preview")
        const modalImage = document.querySelector(".modal__image");
        const imageTitle = document.querySelector(".modal__text");
        modalImage.src = this._link;
        modalImage.alt = "Image of " + this._name;
        imageTitle.textContent = this._name;
        openModal(modalPreview);
    }
    _getTemplate() {
        const cardEl = document.querySelector(this._cardSelector).content.querySelector('.nature__card').cloneNode(true)
        return cardEl
    }

    getView() {
        this._element = this._getTemplate()
        this._setEventListeners()
        this._element.querySelector('.nature__image').src = this._link
        this._element.querySelector('.nature__title').textContent = this._name
        this._element.querySelector('.nature__image').alt = this._name
        return this._element
    }
}

export default Card