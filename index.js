
class Character {
  constructor(data) {
    this.name = data.name
    this.films = data.films
    this.eyeColor = data.eye_color
    this.hairColor = data.hair_color
    this.gender = data.gender
    this.mass = data.mass

    Character.all.push(this)
  }

  static createFromArray(charArr) {
    charArr.forEach(charData => {
      new Character(charData)
    })
  }
}

Character.all = []







var apiRequest = fetch("https://swapi.co/api/people")

var jsonData = apiRequest.then( res => res.json() )

jsonData.then(function(response) {
  Character.createFromArray(response.results)
  console.log(Character.all)

  Character.all.forEach(function(char){
    const div = document.querySelector('#char')
    const newCharacterHeader = document.createElement('h3')
    newCharacterHeader.innerText = char.name
    newCharacterHeader.className = char.id

    newCharacterHeader.addEventListener('click', function(){

    const charName = this.innerText

    const charWeWant = Character.all.find(function(char){
      return char.name === charName
    })

    const moreInfo = document.querySelector('#more-info')
    moreInfo.innerHTML = ''

    const ul = document.createElement('ul')

    ul.innerHTML += `<li>${charWeWant.eyeColor}</li>`
    ul.innerHTML += `<li>${charWeWant.hairColor}</li>`
    ul.innerHTML += `<li>${charWeWant.gender}</li>`
    ul.innerHTML += `<li>${charWeWant.mass}</li>`

    moreInfo.appendChild(ul)

    })

    div.appendChild(newCharacterHeader)
  })
})
