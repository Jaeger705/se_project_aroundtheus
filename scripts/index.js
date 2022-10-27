const initialCards = [
   {
    name: 'Yosemite Valley',
    link: '../images/yosemite-valley.png'
   },
   {
    name: 'Lake Louise',
    link: '../images/lake-louise.png'
   },
   {
    name: 'Bald Mountains',
    link: '../images/bald-mountains.png'
   },
   {
    name: 'Latemar',
    link: '../images/latemar.png'
   },
   {
    name: 'Vanoise National Park',
    link: '../images/vanoise-national-park.png'
   },
   {
    name: 'Lago Di Braies',
    link: '../images/lago-di-braies.png'
   }
];

const editButton = document.querySelector('.profile__edit-button');
const profileEdit = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close-button');



function openModal() {
   profileEdit.classList.add('modal_opened');
}

function closeModal() {
   profileEdit.classList.remove('modal_opened');
}

editButton.addEventListener('click', (evt) => {
   openModal();
});

closeButton.addEventListener('click', (evt) => {
   closeModal();
});





