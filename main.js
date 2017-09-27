


$(document).ready(function() {

	$(".form__button").click(function() {
		var input = $(".form__input").val();
		var inputBigLetter = input.charAt(0).toUpperCase() + input.slice(1);
		var weatherAPI = "http://api.openweathermap.org/data/2.5/forecast?q=" + inputBigLetter + "&appid=fc3da5f655d9b4c55ce7786120594255&units=metric";

		$('.weather-info__heading').text(inputBigLetter + " weather for 5 days");
		$('.weather-info__item').remove();

		$.getJSON(weatherAPI, function(objektAPI) {
			var dayList = objektAPI.list;

			dayList.forEach( function(item, i) {
				var temp = Math.round(dayList[i*8+6].main.temp),
					date = dayList[i*8+6].dt_txt.slice(0, 10),
					el = "<li class='weather-info__item'><p class='weather-info__paragraph'>" + date + " is " + temp + "°" + "</p></li>";
				console.log(date);
				return $('.weather-info-list').append(el);
			});
		});
	});


});
