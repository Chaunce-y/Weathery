// Create page that can take user input and return data
// Constants
// const input = document.querySelector('input').value
// const button = document.querySelector('#button')

const apiKey = '&APPID=*'
const city = document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault()
    console.log("IT WORKS!!!!!!")
    try {
    let base_url = `https://api.openweathermap.org/data/2.5/weather?q=brooklyn,ny,us`;
    let cityWeather = axios.get(base_url+apiKey)
    console.log(cityWeather)
    } catch (error) {
        console.log(`${error}`)
    }
},true);

let cityData = Object.keys(city.cityWeather)

// const form = document.getElementById('form')
// let results = document.createElement('p');
// 
// const q = [city,state,country]
// const url = `${base_url}q=${city}&units=imperial&APPID=${apiKey}`
// console.log(url)
// const zip = document.getElementById('zip').value
// Create page using HTML and JavaScript

// Open it up for input

// Get user input
// const getInput = (test) => {
//     document.getElementById('input')
    
// }
// console.log(getInput)

// getInput()
// Send user input data to API



// Link data from API
// async function getWeather() {
//     url
//     try {
//         const response = await axios.get(url)
//         console.log(response.data)
//     } 

// getWeather()

// new form = document.getElementById('form')

// form.submit(function() {
//     e.preventDefault()
// }



// function getWeather

// function getLocation

// function getHiTemp

// function getLoTemp

// function getTempNow

// function getZip

// function getUserInput

// function getCity = (e) => {

// }

// Introduce elements that changes data returned to images


// Style it up!! Make it fly!!

// Stylize graphics

//test test test!