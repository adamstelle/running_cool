function Route(location, distance, incline) {
  this.location    = location;
  this.distance    = distance;
  this.incline     = incline;
  this.routeRating = 0;
}

//could take user inputs as well to create new instances of a Route
var routeA = new Route("SLU", "2.5", "0"),
    routeB = new Route("Belltown", "1.75", "0"),
    routeC = new Route("Queen Ann", "5", "7"),
    routeD = new Route("Capitol Hill", "6", "8");

function Results() {
this.groupRoutes = [];
this.finalRatings = [];
}

Results.prototype.addRoute = function(route) {
  this.groupRoutes.push(route);
};
Results.prototype.addRating = function(route) {
  this.finalRatings.push(route);
};

var finalResults = new Results();

finalResults.addRoute(new Route ("SLU", 2.5, 0));
finalResults.addRoute(new Route ("Belltown", 1.75, 0));


function numberMatch(a, b) {
  var distDiff = Math.abs(a - b);
  if (distDiff <= 2) {
    Route.prototype.routeRating += 5;
  } else if(distDiff <= 4) {
    Route.prototype.routeRating += 4;
  } else if(distDiff <= 6) {
    Route.prototype.routeRating += 3;
  } else if (distDiff <= 8) {
    Route.prototype.routeRating += 2;
  } else {
    Route.prototype.routeRating += 1;
  }
}

function compare() {
  var $location = $("#location"),
      $distance = $("#distance"),
      $incline  = $("#incline");

  numberMatch($distance, groupRoutes[i].distance);
  numberMatch($incline,  groupRoutes[i].incline);

  if ($location == groupRoutes[i].location){
    groupRoutes[i].routeRating += 1;
  }

// Push scores into an array finalRatings. Sort the array by number method
// If the first value of finalRatings is the rating of a Route, print the values and the map onto the html

}

$("#findRoute").on("click", function(){
  $("#results").append(compare());
  $("#nameResult").append("#name");
});

// If the user clicks the "I want another" button then take the first value out and return the next max value
