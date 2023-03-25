const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')
const input = document.getElementById('city')


//get weather

const getWeather = async (city) => {
  const reqWeather = await getData(city)
  console.log(reqWeather);
}


//get location
changeLocation.addEventListener('submit', (e) => {
  e.preventDefault()
  const cityName = input.value.trim()
  changeLocation.reset()
  getWeather(cityName)
})