const url = `api.openweathermap.org/data/2.5/weather?q=${cityCode},${stateCode},${countryCode},&units=imperial&exclude=minutely,hourly,daily&APPID=efaaa012f524c6dcea6f7fee122453a1`

const title = document.querySelector('h1')
const city = document.getElementById('city').value
console.log(city)

const getCity = (e) => {
    e.preventDefault()
    const input = document.querySelector('input')
    console.log(input)
}
//Api Request
 const getWeather = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityCode},${stateCode},${countryCode}&units=imperial&APPID=ecd832da2a7d0869bb43a972a4a4fbe0` 
     try {
         const response = await axios.get (url)
         const currentWeather = response.
     } 
     catch (error) {
         console.log(`error)
     }
} 

const stateCode = 