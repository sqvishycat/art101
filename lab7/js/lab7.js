// Task 2: Create a JavaScript file
// Leon Linke <llinke@ucsc.edu>
// Nate Arnold <naarnold@ucsc.edu>
// May 4 2025

// create a function

function sortUserName () {
  var userName = window.prompt("Hello. Give me your username so I can sort the letters.");
  console.log("userName =", userName);
  // put letters into an array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  // sort array
  var nameArraySort = nameArray.sort();  
  console.log("nameArraySort =",nameArraySort);
  // put array together into a string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
    return nameSorted;
}

// output
document.writeln("Heres your sorted name: ",
  sortUserName(),"<br>");

  