export function closeModalEsc(evt) {
    if (evt.key === 'Escape') {
     const modalOpened = document.querySelector('.modal_opened')
      closeModal(modalOpened)
      
    }
  }
  
 export function closeModalOutside(evt) {
    if (evt.target.classList.contains("modal")) {
      const modalOpened = document.querySelector('.modal_opened')
      closeModal(modalOpened)
    }
  }
  
  
export  function openModal(modal) {
    modal.classList.add("modal_opened");
    document.addEventListener('keydown', closeModalEsc)
    document.addEventListener('mousedown', closeModalOutside)
  }
  
 export function closeModal(modal) {
    modal.classList.remove("modal_opened");
    document.removeEventListener('keydown', closeModalEsc)
    document.removeEventListener('mousedown', closeModalOutside)
  }
  