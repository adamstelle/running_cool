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
};
Route.prototype.locationRating = function(a, b) {
  if (a == b){
    this.routeRating += 15;
  }
};

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
      $("#location-result").text(this.groupRoutes[i].location);
      $("#distance-result").text(this.groupRoutes[i].distance);
      $("#incline-result").text(this.groupRoutes[i].incline);
      $("#scenery-result").text(this.groupRoutes[i].scenery);
    }
  }
};

var results = new Results();
results.addRoute(new Route ("SLU", 2.5, 0, "Amazon"));
results.addRoute(new Route ("Belltown", 7, 4, "Waterfront"));
results.addRoute(new Route ("Downtown", 16, 0, "McDonalds"));

function store() {
  if($(".valueError").length !== 0) {
    $("formError").remove();
    $(".buttonstyle").after("<p class='formError'>You 'ave to insert your values properly man!</p>");
    event.preventDefault();
  } else {
  var userValues = {};
  userValues["location"] = $("#location").val();
  userValues["distance"] = Number($("#distance").val());
  userValues["incline"]  = Number($("#incline").val());
  var jsonObj = JSON.stringify(userValues);
  localStorage.setItem("storedInputs", jsonObj);
  }
}

function compare() {
  Route.prototype.routeRating = 0;
  var storedInputs = JSON.parse(localStorage.getItem("storedInputs"));
  for (var i = 0; i < results.groupRoutes.length; i++) {
    results.groupRoutes[i].numberMatch(storedInputs.distance, results.groupRoutes[i].distance);
    results.groupRoutes[i].numberMatch(storedInputs.incline, results.groupRoutes[i].incline);
    results.groupRoutes[i].locationRating(storedInputs.location, results.groupRoutes[i].location);
    results.addRating(results.groupRoutes[i].routeRating);
  }
  function compareNumbers(a,b) {
    return b - a;
  }
  results.finalRatings.sort(compareNumbers); //need to sort by number
  results.getBestRoute(); // If the first value of finalRatings is the rating of a Route, print the values and the map onto the html
}

function findMoreRoutes() {
  results.finalRatings.shift();
  results.getBestRoute();
}



$("#rerun").on("click", findMoreRoutes);
$("#findmyrun").on("click", store);
$(document).ready(function() {
  if ($("#distance-result").length) {
    compare();
  }
});
$("input").on("blur", function() {
  $(".valueError").remove();
  if($(this).val().length === 0) {
    $(this).after("<p class='valueError'>Please enter a value.</p>");
  }
});
