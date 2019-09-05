// dog array
const dogs = [`newfoundland`, `xoloitzcuintli`, `pug`, `bulldog`, `chihuahua`, `pitbull`, `labrador`, `chowchow`, `beagle`, `poodle`, `frenchie`, `husky`, `doberman`, `pomeranian`, `corgi`, `maltese`, `rottweiler`, `bloodhound`, `akita`, `mastiff`, `dachshund`]

// select random dog
const getRandDog = function () {
  return dogs[Math.floor(Math.random() * dogs.length)].toLowerCase()
}

// variables
let wins = 0
let losses = 0
let guesses = 10
const lettersGuessed = []
let dog = getRandDog()


// display dog
const displayDog = function () {  
  let dogStr = ``
  let winStatus = true
  dog.split(``).forEach(function (letter) {
    if (lettersGuessed.indexOf(letter) !== -1) {
      dogStr += `${letter} `
    } else {
      dogStr += `_ `
      winStatus = false
    }
  })
  if (winStatus) {
    alert(`You Won!`)
    wins++
    document.getElementById(`wins`).textContent = wins
  }

  document.getElementById(`dog`).textContent = dogStr
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
        if (guesses <= 0) {
          alert(`You Lost!`)
          losses++
          document.getElementById(`losses`).textContent = losses
        }


      }
    }
    
  }
}

displayDog()