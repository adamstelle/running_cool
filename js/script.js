function Route(location, distance, incline, scenery) {
  this.location    = location;
  this.distance    = distance;
  this.incline     = incline;
  this.scenery     = scenery;
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
    this.routeRating += 15;
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
  for (var i = 0; i < this.finalRatings.length; i++) {
    if (this.groupRoutes[i].routeRating == this.finalRatings[0]) {
      console.log(this.groupRoutes[i].location);
      console.log(this.groupRoutes[i].distance);
      console.log(this.groupRoutes[i].incline);
      console.log(this.groupRoutes[i].scenery);
      $("#location-result").append(this.groupRoutes[i].location);
      $("#distance-result").append(this.groupRoutes[i].distance);
      $("#incline-result").append(this.groupRoutes[i].incline);
    }
  }
}
var results = new Results();
results.addRoute(new Route ("SLU", 2.5, 0, "Amazon"));
results.addRoute(new Route ("Belltown", 7, 4, "Waterfront"));
results.addRoute(new Route ("Downtown", 16, 0, "McDonalds"));

function compare() {
  Route.prototype.routeRating = 0;
  var $location = $("#location").val(),
       distance = Number($("#distance").val()),
       incline  = Number($("#incline").val()),
       $scenery = $("#scenery").val();
  for (var i = 0; i < results.groupRoutes.length; i++) {
    results.groupRoutes[i].numberMatch(distance, results.groupRoutes[i].distance);
    results.groupRoutes[i].numberMatch(incline, results.groupRoutes[i].incline);
    results.groupRoutes[i].locationRating($location, results.groupRoutes[i].location);
    results.addRating(results.groupRoutes[i].routeRating);
  }
  console.log(results.groupRoutes[0].routeRating);
  console.log(results.finalRatings[0]);
  function compareNumbers(a,b) {
    return b - a;
  };
  results.finalRatings.sort(compareNumbers); //need to sort by number
  results.getBestRoute(); // If the first value of finalRatings is the rating of a Route, print the values and the map onto the html
}

function findMoreRoutes() {
  results.finalRatings.shift();
  results.getBestRoute();
}

$("rerun").on("click", findMoreRoutes);
$("#findmyrun").on("click", compare);
