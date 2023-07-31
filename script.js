// ==UserScript==
// @name         Discord Emoji System
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.instagram.com/*
// @icon         https://static.cdninstagram.com/rsrc.php/v3/yt/r/30PrGfR3xhB.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let chart = localStorage.getItem("emojis_emoticons_chart") ? JSON.parse(localStorage.getItem("emojis_emoticons_chart")) : {}
    let foo = () => {
        document.querySelectorAll("textarea").forEach(textarea => {
            textarea.onkeyup = () => {
                textarea.value.match(/(?<=:)[^:]+(?=:)/g)?.forEach(match => {
                    let key, value

                    if(/^.+=.+$/.test(match)) {
                        [key, value] = match.split("=")

                        chart[key] = value
                        localStorage.setItem("emojis_emoticons_chart", JSON.stringify(chart))
                    }

                    else {
                        [key, value] = [match, chart[match]]
                    }


                    if(value) {
                        textarea.value = textarea.value.replace(`:${match}:`, value)
                    }
                })
            }})
    }

    setTimeout(foo, 3000)
    document.onclick = () => {setTimeout(foo, 500)}
})();
