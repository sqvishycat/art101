// Task 3: Create a JavaScript file
// Leon Linke <llinke@ucsc.edu>
// Nate Arnold <naarnold@ucsc.edu>
// May 8 2025

function isPositive(x) {
  var results = (x > 0);
  return results
}

numbers = [1738, 8, 9, -87, 69, -420, 22, 18, 1, -2, 4, -37, 54, -45, 23, -90];

numbers.map(isPositive);

numbers.map(function(x){
    var results = (x < 0);
    return results;
})

console.log("Is 1 positive? ", isPositive(1));
console.log("Is -254 positive? ", isPositive(-254))  

