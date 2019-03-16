// / This is our API key
var APIKey = "166a433c57516f51dfab1f7edaed8413";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
   "q=Charlotte,USA&units=imperial&appid=" + APIKey;

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
   url: queryURL,
   method: "GET"
})
   // We store all of the retrieved data inside of an object called "response"
   .then(function (response) {

       // Log the queryURL
       console.log(queryURL);

       // Log the resulting object
       console.log(response);

       // Transfer content to HTML
       $(".city").html("<h5>" + response.name + " Weather Details</h5>");
       $(".wind").text("Wind Speed: " + response.wind.speed);
       $(".humidity").text("Humidity: " + response.main.humidity);
       $(".temp").text("Temperature (F) " + response.main.temp);
       $(".description").text("Description " + response.weather[0].description);

       // Log the data in the console as well
       console.log("Wind Speed " + response.wind.speed);
       console.log("Humidity " + response.main.humidity);
       console.log("Temperature (F) " + response.main.temp);
       console.log("Description: " + response.weather[0].description);


       var weatherDescription = response.weather[0].description;
       console.log(weatherDescription)

       if (weatherDescription === "moderate rain") {
           var urlModerateRain = "https://media1.giphy.com/media/QPsEnRasf0Vfa/200w.webp?cid=3640f6095c83e9fe5974764d6f94e17e";
           $(".card-img-top").attr("src", urlModerateRain);
       }
       else if (weatherDescription === "light rain") {
           var urlLightRain = "https://media0.giphy.com/media/LvZvInwnWDFT2/200w.webp?cid=3640f6095c83f1464e50765045b49e30";
           $(".card-img-top").attr("src", urlLightRain);
       }
       else if (weatherDescription === "overcast clouds") {
           var urlOvercastClouds = "https://media0.giphy.com/media/c31WXGK1jLQBy/200.webp?cid=3640f6095c86f31241334a7a36d35a44";
           $(".card-img-top").attr("src", urlOvercastClouds);
       }
       else if (weatherDescription === "mist") {
           var urlMist = "https://media2.giphy.com/media/Z98zIhtiePuIo/200w.webp?cid=3640f6095c83f75a78616a55730eabb9";
           $(".card-img-top").attr("src", urlMist);
       }
       else if (weatherDescription === "fog") {
           var urlFog = "https://media3.giphy.com/media/aAvJE6v5JStKE/200w.webp?cid=3640f6095c83f7aa766a57583222d65d";
           $(".card-img-top").attr("src", urlFog);
       }
       else if (weatherDescription === "broken clouds") {
           var urlBrokenClouds = "https://media3.giphy.com/media/Vb8Ye3Avh83PG/200w.webp?cid=3640f6095c86fc2a742e306b5555ec73";
           $(".card-img-top").attr("src", urlBrokenClouds);
       }
       else if (weatherDescription === "clear sky") {
           var urlClearSky = "https://media3.giphy.com/media/u01ioCe6G8URG/200w.webp?cid=3640f6095c895fc45972562f51151336";
           $(".card-img-top").attr("src", urlClearSky);
       }
       else if (weatherDescription === "haze") {
        var urlHaze = "https://media3.giphy.com/media/Zzz1GUuEZLrjy/200.webp?cid=3640f6095c898cf5557963536399ffdb";
        $(".card-img-top").attr("src", urlHaze);
    }
   });