const dogs = [`newfoundland`, `xoloitzcuintli`, `pug`, `bulldog`, `chihuahua`, `pitbull`, `german shephard`, `labrador retriever`, `chow chow`, 'bernese mountain dog', `beagle`, `poodle`, `french bulldog`, `husky`, `doberman`, `golden retriever`, `great dane`, `pomeranian`, `corgi`, `maltese`, `boston terrier`, `rottweiler`, `yorkshire terrier`, `bloodhound`, `saint bernard`, `akita`, `shiba inu`, `mastiff`, `dachshund`]

let wins = 0
let losses = 0
let guesses = 3
const lettersGuessed = []


// select random word and display word
const getRandWord = function () {
  return dogs[Math.floor(Math.random() * dogs.length)]
}
const displayWord = function () {
  const dog = getRandWord()
}