$(document).ready(function() {
  // Evento click TASTO NEXT
  $(".next").click(function() {
    nextImage();
    nextCircle();
  });

  // Evento click TASTO PREV
  $(".prev").click(function() {
    prevImage();
    prevCircle();
  });

  // Evento pressione TASTI FRECCIA DESTRA e SINISTRA
  $(document).keydown(function(e) {

    var tastoPremuto = e.which;
    var frecciaDestra = 39;
    var frecciaSinistra = 37;

    switch(tastoPremuto) {

      case frecciaDestra:
        nextImage();
        nextCircle();
        break;
      case frecciaSinistra:
        prevImage();
        prevCircle();
        break;
    }

  });

  //FUNZIONI
  // Funzione prossima immagine
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
  // Funzione selezione prossimo pallino
  function nextCircle() {

    var activeCircle = $(".nav i.fa-circle.active");
    activeCircle.removeClass("active");

    if (activeCircle.hasClass("last")) {
      var nextCircle = $(".nav i.fa-circle.first");
    } else {
      var nextCircle = activeCircle.next();
    }

    nextCircle.addClass("active");

  }
  // Funzione immagine precedente
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
  // Funzione seleziona pallino precedente
  function prevCircle() {

    var activeCircle = $(".nav i.fa-circle.active");
    activeCircle.removeClass("active");

    if (activeCircle.hasClass("first")) {
      var prevCircle = $(".nav i.fa-circle.last");
    } else {
      var prevCircle = activeCircle.prev();
    }

    prevCircle.addClass("active");

  }

});
