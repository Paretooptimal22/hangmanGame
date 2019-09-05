// dog array
const dogs = [`newfoundland`, `xoloitzcuintli`, `pug`, `bulldog`, `chihuahua`, `pitbull`, `germanshephard`, `labradorretriever`, `chowchow`, 'bernese mountain dog', `beagle`, `poodle`, `frenchbulldog`, `husky`, `doberman`, `golden retriever`, `greatdane`, `pomeranian`, `corgi`, `maltese`, `bostonterrier`, `rottweiler`, `yorkshireterrier`, `bloodhound`, `saintbernard`, `akita`, `shiba inu`, `mastiff`, `dachshund`]

// select random dog
const getRandDog = function () {
  return dogs[Math.floor(Math.random() * dogs.length)].toLowerCase()
}

// variables
let wins = 0
let losses = 0
let guesses = 6
const lettersGuessed = []
let dog = getRandDog()


// display dog
const displayDog = function () {  
  let dogStr = ``
  dog.split(``).forEach(function (letter) {
    if (lettersGuessed.indexOf(letter) !== -1) {
      dogStr += `${letter} `
    } else {
      dogStr += `_ `
    }
  })
  document.getElementById(`dog`).textContent = dogStr
}

// get player input
document.onkeyup = function (event) {
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    if (dog.includes(event.key)) {
      lettersGuessed.push(event.key)
      document.getElementById(`letters`).textContent = lettersGuessed.join(`, `)
      displayDog()
    }
  }
}

