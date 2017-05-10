'use strict';

console.log('\'Allo \'Allo! Popup');

var console = chrome.extension.getBackgroundPage().console;


var app = {

	init: function() {

		chrome.storage.sync.get('shows' ,function(show){
			console.log(show.id.name);
		});

	}

}



document.addEventListener("DOMContentLoaded", function() {
	app.init();
});