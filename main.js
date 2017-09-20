


$(document).ready(function() {

	// var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q="Kiev"&&APPID=fc3da5f655d9b4c55ce7786120594255&units=metric";	

	$(".form__button").click(function() {
		var a = $(".form__input").val();
		console.log(a);

		var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q=" + a + "&&APPID=fc3da5f655d9b4c55ce7786120594255&units=metric";	
		$.getJSON(weatherAPI, function(objektAPI) {
			console.log(objektAPI.main);
		});
	});


});
