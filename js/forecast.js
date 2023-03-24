let apiKey = '80326728f693fadf142098e55e95a622';
let cityName = 'Uzbekistan';

let API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

const getData = async (resurs) => {

  const request = await fetch(resurs);
  if (request.status != 200) {
    throw new Error('Xatolik yuz berdi')
  }
  const response = await request.json();

  return response
}

getData(API).then((data) => {
  console.log(data);
}).catch((err) => { console.log(err.message) })