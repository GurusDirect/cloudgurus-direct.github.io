//Hook up the tweet display

$(document).ready(function() {

	$(".countdown").countdown({
				date: "01 June 2021 12:00:00",
				format: "on"
			},

			function() {
				// callback function
			});

});
