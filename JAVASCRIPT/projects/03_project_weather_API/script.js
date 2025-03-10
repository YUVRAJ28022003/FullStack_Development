document.addEventListener("click", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherBtn = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const tempDisplay = document.getElementById("temperature");
  const desDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const API_KEY = "cf8a3d9909b50d20097407fd57a4cbd7"; // env variable

  getWeatherBtn.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    // it may throw an error
    // Server/database is always in different continent

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {}
  });

  async function fetchWeatherData(city) {
    // get the data

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = fetch(url);
    console.log(response);

    console.log(typeof response);
  }

  function displayWeatherData(weatherData) {
    //
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});

/*


Fetch api :
-----------
The Fetch API provides a JavaScript interface for making HTTP requests
 and processing the responses.

With the Fetch API, you make a request by calling fetch(), 
which is available as a global function in both window and worker contexts. 
You pass it a Request object or a string containing the URL to fetch,
along with an optional argument to configure the request.
The fetch() function returns a Promise which is fulfilled with a Response 
object representing the server's response.
You can then check the request status and extract the body of the response in various formats,
including text and JSON, by calling the appropriate method on the response.
*/
