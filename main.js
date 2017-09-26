


$(document).ready(function() {

	$(".form__button").click(function() {
		var input = $(".form__input").val();
		var weatherAPI = "http://api.openweathermap.org/data/2.5/forecast?q=London&appid=fc3da5f655d9b4c55ce7786120594255&units=metric";

		$.getJSON(weatherAPI, function(objektAPI) {
			var dayList = objektAPI.list;

			var dateList = dayList.forEach( function(item, i) {
				var temp = Math.round(dayList[i*8+6].main.temp),
					date = dayList[i*8+6].dt_txt.slice(0, 10),
					el = "<li class='weather-info__item'><p class='weather-info__paragraph'>" + date + " is " + temp + "°" + "</p></li>";

				return $('.weather-info').append(el);
				
			});

		});
	});


});
