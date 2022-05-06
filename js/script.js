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
  var sideA = document.getElementById("sideA").value;
  var sideB = document.getElementById("sideB").value;
  var sideC = document.getElementById("sideC").value;
  // process
  if (sideA == sideB && sideB == sideC) {
    document.getElementById("answer").innerHTML =
      "This is an equilateral triangle.";
  } else if (sideA == sideB || sideB == sideC || sideA == sideC) {
    document.getElementById("answer").innerHTML =
      "This is an isosceles triangle.";
  } else {
    document.getElementById("answer").innerHTML = "This is a scalene triangle.";
  }
}
