// Task 2: A JavaScript Program
// Leon Linke <llinke@ucsc.edu>
// Nate Arnold <naarnold@ucsc.edu>
// April 28 2024

// array variables
myTransport = ["Toyota corolla", "bus", "ebike", "uber", "rides from friends"];

// object variables
var myMainRide = {
    make: "Toyota",
    model: "Corolla",
    color: "Silver",
    year: 1985,
    currentYear: 2025,

    age: function() {
        return this.currentYear - this.year;
      }
    }

// output
document.writeln("Kinds of transportation we use: ", myTransport, "</br>");  

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");