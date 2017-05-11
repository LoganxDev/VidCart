'use strict';

console.log('\'Allo \'Allo! Popup');

var console = chrome.extension.getBackgroundPage().console;


var app = {

	init: function() {

		chrome.storage.sync.get({shows: []},function(data){
			console.log('hey')
		
			// Find a <table> element with id="myTable":
			var table = document.getElementById("myTable");

			// Create an empty <tr> element and add it to the 1st position of the table:
			var i;
			var len = data.shows.length;
			for(i = 0; i < len; i++){

				var str = '<div class="showDiv">' + data.shows[i].name + '</div></br>';
				var thisLink = data.shows[i].link;
				document.body.innerHTML += str;
				var theseShows = document.getElementsByClassName('showDiv');

				console.log(data.shows[i].link);
				
				
				theseShows[i].onclick = function() {
					chrome.tabs.create({active: true, url: thisLink});
					console.log('stuffs')
				};
				// cell2.innerHTML = data.shows[i].link;
			}
		});

	}

}



document.addEventListener("DOMContentLoaded", function() {
	app.init();
});