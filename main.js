


$(document).ready(function() {

	$(".form__button").click(function() {
		var input = $(".form__input").val();
		var weatherAPI = "http://api.openweathermap.org/data/2.5/forecast?q=London&appid=fc3da5f655d9b4c55ce7786120594255&units=metric";

		$.getJSON(weatherAPI, function(objektAPI) {
			var dayList = objektAPI.list;
			dayList.forEach( function(item, i) {
				var temp = dayList[i*8+6].main.temp;
				var date = dayList[i*8+6].dt_txt;
				var el = "<li class='weather-info'>" + date + "</li>";
				console.log(el);
				// $('.weather-info').html(el);
			});


			// var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q="Kiev"&&APPID=fc3da5f655d9b4c55ce7786120594255&units=metric";	
			// var temp = objektAPI.main.temp;
			// $(".weather-info__temp").text(function() {
			// 	return "Temperature: " + temp + " °";
			// });
		});
	});


});
