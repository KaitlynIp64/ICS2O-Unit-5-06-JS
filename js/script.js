// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Apr 2022
// This file contains xxx

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-06-JS/sw.js", {
    scope: "/ICS2O-Unit-5-06-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
var counter = 0;
for (var counter = 0; counter <= counter; counter++) {
    var result = counter * counter;
}
for (var counter = 0; counter <= counter; counter++) {
 for (var counter = 0; counter <= 1; counter++) {
   var result = counter * counter;
//let text = "";
//let counter = 0;

//do {
//  text += "<br>The number is " + counter;
//  counter++;
//}
//while (counter < 10);  

document.getElementById("answer").innerHTML = counter + ' * ' + counter + ' = ' + result;
  }
 }
}