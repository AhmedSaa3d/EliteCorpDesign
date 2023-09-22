$(function () {
  "use strict";

  /*Start Slider*/
  $(".sliderLanding, .carousel-item").height(
    $(window).height() -
      $(".upper-bar").innerHeight() -
      $(".navbar").innerHeight()
  );
  /*End Slider*/

  /*Start Featured Work Shuffle*/
  $(".ourWork ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    if ($(this).data("class") === "all") {
      $(".shuffle-imgs div").css("opacity", 1);
    } else {
      $(".shuffle-imgs div").css("opacity", 0.2);
      $($(this).data("class")).css("opacity", 1);
    }
  });

  /*End Featured Work Shuffle*/
});
