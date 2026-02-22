// const slaider = document.querySelector('[data-js-produkts-slaider]')
// const slaiderCard = document.getElementsByClassName('prodakts__item')
// const buttonLeft = document.querySelector('[data-js-produkts-button-left]')
// const buttonRight = document.querySelector('[data-js-produkts-button-right]')

// let indexSlaid = 0
// let indexSlaidPrev = 1

// const scrollTo = (step) => {
//     slaider.scrollTo({
//         left: step,
//         behavior: "smooth",
//     })

//     slaiderCard[indexSlaidPrev].classList.remove('is-active')
//     indexSlaidPrev = indexSlaid + 1
//     slaiderCard[indexSlaid + 1].classList.add('is-active')
// }

// buttonLeft.addEventListener('click', () => {
//     if(indexSlaid < 1) return
//     indexSlaid--
//     const widthCard = slaiderCard[0].getBoundingClientRect().width + 20
//     const slaiderStep = widthCard * indexSlaid
//     scrollTo(slaiderStep)
// })

// buttonRight.addEventListener('click', () => {
//     if(indexSlaid > slaiderCard.length - 3) return
//     indexSlaid++
//     const widthCard = slaiderCard[0].getBoundingClientRect().width + 20
//     const slaiderStep = widthCard * indexSlaid
//     scrollTo(slaiderStep)
// })

export function slaider() {
    const slaider = document.querySelector('[data-js-produkts-slaider]')
    const slaiderCard = document.getElementsByClassName('prodakts__item')
    const buttonLeft = document.querySelector('[data-js-produkts-button-left]')
    const buttonRight = document.querySelector('[data-js-produkts-button-right]')

    let indexSlaid = 0
    let indexSlaidPrev = 1

    const scrollTo = (step) => {
        slaider.scrollTo({
            left: step,
            behavior: "smooth",
        })

        slaiderCard[indexSlaidPrev].classList.remove('is-active')
        indexSlaidPrev = indexSlaid + 1
        slaiderCard[indexSlaid + 1].classList.add('is-active')
    }

    buttonLeft.addEventListener('click', () => {
        if(indexSlaid < 1) return
        indexSlaid--
        const widthCard = slaiderCard[0].getBoundingClientRect().width + 20
        const slaiderStep = widthCard * indexSlaid
        scrollTo(slaiderStep)
    })

    buttonRight.addEventListener('click', () => {
        if(indexSlaid > slaiderCard.length - 3) return
        indexSlaid++
        const widthCard = slaiderCard[0].getBoundingClientRect().width + 20
        const slaiderStep = widthCard * indexSlaid
        scrollTo(slaiderStep)
    })
}
