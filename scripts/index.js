const initialCards = [
   {
    name: 'Yosemite Valley',
    link: './images/yosemite-valley.png'
   },
   {
    name: 'Lake Louise',
    link: './images/lake-louise.png'
   },
   {
    name: 'Bald Mountains',
    link: './images/bald-mountains.png'
   },
   {
    name: 'Latemar',
    link: './images/latemar.png'
   },
   {
    name: 'Vanoise National Park',
    link: './images/vanoise-national-park.png'
   },
   {
    name: 'Lago Di Braies',
    link: './images/lago-di-braies.png'
   }
];

const editButton = document.querySelector('.profile__edit-button');
const profileEdit = document.querySelector('.modal');
const closeProfileModalButton = document.querySelector('.modal__close-button');
const profileNameInput = document.querySelector('.form__input-name');
const profileDescriptionInput = document.querySelector('.form__input-description');
const profileSaveButton = document.querySelector('.form__button');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const cardListEl = document.querySelector('.nature__list');
const profileEditForm = document.querySelector('#edit-profile-form');
const cardEdit = document.querySelector('.modal__card');
const cardAddButton = document.querySelector('.profile__add-button')
const cardCloseButton = document.querySelector('#add__close-button')
const cardAddForm = document.querySelector('#add-form')






function openModal(modal) {
   modal.classList.add('modal_opened');
}

function closeModal(modal) {
   modal.classList.remove('modal_opened');
}

function openCardModal() {
   cardEdit.classList.add('modal__card-open');
}

function closeCardModal() {
   cardEdit.classList.remove('modal__card-open')
}


cardAddButton.addEventListener('click', (evt) => {
      openCardModal();
   })

cardCloseButton.addEventListener('click', (evt) => {
   closeCardModal()
})

const cardTemplate = document.querySelector('#card-template').content.firstElementChild;

editButton.addEventListener('click', (evt) => {
   profileNameInput.value = profileTitle.textContent;
   profileDescriptionInput.value = profileDescription.textContent;

   openModal(profileEdit);
});

closeProfileModalButton.addEventListener('click', (evt) => {
   closeModal(profileEdit);
});

profileEditForm.addEventListener('submit', (event) => {
   event.preventDefault();
   const titleValue = event.target.title.value;
   const descriptionValue = event.target.description.value;

   profileTitle.textContent = titleValue;
   profileDescription.textContent = descriptionValue;

   closeModal(profileEdit);
});

cardAddForm.addEventListener('submit', (evt) => {
   evt.preventDefault();
   const title = evt.target.title.value;
   const link = evt.target.link.value;


   renderCard({
      name: title,
      link: link
   });
   closeCardModal(cardAddForm);
});







const handleLikeButton = (evt) => {
   evt.target.classList.toggle('nature__like-button_active')
}


const modalPreview = document.querySelector('#modal-preview')


const modalImage = document.querySelector('.modal__image')
const imageTitle = document.querySelector('.modal__text')
const imageCloseButton = modalPreview.querySelector('#modal-preview-close-button')


function createCard(data) {
   console.log(data)
   const cardEl = cardTemplate.cloneNode(true);
   const imageEl = cardEl.querySelector('.nature__image');
   const cardTitle = cardEl.querySelector('.nature__title');
   
   imageEl.src = data.link;
   imageEl.alt = data.name;
   cardTitle.textContent = data.name;

   const cardDeleteButton = cardEl.querySelector('.nature__delete-button')
   
   cardDeleteButton.addEventListener('click', (evt) =>{
      cardEl.remove()
   }) 
  

   const cardLikeButton = cardEl.querySelector('.nature__like-button')
   cardLikeButton.addEventListener('click', handleLikeButton)

   imageEl.addEventListener('click', (evt) => {
      modalImage.src = data.link;
      imageTitle.textContent = data.name;
      openModal(modalPreview)
      
   })
   imageCloseButton.addEventListener('click', (evt) => {
      closeModal(modalPreview)
      
      
      
   })

   return cardEl;
}


   
   


function renderCard(data) {
   const cardEl = createCard(data);
   cardListEl.prepend(cardEl);
}

initialCards.reverse().forEach(renderCard);
