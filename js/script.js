function Route(name, location, distance, incline) {
  this.name        = name;
  this.location    = location;
  this.distance    = distance;
  this.incline     = incline;
  this.routeRating = 0;
}

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

finalResults.addRoute(new Route ("slu", "SLU", 2.5, 0));
finalResults.addRoute(new Route ("belltown", "Belltown", 1.75, 0));


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
  var $location = $("#location").text(),
      distance = Number($("#distance").text()),
      incline  = Number($("#incline").text());

  numberMatch(distance, groupRoutes[i].distance);
  numberMatch(incline,  groupRoutes[i].incline);

  if ($location == groupRoutes[i].location){
    groupRoutes[i].routeRating += 1;
  }


  finalResults.addRating(groupRoutes[i]);// Push scores into an array finalRatings.
  finalResults.sort(); //need to sort by number
  for (var i = 0; i <= finalResults.finalRatings.length; i++) {
    if (finalResults.groupRoutes[i] == finalResults.finalRatings[0]) {
      return [finalResults.groupRoutes[i].location, finalResults.groupRoutes[i].distance, finalResults.groupRoutes[i].incline];
    }
  }
  return groupRoutes[i].name;
// If the first value of finalRatings is the rating of a Route, print the values and the map onto the html

}

$("#findRoute").on("click", function(){
  $("#results").append(compare());
  $("#nameResult").append("#name");
});

// If the user clicks the "I want another" button then take the first value out and return the next max value
