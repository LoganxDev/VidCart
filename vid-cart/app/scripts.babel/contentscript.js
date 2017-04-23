'use strict';

console.log('VidCart will be dope af');

var thisSite = window.location.href;
var huluString = "hulu";
var netflixString = "netflix";
var amazonString = "amazon"

var addMark = '<div id="addMark" class="whatever">hello world</div> <style>.whatever{margin-top:-100px;display:inline-block;z-index:1;width:100px;height:100px;color:white;background-color:green;position:relative;}</style>';



if(thisSite.includes(huluString)) {

    var addMark = '<div id="addMark" class="whatever">hello world</div> <style>.whatever{margin-top:-100px;display:inline-block;z-index:1;width:100px;height:100px;color:white;background-color:green;position:relative;}</style>';

    function addChild() {
        console.log("entered")
        var div = document.getElementsByClassName('subtray')[0];

        // addMark.addEventListener("click", function closeSelf() {
        //     document.body.removeChild(div[0]);
        // }, false);

        console.log(div)
        // var firstDiv = div.innerHTML;
        div.innerHTML += addMark;
        // div.appendChild(addMark);

        // document.body.appendChild(div);
        // console.log(firstDiv)
    }


    window.onload = function() {
        console.log("worked!")
        var titleCards = document.getElementsByClassName("subtray");

        console.log(titleCards.length)


        for(var i = 0; i < titleCards.length; i++){
            titleCards[i].addEventListener("mouseenter", addChild);

            // for(var i = 0; i < titleCards.length; i++){
            //     titleCards[i].addEventListener("mouseexit",function( event ){
            //         var link = event.target.querySelector('a');
            //         event.target.innerHTML = event.target.innerHTML.slice(addMark.length);
            //         // var playLink = hoveredTitleCard.getElementByClassName("playLink");
            //         // console.log(playLink);
            //     });
            // }
        }

        // window.onscroll = function(){
        //     console.log("worked!")
        //     var titleCards = document.getElementsByClassName("subtray");
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
}

if(thisSite.includes(amazonString)) {

    function addChild() {
        console.log("entered")
        var div = document.getElementsByClassName('dv-shelf-item')[0];

        // addMark.addEventListener("click", function closeSelf() {
        //     document.body.removeChild(div[0]);
        // }, false);

        console.log(div)
        // var firstDiv = div.innerHTML;
        div.innerHTML += addMark;
        // div.appendChild(addMark);

        // document.body.appendChild(div);
        // console.log(firstDiv)
    }

    window.onload = function() {
        console.log("worked!")
        var titleCards = document.getElementsByClassName("dv-shelf-item");

        console.log(titleCards.length)


        for(var i = 0; i < titleCards.length; i++){
            titleCards[i].addEventListener("mouseover", addChild);

            // for(var i = 0; i < titleCards.length; i++){
            //     titleCards[i].addEventListener("mouseexit",function( event ){
            //         var link = event.target.querySelector('a');
            //         event.target.innerHTML = event.target.innerHTML.slice(addMark.length);
            //         // var playLink = hoveredTitleCard.getElementByClassName("playLink");
            //         // console.log(playLink);
            //     });
            // }
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
