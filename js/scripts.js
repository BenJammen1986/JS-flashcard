$(document).ready(function() {
  $(".clickableList li").click(function() {
    var itemClass = $(this).attr("class");
    $(".content p:not(."+itemClass+")").slideUp();
    $(".content ."+itemClass).slideToggle();
  });
});
