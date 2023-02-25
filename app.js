const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    generateResult()

    function generateResult() {
        if (computerChoice === userChoice) {
            result = 'Draw!'
        }
        if (computerChoice === 'rock' && userChoice === 'paper') {
            result = 'You win!'
        }
        if (computerChoice === 'rock' && userChoice === 'scissor') {
            result = 'You lose...'
        }
        if (computerChoice === 'paper' && userChoice === 'rock') {
            result = 'You lose...'
        }
        if (computerChoice === 'paper' && userChoice === 'scissor') {
            result = 'You win!'
        }
        if (computerChoice === 'scissor' && userChoice === 'rock') {
            result = 'You win!'
        }
        if (computerChoice === 'scissor' && userChoice === 'paper') {
            result = 'You lose...'

        }
        resultDisplay.innerHTML = result


    }

    function generateComputerChoice() {


        const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

        if (randomNumber === 1) {
            computerChoice = 'rock'
        }
        if (randomNumber === 2) {
            computerChoice = 'paper'
        }
        if (randomNumber === 3) {
            computerChoice = 'scissor'
        }
        computerChoiceDisplay.innerHTML = computerChoice
    }
}))