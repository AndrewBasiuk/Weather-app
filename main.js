function showWeather(e) {
	e.preventDefault();

	var input = document.getElementById('form__input').value,
		inputBigLetter = input.charAt(0).toUpperCase() + input.slice(1),
		weatherFiveDays = 'http://api.openweathermap.org/data/2.5/forecast?q=' + inputBigLetter + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric',
		weatherNow = "http://api.openweathermap.org/data/2.5/weather?q=" + inputBigLetter + "&appid=fc3da5f655d9b4c55ce7786120594255&units=metric";

	// доступ к элементам DOM
	var weatherInfoNow = document.getElementById('weather-info-now'),
		weatherInfoNowText = document.getElementById('weather-info-now__text'),
		weatherInfoList = document.getElementById('weather-info-list');

	axios.get(weatherNow)
	  .then(function (response) {
	  	var objektAPI = response.data;

	    var temp = Math.round(objektAPI.main.temp),
			weatherIcon = response.data.weather[0].icon,
			imgLink = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

		var weatherInfoNowImage = document.createElement('img');
		weatherInfoNowImage.className = "weather-info-now__image";
		weatherInfoNowImage.setAttribute('src', imgLink);

		weatherInfoNowText.innerHTML = "Now in " + inputBigLetter + "  " + temp + "°";
		weatherInfoNow.appendChild(weatherInfoNowImage);
		

		if(weatherInfoNow.children.length == 3) {
			weatherInfoNow.removeChild(weatherInfoNow.children[1]);
		}	

	  })
	  .catch(function (error) {
	    console.log(error);
	  });


	axios.get(weatherFiveDays)
	  .then(function(response) {
	  	var dayList = response.data.list;

	  	dayList.forEach(function(item, i) {
	  		var selection = i*8+6;

			var temp = Math.round(dayList[selection].main.temp);
				date = dayList[selection].dt_txt.slice(0, 10);
				weatherIcon = dayList[selection].weather[0].icon,
				imgLink = "http://openweathermap.org/img/w/" + weatherIcon + ".png";


			var weatherInfoListItem = document.createElement('li');
			weatherInfoListItem.className = "weather-info__item";

			var weatherInfoDate = document.createElement('p');
			weatherInfoDate.className = "weather-info__date";
			weatherInfoDate.innerHTML = date;

			var weatherInfoTemp = document.createElement('p');
			weatherInfoTemp.className = "weather-info__temp";
			weatherInfoTemp.innerHTML = temp + "°";

			var weatherInfoImage = document.createElement('img');
			weatherInfoImage.className = "weather-info__image";
			weatherInfoImage.setAttribute("src", imgLink);

			var weatherInfoValue = document.createElement('div');
			weatherInfoValue.className = "weather-info__value";

			weatherInfoValue.appendChild(weatherInfoTemp);
			weatherInfoValue.appendChild(weatherInfoImage);

			weatherInfoList.appendChild(weatherInfoListItem);
			weatherInfoListItem.appendChild(weatherInfoDate);
			weatherInfoListItem.appendChild(weatherInfoValue);


		// if(a => 5) {
		// 	weatherInfoList.removeChild(weatherInfoList.children[a < 10]);
		// }



	  	});


	  })


	  .catch(function(error) {
	  	console.log(error);
	  })

		console.log(weatherInfoList.children.length);

};

var form = document.getElementById('form');
form.addEventListener('submit', showWeather, false);


















// $(document).ready(function() {

// 	function showWeather() {
// 		var input = $(".form__input").val(),
// 			inputBigLetter = input.charAt(0).toUpperCase() + input.slice(1),
// 			weatherFiveDays = 'http://api.openweathermap.org/data/2.5/forecast?q=' + inputBigLetter + '&appid=fc3da5f655d9b4c55ce7786120594255&units=metric',
// 			weatherNow = "http://api.openweathermap.org/data/2.5/weather?q=" + inputBigLetter + "&appid=fc3da5f655d9b4c55ce7786120594255&units=metric";

// 		$('#weather-info__heading').text(inputBigLetter + " weather for 5 days");
// 		$('.weather-info__item').remove();
// 		$('#weather-info-now__image').remove();

// 		$.getJSON(weatherNow, function(objektAPI) {
// 			var temp = Math.round(objektAPI.main.temp),
// 				weatherIcon = objektAPI.weather[0].icon,
// 				imgLink = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

// 			$('#weather-info-now__text').text("Now in " + inputBigLetter + "  " + temp + "°");
// 			$('#weather-info-now').append("<img src=" + imgLink + " alt='icon' id='weather-info-now__image' class='weather-info-now__image'>");
// 		});


// 		$.getJSON(weatherFiveDays, function(objektAPI) {
// 			var dayList = objektAPI.list;

// 			dayList.forEach( function(item, i) {
// 				var selection = i*8+6;

// 				var temp = Math.round(dayList[selection].main.temp),
// 					 date = dayList[selection].dt_txt.slice(0, 10),
// 					 weatherIcon = dayList[selection].weather[0].icon,
// 					 imgLink = "http://openweathermap.org/img/w/" + weatherIcon + ".png",
// 					 dateParagraph = "<p class='weather-info__date'>" + date + "</p>",
// 					 tempParagraph = "<p class='weather-info__paragraph'>" + temp +  "°" + "</p>",
// 					 image = "<img src=" + imgLink + " alt='icon' class='weather-info__image'>",
// 					 weatherValue = "<div class='weather-info__value'>" + tempParagraph + image + "</div>",
// 					 el = "<li id='weather-info__item' class='weather-info__item'>" + dateParagraph + weatherValue + "</li>";

// 				return $('#weather-info-list').append(el);
// 			});
// 		});
// 	}

// 	$("form").submit(function(e) {
// 		showWeather();
// 		e.preventDefault();
// 	});

// });