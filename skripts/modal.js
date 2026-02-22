const modal = document.querySelector('[data-js-modal]')
const buttonClose = document.querySelector('[data-js-modal-button]')
const buttonOpen = document.querySelector('[data-js-modal-open]')
const overlay = document.getElementById('overlay')

buttonClose.addEventListener('click', () => {
    modal.classList.remove('is-active')
})

buttonOpen.addEventListener('click', () => {
    modal.classList.add('is-active')
})

overlay.addEventListener('click', (e) => {
    if(e.target === overlay) {
        modal.classList.remove('is-active')
    }
})