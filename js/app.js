const changeLocation = document.getElementById('change-location')
const card = document.getElementById('card')
const details = document.getElementById('details')
const weatherIcon = document.getElementById('weather-icon')
const overlay = document.getElementById('overlay')
const input = document.getElementById('city')
const incor = document.getElementById('incor')

//loader
function loader(state) {

  if (state) {
    overlay.classList.remove('d-none')
  } else overlay.classList.add('d-none')

}

//update ui

const updateUI = (weather) => {
  details.innerHTML = `
  <h5 class="mb-3">${weather.name}, ${weather.sys.country}</h5>
          <p class="mb-3">${weather.weather[0].main}</p>
          <div class="display-4 mb-3">
            <span>${Math.round(weather.main.temp)}</span>
            <span>&deg;C</span>
  `
  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none')
  }
  weatherIcon.src = `
  https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
}

//incorrect city name
const incorrect = (params) => {
  incor.textContent = params;
  overlay.classList.add('d-none')
}

const inc = () => {
  setTimeout(incorrect, 2500)
}


//get location
changeLocation.addEventListener('submit', (e) => {
  e.preventDefault()
  const cityName = input.value.trim()
  changeLocation.reset()
  getData(cityName).then((data) => {
    updateUI(data)
  }).catch((value) => {
    incorrect(value.message)
  })
  inc()
})
