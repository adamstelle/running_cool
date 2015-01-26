function Route(location, distance, incline) {
  this.location = location;
  this.distance = distance;
  this.incline = incline;
  this.routeRating = 0;
}

//could take user inputs as well to create new instances of a Route
var routeA = new Route("SLU", "2.5", "0"),
    routeB = new Route("Belltown", "1.75", "0"),
    routeC = new Route("Queen Ann", "5", "7");

var groupRoutes = [];
groupRoutes.push(routeA);
groupRoutes.push(routeB);
groupRoutes.push(routeC);

function compare() {
  var $location = $("#location"),
      $distance = $("#distance"),
      $incline = $("#incline");

  if ($location == groupRoutes[i].location){
    groupRoutes[i].routeRating += 1;
    if ($distance == groupRoutes[i].distance) {
      groupRoutes[i].routeRating += 1;
      if ($incline == groupRoutes[i].incline) {
        groupRoutes[i].routeRating += 1;
      }
    }
  }
}

$("#findRoute").on("click", function(){
  $("#results").append(compare());
  $("#nameResult").append("#name");
});

