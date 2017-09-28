fetch("https://swapi.co/api/people")
  .then(res => res.json())
  .then(res => console.log(res))

console.log("loading...")

function appendCharacter(data){
  data.forEach((char) => {
    debugger
  })
}
