// ==UserScript==
// @name         AC Press Paywall Remover 2
// @namespace    http://tampermonkey.net/
// @version      0.1.0.2
// @description  Fixed on 8/9/23 for AC Press
// @author       You
// @match        *.pressofatlanticcity.com/*
// @match        *pressofatlanticcity.com/*
// @icon         https://www.google.com/s2/favicons?domain=pressofatlanticcity.com
// @grant        GM_addStyle
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @downloadURL  https://github.com/srfrmac87/ACPress/raw/main/ACPress-Paywall.user.js
// @updateURL    https://github.com/srfrmac87/ACPress/raw/main/ACPress-Paywall.user.js
// ==/UserScript==
// @run-at        document-start
// ==/UserScript==


(function() {
    'use strict';
    var $ = window.jQuery;
    var timerVar = setInterval (function() {Greasemonkey_main (); }, 10);
    var trueA = false;
    var trueB = false;
    var trueC = false;
    var trueD = false;
    var trueE = false;
    var counter = 0;

    function Greasemonkey_main () {
        $("#asset-content  .lee-article-text").removeClass('lee-article-text'); // script on AC website removes html from this class, to prevent, we remove class
        $("#asset-content .inline-asset").removeClass('inline-asset'); // script on AC website removes html from this class, to prevent, we remove class

        if($('.modal-backdrop.in').length){
            $('.modal-backdrop.in').css("display", "none");
            trueA=true;
        }
        if($('div#lee-subscription-wall').length){
            $('div#lee-subscription-wall').css("display", "none");
            trueB=true;
        }
        if($('.modal-backdrop.fade.in').length){
            $('.modal-backdrop.fade.in').css("display", "none");
            trueC=true;
        }
        if($('.modal-open').length){
            $('.modal-open').css("overflow", "unset");
            trueD=true;
        }

        counter++;
        if(trueA==true && trueB==true && trueC==true && trueD==true){ // sets clearInterval for when it completes sucessfully
            clearInterval (timerVar);
            timerVar = "";
        }
        if (counter==400){ // sets clearInterval time out for this number in seconds / 100 (for above 10 ms refresh)
            clearInterval (timerVar);
            timerVar = "";
        }

}})();
