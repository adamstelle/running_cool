function Route(location, distance, incline) {
  this.location    = location;
  this.distance    = distance;
  this.incline     = incline;
  this.routeRating = 0;
}
Route.prototype.numberMatch = function(a, b) { //Increases rating according to how close the value is to the user input
  var differential = Math.abs(a - b);
  if (differential <= 2) {
    this.routeRating += 5;
  } else if(differential <= 4) {
    this.routeRating += 4;
  } else if(differential <= 6) {
    this.routeRating += 3;
  } else if (differential <= 8) {
    this.routeRating += 2;
  } else {
    this.routeRating += 1;
  }
}
Route.prototype.locationRating = function(a, b) {
  if (a == b){
    this.routeRating += 1;
  }
}

function Results() {
this.groupRoutes = [];
this.finalRatings = [];
}
Results.prototype.addRoute = function(route) {
  this.groupRoutes.push(route);
};
Results.prototype.addRating = function(rating) {
  this.finalRatings.push(rating);
};
Results.prototype.getBestRoute = function(){ //Returns best route according to the ratings
  for (var i = 0; i <= this.finalRatings.length; i++) {
    if (this.groupRoutes[i].routeRating == this.finalRatings[0]) {
      $("#location").append(this.groupRoutes[i].location);
      $("#distance").append(this.groupRoutes[i].distance);
      $("#incline").append(this.groupRoutes[i].incline);
    }
  }
}
var results = new Results();

results.addRoute(new Route ("SLU", 2.5, 0));
results.addRoute(new Route ("Belltown", 1.75, 0));

function compare() {
  var $location = $("#location").text(),
       distance = Number($("#distance").text()),
       incline  = Number($("#incline").text());

  for (var i = 0; results.groupRoutes.length; i++) {
    results.groupRoutes[i].numberMatch(distance, results.groupRoutes[i].distance);
    results.groupRoutes[i].numberMatch(incline, results.groupRoutes[i].incline);
    results.addRating(results.groupRoutes[i].routeRating);
  }
  results.sort(); //need to sort by number
  results.getBestRoute(); // If the first value of finalRatings is the rating of a Route, print the values and the map onto the html
}

$("#findRoute").on("click", function(){
  $("#results").append(compare());
  $("#nameResult").append("#name");
});

// If the user clicks the "I want another" button then take the first value out and return the next max value
