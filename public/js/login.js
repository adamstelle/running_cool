$(".popupContainer").hide();

// $(function(){
//   if (storedInputs.userName.length > 0){
  $(".logout").hide();
//   $(".login").hide();
//   }
// });
$(".login").on("click", function() {
  $(".popupContainer").show();
});
$("#exit").on("click", function() {
  $(".popupContainer").toggle();
});
$("#login").on("click", Login);
$(".logout").on("click", Logout);

function Login() {
  if($(".valueError").length !== 0) {
    $(".formError").remove();
    $("#loginName").before("<p class='formError'>You 'ave to insert your values properly mahn!</p>");
    event.preventDefault();
  } else if ($("#loginName").val().length === 0 || $("#password").val().length === 0) {
    $(".formError").remove();
    $("#loginName").before("<p class='formError'>You 'ave to insert your values properly mahn!</p>");
    event.preventDefault();
  } else {
  var $name = $("#loginName").val();
  $("#nameInsert").append("<h2 class='greetings'>Welcome <em class='red'>" + $name + "!</em></h2>");
  $(".login").hide();
  $(".popupContainer").toggle();
  $(".logout").show();
  }
}
function Logout() {
  $("#nameInsert").detach();
  $(".logout").hide();
  $(".login").show();
}
$('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    event.preventDefault();
});
