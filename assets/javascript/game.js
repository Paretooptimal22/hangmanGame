// dog array
const dogs = [`newfoundland`, `xoloitzcuintli`, `pug`, `bulldog`, `chihuahua`, `pitbull`, `german shephard`, `labrador retriever`, `chow chow`, 'bernese mountain dog', `beagle`, `poodle`, `french bulldog`, `husky`, `doberman`, `golden retriever`, `great dane`, `pomeranian`, `corgi`, `maltese`, `boston terrier`, `rottweiler`, `yorkshire terrier`, `bloodhound`, `saint bernard`, `akita`, `shiba inu`, `mastiff`, `dachshund`]

// select random dog
const getRandDog = function () {
  return dogs[Math.floor(Math.random() * dogs.length)]
}

// variables
let wins = 0
let losses = 0
let guesses = 3
const lettersGuessed = []
let dog = getRandDog()


// display dog
const displayDog = function () {  
  let dogStr = ``
  dog.split(``).forEach(function (letter) {
    dogStr += `_ `
  })
  document.getElementById(`dog`).textContent = dogStr


}

// get player input
document.onkeyup() = function (event) {
  if (event.keycode >= 65 && <= 90) {
    
  }
}