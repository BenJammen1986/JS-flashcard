$(document).ready(function() {
  $(".clickableList li").click(function() {
    var itemClass = $(this).attr("class");
    $(".content ."+itemClass).fadeToggle();
  });
});
