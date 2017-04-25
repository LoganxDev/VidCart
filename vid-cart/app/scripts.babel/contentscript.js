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

    var huluCss = '.whatever { z-index:999;width:40%;height:20px;color:white;position:absolute;top:0;left:0;background-color:#009688; }',
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
        }
        e.stopPropagation();
    }

    function removeChild(e) {
        var clickedItem = e.target.classList[0];
        if(clickedItem == 'thumbnail') {
            removeElementsByClass('whatever');
            e.target.classList.remove('added');
        }
    }



    window.onload = function() {
        console.log('worked!')
        var titleCards = document.querySelectorAll('.thumbnail');

        console.log(titleCards.length)




        for(var i = 0; i < titleCards.length; i++){
            titleCards[i].addEventListener('mouseenter', addChild);
        }


        for(var j = 0; j < titleCards.length; j++){
            titleCards[j].addEventListener('mouseleave', removeChild);
        }

    }


        // window.onscroll = function(){
        //     console.log("worked!")
        //     var titleCards = document.querySelectorAll('.row');
        //
        //     console.log(titleCards.length)
        //
        //     for(var i = 0; i < titleCards.length; i++){
        //         titleCards[i].addEventListener("mouseover",function( event ){
        //             var link = event.target.querySelector('a');
        //             console.log(link)
        //             event.target.innerHTML += addMark + event.target.innerHTML
        //             // var playLink = hoveredTitleCard.getElementByClassName("playLink");
        //             // console.log(playLink);
        //         });
        //     }
        // }
    }

if(thisSite.includes(amazonString)) {

    var amazonCss = '.whatever { z-index:999;width:20%;height:20px;color:white;position:absolute;bottom:0;left:0;background-color:#009688; }',
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
        console.log('worked!')
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
