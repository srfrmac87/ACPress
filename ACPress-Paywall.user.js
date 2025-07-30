// ==UserScript==
// @name         AC Press Paywall Remover
// @version      1.0.3
// @description  Updated 7/30/25 to remove jquery and convert functions to Javascript
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
    var counter = 0;

    function Greasemonkey_main() {
       if(document.querySelectorAll(".modal-backdrop.fade.in").length > 0){ // This creates an array of items, that need to be iterated through
            document.querySelectorAll(".modal-backdrop.fade.in").forEach(function(el) {
                el.style.display = "none"; // This hides a transparent background popup
            });
            trueA=true;
        }
        if(document.querySelectorAll(".modal-open").length > 0){ // This re-enables the scroll bar
            document.querySelectorAll(".modal-open").forEach(function(el) {
                el.style.overflow = "unset"; // This changes overflow to be able to get scroll bar back (can use remove class .modal-open?)
            });
            document.body.classList.remove('modal-open');
            trueB=true;
        }
        if(document.getElementById("access-offers-modal")){
            document.getElementById("access-offers-modal").style.display = "none"; // This hides the popup box for the paywall
            trueC=true;
        }
        if(document.getElementById("asset-content").hasAttribute("hidden")){
            document.getElementById("asset-content").removeAttribute("hidden"); // This unhides the article
            trueD=true;
        }
        if(document.getElementById("asset-content").hasAttribute("hidden")){
            document.getElementById("asset-content").removeAttribute("hidden"); // This unhides the article again, because it trys again
            trueE=true;
        }
        counter++;
        if(trueA==true && trueB==true && trueC==true && trueD==true && trueE==true){ // sets clearInterval for when it completes sucessfully
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
