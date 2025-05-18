// Task 2: Create a JavaScript file
// Leon Linke <llinke@ucsc.edu>
// Nate Arnold <naarnold@ucsc.edu>
// May 18 2025

function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

$("#submit").click(function(){
  // get value of input field
  const userName = $("#user-name").val();

  // We have to convert our string to an array and back again to sort it
  userNameSorted = sortString(userName);

  // clear the input in the box
  $("#user-name").val(''); 

  // display sorted user name
  $("#sorted-output").html('<p>' + userNameSorted + '</p>');

  });

