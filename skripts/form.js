const formElements = document.querySelectorAll('#form')

formElements.forEach((formElement) => {
    formMask(formElement)
})

function formMask (form) {
    const inputName = form.querySelector('#name')
    const inputTel = form.querySelector('#tel')
    const inputConfid = form.querySelector('#confid')

    inputTel.addEventListener('input', function () {
        let numbers = this.value.replace(/\D/g, ""); 
        numbers = numbers.substring(0, 10);


        let formatted = ''
        
        if (numbers.length > 0) formatted += "(" + numbers.substring(0, 3);
        if (numbers.length >= 4) formatted += ") " + numbers.substring(3, 6);
        if (numbers.length >= 7) formatted += "-" + numbers.substring(6, 8);
        if (numbers.length >= 9) formatted += "-" + numbers.substring(8, 10);

        this.value = formatted
    })

    form.addEventListener('submit', (event) => {

        let fulNumber = inputTel.value

        if(fulNumber.length === 15) {
            inputTel.value = '+7' + fulNumber
        } else if(fulNumber.length === 16 && fulNumber.startsWith('7')) {
            inputTel.value = '+' + fulNumber
        }
    })
}


// const inputName = form.querySelector('#name')
// const inputTel = form.querySelector('#tel')
// const inputConfid = form.querySelector('#confid')

// inputTel.addEventListener('input', function () {
//     let numbers = this.value.replace(/\D/g, ""); 
//     numbers = numbers.substring(0, 10);


//     let formatted = ''

//     if (numbers.length > 0) formatted += "(" + numbers.substring(0, 3);
//     if (numbers.length >= 4) formatted += ") " + numbers.substring(3, 6);
//     if (numbers.length >= 7) formatted += "-" + numbers.substring(6, 8);
//     if (numbers.length >= 9) formatted += "-" + numbers.substring(8, 10);

//     this.value = formatted
// })

// form.addEventListener('submit', (event) => {

//     let fulNumber = inputTel.value

//     if(fulNumber.length === 15) {
//         inputTel.value = '+7' + fulNumber
//     } else if(fulNumber.length === 16 && fulNumber.startsWith('7')) {
//         inputTel.value = '+' + fulNumber
//     }
// })