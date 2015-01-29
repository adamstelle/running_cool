function Route(name, location, distance, incline, scenery, mapId) {
  this.name        = name;
  this.location    = location;
  this.distance    = distance;
  this.incline     = incline;
  this.scenery     = scenery;
  this.mapId       = mapId;
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
      $("#route-result").text(this.groupRoutes[i].name);
      $("#distance-result").text(this.groupRoutes[i].distance);
      $("#incline-result").text(this.groupRoutes[i].incline);
      $("#scenery-result").text(this.groupRoutes[i].scenery);
      $("#googleMap").html($.parseHTML(this.groupRoutes[i].mapId));
    }
  }
};

var locationMaps = {
  "Ballard"      : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21490.800471663748!2d-122.38718025!3d47.677621250000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015d57a5da881%3A0xd07680ac0ad3f49c!2sBallard%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1422477120614" frameborder="0" width=100% height=100% style="border:0"></iframe>',
  "SLU"          : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10755.818856667463!2d-122.336762!3d47.627011549999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490153bc67a5d5b%3A0xa91e9c10a999a3be!2sSouth+Lake+Union%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1422477079517" frameborder="0" width=100% height=100% style="border:0"></iframe>',
  "Downtown"     : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21520.537162113087!2d-122.33553720000003!3d47.60538405000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab6b122572d%3A0x4cc65f51348e1d43!2sDowntown%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1422477160089" frameborder="0" width=100% height=100% style="border:0"></iframe>',
  "Capitol Hill" : '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21511.28665154784!2d-122.3158121!3d47.62786454999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490152857c86161%3A0xef487dc6bbc25185!2sCapitol+Hill%2C+Seattle%2C+WA!5e0!3m2!1sen!2sus!4v1422477188401" frameborder="0" width=100% height=100% style="border:0"></iframe>'
};

