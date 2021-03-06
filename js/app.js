window.addEventListener("load", function () {
  new Glider(document.querySelector(".carrusel-lista"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    rewind: true,
    scrollLockDelay: 1000,
    resizeLock: true,
    // draggable: true,
    dots: ".carrusel-indicadores",
    arrows: {
      prev: ".carrusel-anterior",
      next: ".carrusel-siguiente",
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 500,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 2,
          slidesToScroll: 2,
          // itemWidth: 150,
          // duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          // itemWidth: 150,
          // duration: 0.25
        }
      }
    ]
  });
});
