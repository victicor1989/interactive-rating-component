const containerMain = document.querySelector('.main-container')
const submitButton = document.querySelector('#btn-submit')
const buttonOne = document.querySelector('#one')
const buttonTwo = document.querySelector('#two')
const buttonThree = document.querySelector('#three')
const buttonFour = document.querySelector('#four')
const buttonFive = document.querySelector('#five')
const containerParagraph = document.querySelector('#container-paragraph')
let buttons = [];
let ButtonsOption;

containerMain.style.display = 'none'
submitButton.addEventListener('click', showDesktopThankState)
buttonOne.addEventListener('click', selectCalification)
buttonTwo.addEventListener('click', selectCalification)
buttonThree.addEventListener('click', selectCalification)
buttonFour.addEventListener('click', selectCalification)
buttonFive.addEventListener('click', selectCalification)

buttons.push(buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive)
console.log(buttons);

function selectCalification() {
    ButtonsOption.forEach(() => {
            ButtonsOption = `
            <p>You selected ${buttons.ButtonsOption} out of 5</p>
            `

        }) 
}


function showDesktopThankState() {
    containerMain.style.display = 'none'
    showDesktopThankState()
}

