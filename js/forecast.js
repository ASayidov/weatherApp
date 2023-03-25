let apiKey = '80326728f693fadf142098e55e95a622';

const getData = async (city) => {
  const base = 'https://api.openweathermap.org/data/2.5/weather';
  const query = `?q=${city}&units=metric&appid=${apiKey}`

  const request = await fetch(base + query);
  if (request.status != 200) {
    throw new Error('Xatolik yuz berdi')
  }
  const response = await request.json();
  return response
}
