// ==UserScript==
// @name         AC Press Paywall Remover
// @version      1.0.2
// @description  Updated 8/7/24 to remove jquery and convert functions to Javascript
// @author       You
// @match        *.pressofatlanticcity.com/*
// @match        *pressofatlanticcity.com/*
// @icon         https://www.google.com/s2/favicons?domain=pressofatlanticcity.com
// @downloadURL  https://github.com/srfrmac87/ACPress/raw/main/ACPress-Paywall.user.js
// @updateURL    https://github.com/srfrmac87/ACPress/raw/main/ACPress-Paywall.user.js
// @run-at       document-start
// ==/UserScript==

(function () {
    "use strict";
    var timerVar = setInterval(function () {Greasemonkey_main(); }, 10);
    var trueA = false;
    var trueB = false;
    var trueC = false;
    var trueD = false;
    var trueE = false;
    var trueF = false;
    var counter = 0;

    function Greasemonkey_main() {
		// AC Press website has a script that removes the html from with the class .inline-asset and  .lee-article-text, to prevent, we remove these classes...may involve #asset-content
        if(document.getElementsByClassName("lee-article-text")){
            var leeArticleText = document.getElementsByClassName("lee-article-text");
            for(var i = 0; i < leeArticleText.length; i++)// this selects all elements by class with lee-article-text then removes that class *****updated 8/6/2024*****
            {
                    leeArticleText[i].classList.remove("lee-article-text");
            }
			trueA=true;
        }
        if(document.getElementsByClassName("inline-asset")){
            var inlineAsset = document.getElementsByClassName("inline-asset");
            for(var j = 0; j < inlineAsset.length; j++)// this selects all elements by class with lee-article-text then removes that class *****updated 8/6/2024*****
            {
                    inlineAsset[j].classList.remove("inline-asset");
            }
			trueB=true;
        }
        if(document.querySelectorAll(".modal-backdrop.in").length > 0){ // This creates an array of items, that need to be iterated through
            document.querySelectorAll(".modal-backdrop.in").forEach(function(el) {
                el.style.display = "none"; // This hides a second transparent background popup
            });
            trueC=true;
        }
        if(document.getElementById("lee-subscription-wall")){
            document.getElementById("lee-subscription-wall").style.display = "none"; // This hides the popup box for the paywall
            trueD=true;
        }
        if(document.querySelectorAll(".modal-backdrop.fade.in").length > 0){ // This creates an array of items, that need to be iterated through
            document.querySelectorAll(".modal-backdrop.fade.in").forEach(function(el) {
                el.style.display = "none"; // This hides a transparent background popup
            });
            trueE=true;
        }
        if(document.querySelectorAll(".modal-open").length > 0){ // This creates an array of items, that need to be iterated through
            document.querySelectorAll(".modal-open").forEach(function(el) {
                el.style.overflow = "unset"; // This changes overflow to be able to get scroll bar back (can use remove class .modal-open?)
            });
            trueF=true;
        }
        counter++;
        if(trueA==true && trueB==true && trueC==true && trueD==true && trueE==true && trueF==true){ // sets clearInterval for when it completes sucessfully
            clearInterval(timerVar);
            timerVar = "";
        }
        if (counter==600){ // sets clearInterval timeout in seconds....6 seconds = 600 cycles/ 100 times per second for above 10 ms refresh
            clearInterval(timerVar);
            timerVar = "";
        }
	}
}
)();
