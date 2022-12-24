const containerMain = document.querySelector('.main-container')
const submitButton = document.querySelector('#btn-submit')
const buttonOne = document.querySelector('#one')
const buttonTwo = document.querySelector('#two')
const buttonThree = document.querySelector('#three')
const buttonFour = document.querySelector('#four')
const buttonFive = document.querySelector('#five')
const containerParagraph = document.querySelector('#container-paragraph')
const containerContent = document.querySelector('#container-paragraph')
let buttons = [];
let ButtonsOption;

containerContent.style.display = 'none'
submitButton.addEventListener('click', showDesktopThankState)
buttonOne.addEventListener('click', selectCalification)
buttonTwo.addEventListener('click', selectCalification)
buttonThree.addEventListener('click', selectCalification)
buttonFour.addEventListener('click', selectCalification)
buttonFive.addEventListener('click', selectCalification)

buttons.push(buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive)
console.log(buttons);

function selectCalification() {
    if (buttons == buttonOne) {
        containerParagraph.innerHTML =+ 'You select 1 out of 5'
    } else if (buttons == buttonTwo) {
        containerParagraph.innerHTML =+ 'You select 2 out of 5'
    } else if (buttons == buttonThree) {
        containerParagraph.innerHTML =+ 'You select 3 out of 5'
    } else if (buttons == buttonFour) {
        containerParagraph.innerHTML =+ 'You select 4 out of 5'
    } else if (buttons == buttonFive) {
        containerParagraph.innerHTML =+ 'You select 5 out of 5'
    } else {
        containerParagraph.innerHTML =+ 'Escoge bien puto'
    }
    buttons.forEach((buttons) => {
            ButtonsOption = `
            <p>You selected ${buttons.ButtonsOption} out of 5</p>
            `
            containerParagraph.innerHTML =+ ButtonsOption
        }) 

}


function showDesktopThankState() {
    containerMain.style.display = 'none'
    selectCalification()
}

