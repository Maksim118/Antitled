const dropdownMenu = document.querySelector('[data-js-dropdown-menu]')
const dropdownButton = document.querySelector('[data-js-dropdown-button]')

dropdownButton.addEventListener('click', (event) => {
    dropdownButton.classList.toggle('is-active')
    dropdownMenu.classList.toggle('is-active')
    
})