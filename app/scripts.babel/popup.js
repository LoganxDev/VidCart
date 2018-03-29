'use strict';

console.log('\'Allo \'Allo! Popup');

var console = chrome.extension.getBackgroundPage().console;


var app = {

	init: function() {
		chrome.storage.sync.get({shows: []},function(data){
			for(var i = 0; i < data.shows.length; i++){
        var show = data.shows[i];
        /* Each show has an attribute containing a link to the show. */
				document.body.innerHTML += '<div data-show="' + show.link + '" class="showDiv">' + show.name + '</div></br>';
			}

      var openShow =  function(){
        chrome.tabs.create({active: true, url: this.getAttribute("data-show")});
      };

      var showDivs = document.getElementsByClassName("showDiv");
      for (var i = 0; i < showDivs.length; i++) {
          showDivs[i].addEventListener('click', openShow, false);
      }
		});
	}

}



document.addEventListener("DOMContentLoaded", function() {
	app.init();
});