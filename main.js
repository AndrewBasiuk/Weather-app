


$(document).ready(function() {

	function showWeather() {
		var input = $(".form__input").val(),
			inputBigLetter = input.charAt(0).toUpperCase() + input.slice(1),
			weatherFiveDays = "http://api.openweathermap.org/data/2.5/forecast?q=" + inputBigLetter + "&appid=fc3da5f655d9b4c55ce7786120594255&units=metric",
			weatherNow = "http://api.openweathermap.org/data/2.5/weather?q=" + inputBigLetter + "&appid=fc3da5f655d9b4c55ce7786120594255&units=metric";

		$('.weather-info__heading').text(inputBigLetter + " weather for 5 days");
		$('.weather-info__item').remove();
		$('.weather-info-now__image').remove();

		$.getJSON(weatherNow, function(objektAPI) {
			var temp = Math.round(objektAPI.main.temp),
				weatherIcon = objektAPI.weather[0].icon,
				imgLink = "http://openweathermap.org/img/w/" + weatherIcon + ".png";

			$('.weather-indo-now__text').text("Now in " + inputBigLetter + "  " + temp + "°");
			$('.weather-indo-now').append("<img src=" + imgLink + " alt='icon' class='weather-info-now__image'>");
		});


		$.getJSON(weatherFiveDays, function(objektAPI) {
			var dayList = objektAPI.list;

			dayList.forEach( function(item, i) {
				var temp = Math.round(dayList[i*8+6].main.temp),
					 date = dayList[i*8+6].dt_txt.slice(0, 10),
					 weatherIcon = dayList[i*8+6].weather[0].icon,
					 imgLink = "http://openweathermap.org/img/w/" + weatherIcon + ".png",
					 paragraph = "<p class='weather-info__paragraph'>" + date + " is " + temp + "°" + "</p>",
					 image = "<img src=" + imgLink + " alt='icon' class='weather-info__image'>",
					 el = "<li class='weather-info__item'>" + paragraph + image + "</li>";

				return $('.weather-info-list').append(el);
			});
		});
	}

	$(".form__button").click(function() {
		showWeather();
	});

	$(".form__input").keypress(function(e){
	   if(e.keyCode==13){
	     	showWeather();
	   }
	});



});
