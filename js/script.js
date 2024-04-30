// Copyright (c) 2024 Dang All rights reserved
//
// Created by: Dang
// Created on: April 2024
// This file contains the JS functions for index.html

function checking() {
  const usernumber = parseInt(document.getElementById("number").value)
  const day = document.getElementById("day").value
  if ((day == "Tuesday")|| (day == "Thurday")|| (usernumber>12)&& (usernumber<21) )  {
    document.getElementById("result").innerHTML = "you are eligible student for pricing!"
  }
  else {
    document.getElementById("result").innerHTML = "you must pay regular price"
  }
}