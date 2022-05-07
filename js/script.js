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
var counter = 1;
for (var counter = 0; counter <= 10; i++) {
    var result = counter * counter;
    console.log(counter + ' * ' + counter + ' = ' + result);
}


for (var counter = 0; counter <= 10; counter++) {
 for (var counter = 0; counter <= 10; counter++) {
   var result = counter * counter;
   console.log(counter + ' * ' + counter + ' = ' + result);
//let text = "";
//let counter = 0;

//do {
//  text += "<br>The number is " + counter;
//  counter++;
//}
//while (counter < 10);  

document.getElementById("answer").innerHTML = "The answer is " + counter;
  }
 }
}