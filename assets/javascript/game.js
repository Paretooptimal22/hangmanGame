// dog array
const dogs = [`newfoundland`, `xoloitzcuintli`, `pug`, `bulldog`, `chihuahua`, `pitbull`, `labrador`, `chowchow`, `beagle`, `poodle`, `frenchie`, `husky`, `doberman`, `pomeranian`, `corgi`, `maltese`, `rottweiler`, `bloodhound`, `akita`, `mastiff`, `dachshund`]

// select random dog
const getRandDog = function () {
  return dogs[Math.floor(Math.random() * dogs.length)].toLowerCase()
}

// starting values
let wins = 0
let losses = 0
let guesses = 10
let lettersGuessed = []
let dog = getRandDog()

// reset trackers
const reset = function () {
  dog = getRandDog()
  lettersGuessed = []
  guesses = 10
  displayDog()
  document.getElementById(`guesses`).textContent = guesses
  document.getElementById(`wins`).textContent = wins
  document.getElementById(`losses`).textContent = losses
  document.getElementById(`letters`).textContent = lettersGuessed.join(`, `)
}

// display dog
const displayDog = function () {  
  let dogStr = ``
  // toggle tracks if user won
  let winStatus = true
  // loop over word and build string
  dog.split(``).forEach(function (letter) {
    if (lettersGuessed.indexOf(letter) !== -1) {
      dogStr += `${letter} `
    } else {
      dogStr += `_ `
      winStatus = false
    }
  })

  document.getElementById(`dog`).textContent = dogStr

  // winning scenario
  if (winStatus) {
    alert(`You Won! The Word is ${dog}`)
    wins++
    reset()
  }

  
}

// get player input
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) 
  {
    if (lettersGuessed.indexOf(event.key) === -1) {
      lettersGuessed.push(event.key)
      document.getElementById(`letters`).textContent = lettersGuessed.join(`, `)
      if (dog.includes(event.key)) {
        displayDog()
      } else {
        guesses--
        document.getElementById(`guesses`).textContent = guesses
        // losing scenario
        if (guesses <= 0) {
          alert(`You Lost! The Word was ${dog}`)
          losses++
          reset()
        }


      }
    }
    
  }
}

displayDog()