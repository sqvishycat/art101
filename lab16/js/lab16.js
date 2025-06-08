// Task 2: Create a JavaScript file
// Leon Linke <llinke@ucsc.edu>
// Nate Arnold <naarnold@ucsc.edu>
// Jun 5 2025

$(document).ready(function() {
  $.ajax({
    url: "https://cataas.com/cat/gif",    // Get a random cat GIF :contentReference[oaicite:0]{index=0}
    type: "GET",
    dataType: "json",
    success: function(data) {
      // The API returns something like
      //   { "id": "5678", "url": "https://cataas.com/cat/5678.gif" }
      var gifUrl = data.url;
      // If for some reason it's a relative path, prefix with the host:
      if (!gifUrl.startsWith("http")) {
        gifUrl = "https://cataas.com" + gifUrl;
      }
      // Inject an <img> into the <div id="output"><p>…</p></div>
      $("#output p").html(
        '<img src="' + gifUrl + '" alt="Random Cat GIF" />'
      );
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error("Error fetching cat GIF:", textStatus, errorThrown);
      $("#output p").text(
        "Sorry, could not load a cat GIF right now."
      );
    }
  });
});
