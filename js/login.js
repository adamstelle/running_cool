$(document).load(".popupContainer").hide();

$(".login").on("click", function() {
  $(".popupContainer").toggle();
});

$("#exit").on("click", function() {
  $(".popupContainer").toggle();
});

$("#log").on("click", function(){
  Login();
  $(".popupContainer").toggle();
});

function Login() {
  var $name = $("#loginName").val();
  console.log($name);
  $("#nameInsert").append("<h2>Hello: </h2><p>" + $name + "</p>");
}
