$(document).ready(function() {

  $(".next").click(function() {

    var activeImg = $("img.active");
    activeImg.removeClass("active");

    if (activeImg.hasClass("last")) {
      var nextImg = $("img.first");
    } else {
      var nextImg = activeImg.next();
    }

    nextImg.addClass("active");

  });


  $(".prev").click(function() {

    var activeImg = $("img.active");
    activeImg.removeClass("active");

    if (activeImg.hasClass("first")) {
      var prevImg = $("img.last");
    } else {
      var prevImg = activeImg.prev();
    }

    prevImg.addClass("active");

  });

});
