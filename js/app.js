const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')
const input = document.getElementById('city')

//get location
changeLocation.addEventListener('submit', (e) => {
  e.preventDefault()
  const cityName = input.value.trim()
  console.log(cityName);
  changeLocation.reset()
})