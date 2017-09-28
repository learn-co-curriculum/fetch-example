fetch("https://swapi.co/api/people")
  .then(res => res.json())
  .then(res => appendCharacter(res))

console.log("loading...")

function appendCharacter(data){
  // console.log(data)
  data["results"].forEach((char) => {
    console.log(char)
  })
}
// 1. someone clicks submit
// 2. callback gets called from event listener
// 3. get form entered data
// 4. make post request to API with data
// 5. OPTIMISTIC RENDERING: create div and rendering to the dom whether it saved or not
// 6. PESSIMISTIC RENDER: wait for the response to come back, and rerender based on response

// POST request
// no longer default get request
// method is POST
// sending data within the body
// through the route itself
// '/users/1/edit'
