// Task 3: Create a JavaScript file using jQuery
// Leon Linke <llinke@ucsc.edu>
// Nate Arnold <naarnold@ucsc.edu>
// May 12 2025

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});

$("#problems").append("<button id='button-problems'>Make Awesome</button>");

// add a click listener to the challenge button
$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("awesome");
});

$("#results").append("<button id='button-results'>Make Cool</button>");

// add a click listener to the challenge button
$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#results").toggleClass("cool");
});

$("#output").append("<button id='button-output'>Make Amazing</button>");

// add a click listener to the challenge button
$("#button-output").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#output").toggleClass("amazing");
});