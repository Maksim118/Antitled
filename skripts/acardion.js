const acardions = document.querySelectorAll('[data-js-acardion]')

let indexPrev
let acardionButtonPrev 
let acardionMainPrev

acardions.forEach((acardion, i) => {
    const acardionButton = acardion.querySelector('[data-js-acardion-button]')
    const acardionMain = acardion.querySelector('[data-js-acardion-main]')

    acardionButton.addEventListener('click', () => {
        acardionMain.classList.toggle('is-active')
        acardionButton.classList.toggle('is-active')

        if(indexPrev !== undefined && indexPrev !== i) {
            acardionMainPrev.classList.remove('is-active')
            acardionButtonPrev.classList.remove('is-active')
        }

        indexPrev = i
        acardionMainPrev = acardionMain
        acardionButtonPrev = acardionButton
    })
})