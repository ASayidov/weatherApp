let apiKey = '80326728f693fadf142098e55e95a622';

const getData = async (city) => {
  const base = 'https://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&units=metric&appid=${apiKey}`
  loader(true)
  const request = await fetch(base + query);
  if (request.status != 200) {
    throw new Error('Please enter correct city name')
  }
  const response = await request.json();
  loader(false)
  return response
}
