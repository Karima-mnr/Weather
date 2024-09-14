const weatherForm = document.querySelector(".meatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "";
weatherForm.addEventListener("submit" , async event => {
    event.preventDefault();
    const city = cityInput.value ;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }

    }else{
        displayError("Please enter a city !");
    }
})
async function getWeatherData(city){
   const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid =${apiKey}`;
   const response = await fetch(apiURL);
   if(!response.ok){
    throw new Error("couldn't fetch weather data ");
   }
   return await response.json();
}
function displayWeatherInfo(data){
   const {name: city , main: {temp, humidity}, weather: [{description, id}]} = data ;
   card.textContent="";
   card.style.display = "flex";

   const cityDisplay = document.createElement("h1");
   const tempDisplay = document.createElement("p");
   const humidityDisplay  = document.createElement("p");
   const descDisplay = document.createElement("p");
   const weatherEmoji = document.createElement("p");

   cityDisplay.textContent = city ;
   tempDisplay.textContent = `${temp}°K `;

   cityDisplay.classList.add("cityDisplay");
   tempDisplay.classList.add("tempDisplay");

   card.appendChild(cityDisplay);
   card.appendChild(tempDisplay);


}

function getWeatherEmoji(weatherID){

}


function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent="";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}