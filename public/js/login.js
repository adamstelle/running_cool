$(".popupContainer").hide();

$(".login").on("click", function() {
  $(".popupContainer").toggle();
});

$("#exit").on("click", function() {
  $(".popupContainer").toggle();
});

$("#login").on("click", Login);

function Login() {
  if($(".valueError").length !== 0) {
    $(".formError").remove();
    $("#loginName").before("<p class='formError'>You 'ave to insert your values properly mahn!</p>");
    event.preventDefault();
  } else {
  var $name = $("#loginName").val();
  $("#nameInsert").append("<h2 class='greetings'>Welcome <em class='red'>" + $name + "!</em></h2>");
  $(".popupContainer").toggle();
  $(".login").hide();
  $("nav").append("<a class='navitem logout'>Logout</a>");
  }
}

