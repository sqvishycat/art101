// Task 2: Create a JavaScript file
// Leon Linke <llinke@ucsc.edu>
// Nate Arnold <naarnold@ucsc.edu>
// May 26 2025

function fizzBuzzBoom() {
  // Clear previous content
  $("#output").html(""); 

  for (let i = 1; i <= 200; i++) {
    let str = "";

    if (i % 3 === 0) str += "Fizz";
    if (i % 5 === 0) str += "Buzz";
    if (i % 7 === 0) str += "Boom";

    if (str === "") {
      $("#output").append("<p>" + i + "</p>");
    } else {
      $("#output").append("<p>" + i + " " + str + "!" + "</p>");
    }
  }
}

// Run on page load
$(document).ready(function () {
  fizzBuzzBoom();
});