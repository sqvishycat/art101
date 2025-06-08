// Task 2: Create a JavaScript file
// Leon Linke <llinke@ucsc.edu>
// Nate Arnold <naarnold@ucsc.edu>
// Jun 2 2025


$(document).ready(function () {
  // Add the button
  $("#output").append("<button id='button-output'>Get Random Pokémon</button>");

  // Add a container to hold the Pokémon result
  $("#output").append("<div id='pokemon-container'></div>");

  // Button click handler
  $("#button-output").click(function () {
    let randomId = Math.floor(Math.random() * 898) + 1; // Valid Pokémon IDs

    // Clear previous Pokémon
    $("#pokemon-container").empty();

    $.ajax({
      url: `https://pokeapi.co/api/v2/pokemon/${randomId}`,
      type: "GET",
      dataType: "json",
      success: function (data) {
        let name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        let sprite = data.sprites.front_default;

        // Display Pokémon info
        $("#pokemon-container").append(`
          <div class="pokemon-card">
            <h3>${name}</h3>
            <img src="${sprite}" alt="${name}" />
          </div>
        `);
      },
      error: function () {
        $("#pokemon-container").append("<p>Couldn't fetch a Pokémon. Try again!</p>");
      }
    });
  });
});
