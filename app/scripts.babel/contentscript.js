'use strict';

console.log('VidCart will be dope af');

var thisSite = window.location.href;
var huluString = 'hulu';
var netflixString = 'netflix';
var amazonString = 'amazon';

function removeElementsByClass(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}


var addMark = '<div id="addMark" class="whatever">ADD</div>';




if(thisSite.includes(huluString)) {

    var huluCss = '.whatever { z-index:1000;width:30%;height:20px;color:white;position:absolute;top:0;left:0;background-color:#009688; } .whatever:hover { color:white; background-color: #71d4f4;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
          style.styleSheet.cssText = huluCss;
        } else {
          style.appendChild(document.createTextNode(huluCss));
        }

        head.appendChild(style);


    function addChild(e) {
        var clickedItem = e.target.classList[0];
        if(clickedItem == 'thumbnail' && !e.target.classList.contains('added')) {
            e.target.classList.add('added');
            e.target.innerHTML += addMark;
            var el = document.getElementById('addMark');
            el.onclick = showFoo;

            function showFoo() {
                console.log('got into click.')
                var please = e.target;
                var playLink = please.getElementsByTagName('a');
                var nameArr = playLink[0].href.split(".com/");
                var showName = (nameArr[1].split("-")).join(' ');
                var thisLink = playLink[0].href;
                console.log(thisLink)
                // to initialize the all data using the storage
                chrome.storage.sync.get({shows:[]}, function(data) {
                   data.shows.push({
                        name: showName,
                        platform: 'hulu',
                        link: thisLink
                      });
                  chrome.storage.sync.set(data, function(){
                    console.log('set it');
                });

                });

  
                
                return false;
            }
        e.stopPropagation();   
        }
    }





    function removeChild(e) {
        var clickedItem = e.target.classList[0];
        if(clickedItem == 'thumbnail') {
            removeElementsByClass('whatever');
            e.target.classList.remove('added');
        }
    }



    window.onload = function() {
        var titleCards = document.querySelectorAll('.thumbnail');


        for(var i = 0; i < titleCards.length; i++){
            titleCards[i].addEventListener('mouseenter', addChild);
        }


        for(var j = 0; j < titleCards.length; j++){
            titleCards[j].addEventListener('mouseleave', removeChild);
        }

    }


        window.onscroll = function(){
            var titleCards = document.querySelectorAll('.thumbnail');

            for(var i = 0; i < titleCards.length; i++){
                titleCards[i].addEventListener('mouseenter', addChild);
            }


            for(var j = 0; j < titleCards.length; j++){
                titleCards[j].addEventListener('mouseleave', removeChild);
            }
        }
    }

if(thisSite.includes(netflixString)) {

        var huluCss = '.whatever { z-index:999;width:40%;height:20px;color:white;position:absolute;top:0;left:0;background-color:#009688; } .whatever:hover { color:white; background-color: #71d4f4;}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');

            style.type = 'text/css';
            if (style.styleSheet){
              style.styleSheet.cssText = huluCss;
            } else {
              style.appendChild(document.createTextNode(huluCss));
            }

            head.appendChild(style);


        function addChild(e) {
            var tester = e.target.childNodes;
            console.log(tester)
            var clickedItem = e.target.classList[0];
            if(clickedItem == 'video-artwork' && !e.target.classList.contains('added')) {
                e.target.classList.add('added');
                e.target.innerHTML += addMark;
                var el = document.getElementById('addMark');
                el.onclick = showFoo;

            function showFoo() {
                var please = e.target;
                var playLink = please.querySelector('a');
                alert(playLink);
                return false;
            }
            }
            e.stopPropagation();
        }

        function removeChild(e) {
            var clickedItem = e.target.classList[0];
            if(clickedItem == 'video-artwork') {
                removeElementsByClass('whatever');
                e.target.classList.remove('added');
            }
        }



        window.onload = function() {
            console.log('worked!')
            var titleCards = document.querySelectorAll('.video-artwork');

            console.log(titleCards.length)




            for(var i = 0; i < titleCards.length; i++){
                titleCards[i].addEventListener('mouseenter', addChild);
            }


            for(var j = 0; j < titleCards.length; j++){
                titleCards[j].addEventListener('mouseleave', removeChild);
            }

        }


            window.onscroll = function(){
                var titleCards = document.querySelectorAll('.video-artwork');

                for(var i = 0; i < titleCards.length; i++){
                    titleCards[i].addEventListener('mouseenter', addChild);
                }


                for(var j = 0; j < titleCards.length; j++){
                    titleCards[j].addEventListener('mouseleave', removeChild);
                }
            }
        }

if(thisSite.includes(amazonString)) {

    var amazonCss = '.whatever { z-index:999;width:20%;height:20px;color:white;position:absolute;bottom:0;left:0;background-color:#009688; } .whatever:hover { color:white; background-color: #71d4f4;}',
        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet){
          style.styleSheet.cssText = amazonCss;
        } else {
          style.appendChild(document.createTextNode(amazonCss));
        }

        head.appendChild(style);

        function addChild(e) {
            var clickedItem = e.target.classList;
            if(clickedItem.contains('dv-tile') && !e.target.classList.contains('added')) {
                e.target.classList.add('added');
                e.target.innerHTML += addMark;
                var el = document.getElementById('addMark');
                el.onclick = showFoo;

            function showFoo() {
                var please = e.target;
                var playLink = please.getElementsByTagName('a');
                var panel = document.getElementById('uh-title');
                var thisLink = playLink[0].href;
                var showName = panel.textContent;
                // to initialize the all data using the storage
                chrome.storage.sync.get({shows:[]}, function(data) {
                   data.shows.push({
                        name: showName,
                        platform: 'hulu',
                        link: thisLink
                      });
                  chrome.storage.sync.set(data, function(){
                    console.log('set it');
                });

                });
                return false;
            }
            }
            e.stopPropagation();
        }

        function removeChild(e) {
            var clickedItem = e.target.classList;
            if(clickedItem.contains('dv-tile')) {
                removeElementsByClass('whatever');
                e.target.classList.remove('added');
            }
        }

    window.onload = function() {
        var titleCards = document.getElementsByClassName('dv-tile');


        for(var i = 0; i < titleCards.length; i++){
            titleCards[i].addEventListener('mouseenter', addChild);
        }

        for(var j = 0; j < titleCards.length; j++){
            titleCards[j].addEventListener('mouseleave', removeChild);
        }

    }

    window.onscroll = function(){
        console.log('scroll function worked!')
        var titleCards = document.getElementsByClassName('dv-tile');
        console.log(titleCards.length)

        for(var i = 0; i < titleCards.length; i++){
            titleCards[i].addEventListener('mouseenter', addChild);
        }


        for(var j = 0; j < titleCards.length; j++){
            titleCards[j].addEventListener('mouseleave', removeChild);
        }
    }
}
