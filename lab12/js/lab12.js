// Task 2: Create a JavaScript file
// Leon Linke <llinke@ucsc.edu>
// Nate Arnold <naarnold@ucsc.edu>
// May 22 2025


function sortingHat(num) {
  // get the remainder when divided by 4
  let remainder = num % 4;
  let str = "";
  
  if (remainder == 0) {
    str = "Overwatch: A group of hopeful heros that protect the world";
  } else if(remainder == 1) {
    str = "Junkers:These live in the nuclear wastes,scavenging for their Queen";
  } else if(remainder == 2) {
    str = "Null Sector: Militarized front for Omnics fighting for their right to live";
  } else if (remainder == 3) {
      str = "Talon: An evil terrorist organization that has shady motives";
  }
  return str;
}


// Attach click handler to submit button
$("#submit").click(function() {
  
// get the value in the input box / assign to a variable name

let name = $("#input").val()
console.log(name);

// get length of name

let nameLength = name.length;
console.log(nameLength);

//Get the faction
let faction = sortingHat(nameLength);
console.log(faction);

//add the faction to output div
$("#output").html("<h1>" + 'You Got:'+ "</h1>" + "<h2>" + faction + "</h2>");
})
