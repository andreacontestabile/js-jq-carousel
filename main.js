$(document).ready(function() {

  $(".next").click(function() {
    nextImage();
  });

  $(".prev").click(function() {
    prevImage();
  });

  $(document).keydown(function(e) {

    var tastoPremuto = e.which;
    var frecciaDestra = 39;
    var frecciaSinistra = 37;

    switch(tastoPremuto) {

      case frecciaDestra:
        nextImage();
        break;
      case frecciaSinistra:
        prevImage();
        break;
    }

  });

  function nextImage() {

    var activeImg = $("img.active");
    activeImg.removeClass("active");

    if (activeImg.hasClass("last")) {
      var nextImg = $("img.first");
    } else {
      var nextImg = activeImg.next();
    }

    nextImg.addClass("active");

  }

  function prevImage() {

    var activeImg = $("img.active");
    activeImg.removeClass("active");

    if (activeImg.hasClass("first")) {
      var prevImg = $("img.last");
    } else {
      var prevImg = activeImg.prev();
    }

    prevImg.addClass("active");

  }

});
