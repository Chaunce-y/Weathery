const input = document.querySelector('input')
const button = document.querySelector('#button')
const base_url = `https://api.openweathermap.org/data/2.5/weather?`
const apiKey = 'ecd832da2a7d0869bb43a972a4a4fbe0'
const url = `${base_url} + ${city} + "," ${state} + "," + ${country}` 
// console.log(url)

// const title = document.querySelector('h1')
// const city = document.getElementById('city').value
// console.log(city)

function getCity = (e) => {
    e.preventDefault()
    console.log(input)
}
//
//Get Data from API
//  function getWeather = async () => {
     
//      try {
//          const response = await axios.get (url)
            console.log(response)
//          const results = response.main.temp
            console.log(results)
//      } 
//      catch (error) {
//          console.log(`error`)
//      }
// }




//Return results from search

//

//wait for user input
//connect to api.openweathermap.org/data/2.5/weather?q=$