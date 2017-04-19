'use strict';

console.log('VidCart will be dope af');

var thisSite = window.location.href;
var huluString = "hulu";
var netflixString = "netflix";


if(thisSite.includes(huluString)) {

    var addMark = '<div class="whatever">+</div>';

    window.onload = function() {
        console.log("worked!")
        var titleCards = document.getElementsByClassName("subtray");

        console.log(titleCards.length)


        for(var i = 0; i < titleCards.length; i++){
            titleCards[i].addEventListener("mouseenter",function( event ){
                var link = event.target.querySelector('a');
                var plus = event.target.querySelector('.whatever');
                if (!plus) {
                    event.target.innerHTML += addMark  + event.target.innerHTML
                }
                // var playLink = hoveredTitleCard.getElementByClassName("playLink");
                // console.log(playLink);
            });
        }

        for(var i = 0; i < titleCards.length; i++){
            titleCards[i].addEventListener("mouseexit",function( event ){
                var link = event.target.querySelector('a');
                event.target.innerHTML = event.target.innerHTML.slice(addMark.length);
                // var playLink = hoveredTitleCard.getElementByClassName("playLink");
                // console.log(playLink);
            });
        }
    }

    window.onscroll = function(){
        console.log("worked!")
        var titleCards = document.getElementsByClassName("subtray");

        console.log(titleCards.length)

        for(var i = 0; i < titleCards.length; i++){
            titleCards[i].addEventListener("mouseover",function( event ){
                var link = event.target.querySelector('a');
                console.log(link)
                event.target.innerHTML += addMark + event.target.innerHTML
                // var playLink = hoveredTitleCard.getElementByClassName("playLink");
                // console.log(playLink);
            });
        }
    }
}

// helloworld();
//
// window.addEventListener("scroll", getShows);
// //
// function getShows() {
//     var titleCards = document.getElementsByClassName("slider-item");
//
//     console.log(titleCards.length)
//
//     for(var i = 0; i < titleCards.length; i++){
//         console.log(titleCards[i])
//         // titleCards[i].addEventListener("mouseover",function(){
//         //     var titleCard = titleCards[i];
//         //     console.log( titleCard );
//         //     // var playLink = hoveredTitleCard.getElementByClassName("playLink");
//         //     // console.log(playLink);
//         // });
//     }
// }