var results = new Results();
results.addRoute(new Route ("Lake Union Loop", "SLU", 6.1, 1, "Amazon, Waterfront", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m31!1m12!1m3!1d21506.15591166605!2d-122.34592607280044!3d47.64032975512734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m16!1i0!3e2!4m5!1s0x5490153bdc42ba65%3A0xc2981a6ccaed5d7d!2sLake+Union+Park%2C+860+Terry+Ave+N%2C+Seattle%2C+WA+98109!3m2!1d47.626393!2d-122.33721299999999!4m3!3m2!1d47.653005799999995!2d-122.3283295!4m3!3m2!1d47.6263868!2d-122.33527679999999!5e0!3m2!1sen!2sus!4v1422474394529" frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("Fremont Frolic", "SLU", 2.1, 0, "Fremont Bridge, Fremont Troll", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m29!1m12!1m3!1d21506.00644977988!2d-122.35045181767882!3d47.64069283782489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m14!1i0!3e2!4m5!1s0x5490153bdc42ba65%3A0xc2981a6ccaed5d7d!2sLake+Union+Park%2C+Seattle%2C+WA!3m2!1d47.626393!2d-122.33721299999999!4m5!1s0x549015ac65a569d5%3A0xa2c5a5c295534d98!2sFremont%2C+Seattle%2C+WA!3m2!1d47.6541773!2d-122.3500004!5e0!3m2!1sen!2sus!4v1422474475708" frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("Eastlake Easy", "SLU", 3.2, 2, "Restaurants, University Bridge", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m35!1m12!1m3!1d21506.948176639617!2d-122.32361900605433!3d47.63840509762534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m20!1i0!3e2!4m5!1s0x5490153bdc42ba65%3A0xc2981a6ccaed5d7d!2sLake+Union+Park%2C+Seattle%2C+WA!3m2!1d47.626393!2d-122.33721299999999!4m5!1s0x549014f00c221605%3A0xd41a144ed23ae38a!2sSebi&#39;s+Bistro%2C+Eastlake+Avenue+East%2C+Seattle%2C+WA!3m2!1d47.651233!2d-122.321235!4m5!1s0x549014c2baf38bb5%3A0xb6e98d65de859b0b!2sMontlake+Playfield%2C+East+Calhoun+Street%2C+Seattle%2C+WA!3m2!1d47.641951!2d-122.30917!5e0!3m2!1sen!2sus!4v1422475074949" frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("Discovery Park Death March", "Ballard", 9.6, 9, "Lighthouse, Ocean Biew, Dogs!", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m49!1m12!1m3!1d21496.017709875916!2d-122.40163634817175!3d47.66495339257411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m34!1i0!3e2!4m5!1s0x549015d57a5da881%3A0xd07680ac0ad3f49c!2sBallard%2C+Seattle%2C+WA!3m2!1d47.677!2d-122.38499999999999!4m5!1s0x54903e03b5ac5d05%3A0xa81c7ab014409a2a!2sWest+Point+Lighthouse%2C+Discovery+Park+Boulevard%2C+Seattle%2C+WA!3m2!1d47.66197!2d-122.435739!4m3!3m2!1d47.654576899999995!2d-122.41758259999999!4m3!3m2!1d47.662180899999996!2d-122.41577649999999!4m3!3m2!1d47.6542008!2d-122.4032457!4m3!3m2!1d47.661485!2d-122.3762948!4m3!3m2!1d47.6764551!2d-122.3843629!5e0!3m2!1sen!2sus!4v1422475383585"frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("Golden Gardens", "Ballard", 7.2, 2, "Beach, Volleyball, Olympic Mountains", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m45!1m12!1m3!1d21489.25469733876!2d-122.39844899857376!3d47.681374019690786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m30!1i0!3e2!4m5!1s0x549015d57a5da881%3A0xd07680ac0ad3f49c!2sBallard%2C+Seattle%2C+WA!3m2!1d47.677!2d-122.38499999999999!4m3!3m2!1d47.697905299999995!2d-122.40041889999999!4m3!3m2!1d47.695302899999994!2d-122.4026942!4m3!3m2!1d47.6783265!2d-122.40556959999999!4m5!1s0x0%3A0xc34b95643cc29f9d!2sHiram+M.+Chittenden+Locks!3m2!1d47.666705!2d-122.398068!4m3!3m2!1d47.6763179!2d-122.38503759999999!5e0!3m2!1sen!2sus!4v1422475254549" frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("Ballard Beer Crawl", "Ballard", 2.3, 1, "Restaurants, Bars, Hipsters", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m39!1m12!1m3!1d10746.234574779866!2d-122.3931222114143!3d47.673569848631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m24!1i0!3e2!4m5!1s0x549015d57a5da881%3A0xd07680ac0ad3f49c!2sBallard%2C+Seattle%2C+WA!3m2!1d47.677!2d-122.38499999999999!4m3!3m2!1d47.6686765!2d-122.38463449999999!4m3!3m2!1d47.6686282!2d-122.39828279999999!4m3!3m2!1d47.6758527!2d-122.3983901!4m3!3m2!1d47.6759972!2d-122.3857944!5e0!3m2!1sen!2sus!4v1422475579192" width="500" height="300" frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("City Tour", "Downtown", 4.2, 5, "Buildings, Pike Place", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m47!1m12!1m3!1d10758.246562956867!2d-122.34808568530823!3d47.61521281741247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m32!1i0!3e2!4m5!1s0x54906ab2c151d6cb%3A0x60441d5f633e9f1c!2sPike+Place+Market%2C+Seattle%2C+WA!3m2!1d47.610135899999996!2d-122.3420567!4m3!3m2!1d47.602574!2d-122.334318!4m3!3m2!1d47.603987!2d-122.33098389999999!4m3!3m2!1d47.620882699999996!2d-122.35278489999999!4m3!3m2!1d47.611683299999996!2d-122.3438156!4m3!3m2!1d47.6111858!2d-122.34490509999999!4m3!3m2!1d47.617744599999995!2d-122.35605199999999!5e0!3m2!1sen!2sus!4v1422475917872" frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("Waterfront Wonder", "Downtown", 2.5, 0, "Sculpture park, Ocean view", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m23!1m8!1m3!1d21513.451532058454!2d-122.3554231!3d47.6226042!3m2!1i1024!2i768!4f13.1!4m12!1i0!3e2!4m5!1s0x54906ab2c151d6cb%3A0x60441d5f633e9f1c!2sPike+Place+Market%2C+Seattle%2C+WA!3m2!1d47.610135899999996!2d-122.3420567!4m3!3m2!1d47.630818399999995!2d-122.3776973!5e0!3m2!1sen!2sus!4v1422475669427" frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("Stadium Stampede", "Downtown", 7.4, 2, "Hawks Nest, Alki Beach, Port", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m37!1m12!1m3!1d21527.361997075866!2d-122.35820420793316!3d47.58879323974581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m22!1i0!3e2!4m5!1s0x54906ab2c151d6cb%3A0x60441d5f633e9f1c!2sPike+Place+Market%2C+Seattle%2C+WA!3m2!1d47.610135899999996!2d-122.3420567!4m5!1s0x54906aa3b9f1182b%3A0xa636cd513bba22dc!2sCenturyLink+Field%2C+Occidental+Avenue+South%2C+Seattle%2C+WA!3m2!1d47.595152!2d-122.331639!4m3!3m2!1d47.571335999999995!2d-122.3483849!4m3!3m2!1d47.585887799999995!2d-122.398274!5e0!3m2!1sen!2sus!4v1422475809434" frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("Volunteer Park Picnic", "Capitol Hill", 3.9, 4, "Volunteer Park, City Views", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m39!1m8!1m3!1d10755.996823627842!2d-122.3226085!3d47.6261467!3m2!1i1024!2i768!4f13.1!4m28!1i0!3e2!4m5!1s0x54906acd490e0049%3A0x7bc051dc6f580f72!2sCal+Anderson+Park%2C+11th+Avenue%2C+Seattle%2C+WA!3m2!1d47.617!2d-122.31911699999999!4m3!3m2!1d47.6325156!2d-122.3154124!4m3!3m2!1d47.635736699999995!2d-122.316941!4m3!3m2!1d47.6324196!2d-122.3166979!4m3!3m2!1d47.6286341!2d-122.318038!4m3!3m2!1d47.617642499999995!2d-122.3198834!5e0!3m2!1sen!2sus!4v1422476156517" frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("Arboretum Adventure", "Capitol Hill", 6.2, 10, "Japanese Garden", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m53!1m12!1m3!1d21509.298419488696!2d-122.31386072602007!3d47.63269528144676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m38!1i0!3e2!4m5!1s0x54906acd490e0049%3A0x7bc051dc6f580f72!2sCal+Anderson+Park%2C+11th+Avenue%2C+Seattle%2C+WA!3m2!1d47.617!2d-122.31911699999999!4m5!1s0x549014d2ab84fedf%3A0x1af1cefe28add072!2sArboretum+Court%2C+East+Madison+Street%2C+Seattle%2C+WA!3m2!1d47.626552!2d-122.291567!4m3!3m2!1d47.639838!2d-122.2920383!4m3!3m2!1d47.633938799999996!2d-122.2979606!4m3!3m2!1d47.6269978!2d-122.29293949999999!4m3!3m2!1d47.6298032!2d-122.2990335!4m3!3m2!1d47.6329054!2d-122.3081077!4m3!3m2!1d47.6401561!2d-122.3152126!5e0!3m2!1sen!2sus!4v1422476258284" frameborder="0" style="border:0"></iframe>'));
results.addRoute(new Route ("Lake Washington", "Capitol Hill", 5.4, 0, "Lake views", '<iframe class="mapsize grid-100 mobile-grid-100" src="https://www.google.com/maps/embed?pb=!1m25!1m8!1m3!1d43046.375889079405!2d-122.28566563068853!3d47.59894066018003!3m2!1i1024!2i768!4f13.1!4m14!1i0!3e2!4m3!3m2!1d47.6397318!2d-122.2770759!4m3!3m2!1d47.617226599999995!2d-122.2812883!4m3!3m2!1d47.5705415!2d-122.2764941!5e0!3m2!1sen!2sus!4v1422476478904" width="500" height="300" frameborder="0" style="border:0"></iframe>'));

function store() {
  if($(".valueError").length !== 0) {
    $(".formError").remove();
    $("#findmyrun").after("<p class='formError'>You 'ave to insert your values properly mahn!</p>");
    event.preventDefault();
  } else if ($(".logout").length === 0) {
    $(".formError").remove();
    $("#findmyrun").after("<p class='formError'>You 'ave to login mahn!</p>");
    event.preventDefault();
  }else {
  var userValues = {};
  userValues["location"] = $("#location :selected").text();
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


$("#location").on("change", function(){
  console.log("working");
  var locSelect = $("#location :selected").text();
  $("#locationmap").html(locationMaps[locSelect]);
});

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
    $(this).after("<p class='valueError'>Enter a value mahn!</p>");
  }
});

