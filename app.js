"use strict";

window.addEventListener("load", initArray);

let counting = 0;
const array = [];

function initArray() {
    setInterval(countArray, 1000);
}


function countArray() {
    counting = counting + 1
    console.log(counting);
    array.unshift(counting)
    console.log(array);

    if (array.length = 9) {
        array.pop(8);
    }
}


