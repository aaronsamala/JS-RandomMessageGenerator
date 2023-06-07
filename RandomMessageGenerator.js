// Mixed Messages
// Aaron Samala
//
// This project is for the Codecademy Full-Stack Engineer Career Path.
// View the README for more info.

// Prompt Summary: Create a program that generates a random message for the user.

// Plan: Create a function that will tell the user how their day might go, what their spirit animal is, and their lucky lotto numbers.
// The lotto numbers will follow the Powerball format that shows up on Google: 5 numbers 1-69, and 1 number 1-26.

// Create a random number to be used in the three random message functions.
const randomNum = (max) => {return Math.floor(Math.random() * max)}

// dayOutlook function returns the random outlook for the day as a string.
const dayOutlook = () => {
    const dayPossibilities = ["very bad", "bad", "neither bad nor well", "well", "very well"]
    const returnString = "Today your day might go " + dayPossibilities[randomNum(dayPossibilities.length)] + "."
    return returnString
}

// Test dayOutlook function.
// console.log(dayOutlook())

// spiritAnimal function returns the random spirit animal as a string.
const spiritAnimal = () => {
    const animalPossibilities = ["the wolf", "the bat", "the bear", "the dog", "the pig", "the cow", "the chicken", "the eagle", "the owl", "THE CHUCK NORRIS"]
    const returnString = "Your spirit animal is " + animalPossibilities[randomNum(animalPossibilities.length)] + "."
    return returnString
}

// Test spiritAnimal function.
// console.log(spiritAnimal())

// lottoNumbers function returns the lotto numbers as a string.
const lottoNumbers = () => {
    const regularNumbers = []
    const powerball = randomNum(25)
    let tempNum = 0
    regularNumbers.push(randomNum(69))
    for (let i=0; i<4; i++){
        tempNum = randomNum(69)
        regularNumbers.forEach(num => {
            num === tempNum ? (tempNum = randomNum(69)) : null
        })
        regularNumbers.push(tempNum)
    }

    let returnString = "Your lotto numbers are "
    regularNumbers.forEach(num => {
        returnString += num + ", "
    })
    returnString += "and your powerball is " + powerball + "."
    return returnString
}

// Test lottoNumbers function.
// console.log(lottoNumbers())

const generateMessage = () => {
    console.log(dayOutlook())
    console.log(spiritAnimal())
    console.log(lottoNumbers())
}

generateMessage()