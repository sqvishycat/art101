// Leon Linke <llinke@ucsc.edu>
// Nate Arnold <naarnold@ucsc.edu>
// June 2 2025

$(document).ready(function () {
  // Append the button
  $("#output").append("<button id='button-output'>Get a Fortune</button>");

  // Add click listener
  $("#button-output").click(function () {
    $.ajax({
      url: "http://yerkee.com/api/fortune/all", 
      type: "GET",
      dataType: "json",
      success: function (data) {
        console.log(data);
        $("#output").append("<p>" + data.fortune + "</p>");
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").append("<p>Could not fetch wisdom. Try again later.</p>");
      }
    });
  });
});
