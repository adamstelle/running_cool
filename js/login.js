$(".popupContainer").hide();

$(".login").on("click", function() {
  $(".popupContainer").toggle();
});

$("#exit").on("click", function() {
  $(".popupContainer").toggle();
});

$("#log").on("click", Login);

function Login() {
  if($(".valueError").length !== 0) {
    $(".formError").remove();
    $(".buttonstyle").after("<p class='formError'>You 'ave to insert your values properly man!</p>");
    event.preventDefault();
  } else {
  var $name = $("#loginName").val();
  console.log($name);
  $("#nameInsert").append("<h2>Hello: </h2><p>" + $name + "</p>");
  $(".popupContainer").toggle();
  }
}
