// Const and lets

const containerMain = document.querySelector('.main-container')
const submitButton = document.querySelector('#btn-submit')
const buttonOne = document.querySelector('#one')
const buttonTwo = document.querySelector('#two')
const buttonThree = document.querySelector('#three')
const buttonFour = document.querySelector('#four')
const buttonFive = document.querySelector('#five')
const containerContent = document.querySelector('#container-paragraph')
const containerParagraph = document.querySelector('#paragraph')
const reloadButton = document.querySelector('#reset')
let botones = [];

containerContent.style.display = 'none'

//Add Event Listener

submitButton.addEventListener('click', showDesktopThankState)
buttonOne.addEventListener('click', readButton)
buttonTwo.addEventListener('click', readButton)
buttonThree.addEventListener('click', readButton)
buttonFour.addEventListener('click', readButton)
buttonFive.addEventListener('click', readButton)
reloadButton.addEventListener('click', reloadPage)

botones.push(buttonOne, buttonTwo, buttonThree, buttonFour, buttonFive)
botones.forEach(readButton)

function showDesktopThankState() {
    containerMain.style.display = 'none'
    containerContent.style.display = 'flex'
    readButton()
}

function readButton(item, index, arr) {
    containerParagraph.innerHTML = `You selected ${4} out of 5`;
    console.log('a[' + index + ']' + item);
}

function reloadPage() {
    location.reload()
}
