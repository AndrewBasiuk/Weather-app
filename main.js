


$(document).ready(function() {

	// var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q="Kiev"&&APPID=fc3da5f655d9b4c55ce7786120594255&units=metric";	

	$(".form__button").click(function() {
		var input = $(".form__input").val();

		var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=" + input + "&&APPID=fc3da5f655d9b4c55ce7786120594255&units=metric";	
		$.getJSON(weatherAPI, function(objektAPI) {
			var temp = objektAPI.main.temp;
			$(".weather-info__temp").text(function() {
				return "Temperature: " + temp + " °";
			});
		});
	});


});
