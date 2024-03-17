let mainContainer = document.getElementById("mainContainer");
let cityName = document.getElementById("cityName");
let degrees = document.getElementById("degree");
let reportHeading = document.getElementById("reportHeading");
let reportParagraph = document.getElementById("reportParagraph");
let inputEl = document.getElementById("cityInput");


function changeWeatherReport() {
    let randomDegrees = Math.ceil(Math.random() * 33);

    let searchedCity = inputEl.value;
    searchedCity = searchedCity.toUpperCase();

    cityName.textContent = searchedCity;
    degrees.textContent = randomDegrees;


    if (randomDegrees >= 28) {
        reportHeading.textContent = "Sunny and Warm";
        reportParagraph.textContent = "Today will be sunny with clear skies throughout the day. Temperatures are expected to be warm, reaching a high of around 28°C (82°F) by midday. Light breezes from the south may provide some relief from the heat.";
        mainContainer.style.backgroundImage = 'url("https://res.cloudinary.com/dw5uzflen/image/upload/v1710568288/Sunny_and_warm_cru3vi.jpg")';
    } else if (randomDegrees >= 23 && randomDegrees < 28) {
        reportHeading.textContent = "Dry and Windy";
        reportParagraph.textContent = "It will be a dry day with mostly clear skies. However, strong winds from the east are expected, with gusts reaching up to 50 km/h (31 mph). Temperatures will be seasonable, ranging from 23°C (68°F) to 28°C (77°F) during the day.";
        mainContainer.style.backgroundImage = 'url("https://res.cloudinary.com/dw5uzflen/image/upload/v1710570649/Partly_Cloudy_1_dgr9jv.jpg")';
    } else if (randomDegrees >= 18 && randomDegrees < 23) {
        reportHeading.textContent = "Partly Cloudy with Mild Temperatures";
        reportParagraph.textContent = "Expect a mix of sun and clouds today. While it won't be as bright as yesterday, the temperatures will remain mild, ranging from 18°C (64°F) in the morning to 23°C (73°F) in the afternoon. Winds will be light and variable.";
        mainContainer.style.backgroundImage = 'url("https://res.cloudinary.com/dw5uzflen/image/upload/v1710572099/cloudy_minw2z.jpg")';
    } else if (randomDegrees >= 15 && randomDegrees < 18) {
        reportHeading.textContent = "Overcast with Chance of Showers";
        reportParagraph.textContent = "The day will be mostly cloudy with thick overcast skies. There's a 40% chance of scattered showers, especially in the afternoon and evening. Temperatures will be cooler, hovering around 15°C (59°F). Wind speeds will be moderate from the northwest.";
        mainContainer.style.backgroundImage = 'url("https://res.cloudinary.com/dw5uzflen/image/upload/v1710571099/Overcast_conditions_ldlcwx.jpg")';
    } else if (randomDegrees >= 12 && randomDegrees < 15) {
        reportHeading.textContent = "Heavy Rainfall and Thunderstorms";
        reportParagraph.textContent = "A storm system moving in from the west will bring heavy rain and thunderstorms throughout the day. Expect localized flooding in low-lying areas. Temperatures will be cooler, ranging from 12°C (54°F) to 15°C (61°F). Winds will be gusty, reaching up to 40 km/h (25 mph).";
        mainContainer.style.backgroundImage = 'url("https://res.cloudinary.com/dw5uzflen/image/upload/v1710571439/Heavy_rain_fall_uwvqj4.jpg")';
    } else if (randomDegrees < 12) {
        reportHeading.textContent = "Foggy with Limited Visibility";
        reportParagraph.textContent = "Dense fog will persist throughout the day, reducing visibility to less than 500 meters (0.3 miles) in some areas. Drivers are advised to use caution on the roads. Temperatures will be cool, around 10°C (50°F). Winds will be calm.";
        mainContainer.style.backgroundImage = 'url("https://res.cloudinary.com/dw5uzflen/image/upload/v1710571643/Foggy_n1wvwe.jpg")';
    }



}



inputEl.addEventListener("keydown", function() {
    if (event.key === "Enter" && inputEl.value !== "") {
        changeWeatherReport();
    }
})