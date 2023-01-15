import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { closeModal, openModal } from "./utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const editButton = document.querySelector(".profile__edit-button");
const profileEdit = document.querySelector("#modal-profile");
const closeProfileModalButton = document.querySelector(".modal__close-button");
const profileNameInput = document.querySelector(".form__input-name");
const profileDescriptionInput = document.querySelector(
  ".form__input-description"
);
const profileSaveButton = document.querySelector(".form__button");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const cardListEl = document.querySelector(".nature__list");
const profileEditForm = document.querySelector("#edit-profile-form");
const cardAdd = document.querySelector("#modal-card");
const cardAddButton = document.querySelector(".profile__add-button");
const cardCloseButton = document.querySelector("#add__close-button");
const cardAddForm = document.querySelector("#add-form");
const cardTitleInput = document.querySelector('#image-title')
const cardLinkInput = document.querySelector('#image-link')




cardAddButton.addEventListener("click", (evt) => {
  openModal(cardAdd);
});

cardCloseButton.addEventListener("click", (evt) => {
  closeModal(cardAdd);
});

const cardSelector =
  document.querySelector("#card-template").content.firstElementChild;

editButton.addEventListener("click", (evt) => {
  profileNameInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;

  openModal(profileEdit);
});

closeProfileModalButton.addEventListener("click", (evt) => {
  closeModal(profileEdit);
});

profileEditForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;

  profileTitle.textContent = titleValue;
  profileDescription.textContent = descriptionValue;

  closeModal(profileEdit);
});

cardAddForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const title = evt.target.title.value;
  const link = evt.target.link.value;

  renderCard({
    name: title,
    link: link,
  });
  closeModal(cardAdd);
  cardAddForm.reset();
  const submitButton = cardAddForm.querySelector(settings.submitButtonSelector)
  const disableSubmitButton = cardAddForm.querySelector(settings.inactiveButtonClass)
  //disableSubmitButton(submitButton, settings.inactiveButtonClass)
});

const handleLikeButton = (evt) => {
  evt.target.classList.toggle("nature__like-button_active");
};

const modalPreview = document.querySelector("#modal-preview");

const modalImage = document.querySelector(".modal__image");
const imageTitle = document.querySelector(".modal__text");
const imageCloseButton = modalPreview.querySelector(
  "#modal-preview-close-button"
);
imageCloseButton.addEventListener("click", (evt) => {
   closeModal(modalPreview);
 });

function createCard() {
  const makeCard = {
    name: cardTitleInput.value,
    link: cardLinkInput.value
  }

  const card = new Card(makeCard, cardSelector)
  return card
  /*const cardEl = cardTemplate.cloneNode(true);
  const imageEl = cardEl.querySelector(".nature__image");
  const cardTitle = cardEl.querySelector(".nature__title");
 

  imageEl.src = data.link;
  imageEl.alt = data.name;
  cardTitle.textContent = data.name;

  const cardDeleteButton = cardEl.querySelector(".nature__delete-button");

  cardDeleteButton.addEventListener("click", (evt) => {
    cardEl.remove();
  });

  const cardLikeButton = cardEl.querySelector(".nature__like-button");
  cardLikeButton.addEventListener("click", handleLikeButton);

  imageEl.addEventListener("click", (evt) => {
    modalImage.src = data.link;
    modalImage.alt = "Image of " + data.name;
    imageTitle.textContent = data.name;
    openModal(modalPreview);
  });


  return cardEl;*/
}

function renderCard() {
  const cardEl = createCard();
  cardListEl.prepend(cardEl);
}

initialCards.reverse().forEach(renderCard); 

const settings = {
  formSelector: ".modal__form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible"
}

const editFormValidator = new FormValidator(settings, profileEditForm);
const addCardValidator = new FormValidator(settings, cardAddForm)
editFormValidator.enableValidator();
addCardValidator.enableValidator()

