const burgerMenu = document.querySelector('[data-js-burger-menu]')
const burgerButton = document.querySelector('[data-js-burger-button]')

burgerButton.addEventListener('click', () => {
    burgerButton.classList.toggle('is-active')
    burgerMenu.classList.toggle('is-active')
})