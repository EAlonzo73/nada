$(document).ready(function () {
  var isMenuOpen = false;

  $(window).scroll(function () {
    var isScrolled = $(this).scrollTop() > 100;
    $('header').toggleClass('fixed-header', isScrolled);

    // Si el menú está abierto y se hace scroll, ciérralo
    if (isMenuOpen && !$('.menu').is(':animated')) {
      $('.menu').removeClass('mostrar');
      isMenuOpen = false;
    }
  });

  $('.mostrar-menu').click(function () {
    isMenuOpen = !isMenuOpen;

    // Asegúrate de agregar o eliminar la clase "mostrar" después de la transición de la barra
    setTimeout(function () {
      $('.menu').toggleClass('mostrar', isMenuOpen);
    }, 800);

    // Agrega o elimina la clase "fixed-header" dependiendo del estado del menú
    $('header').toggleClass('fixed-header', isMenuOpen);
  });

  $('.menu a').click(function () {
    // Si el menú está cerrado y se hace clic en un enlace, no hagas nada
    if (!isMenuOpen) {
      return;
    }

    // Si el menú está abierto y se hace clic en un enlace, ciérralo
    $('.menu').removeClass('mostrar');
    isMenuOpen = false;

    // Elimina la clase "fixed-header"
    $('header').removeClass('fixed-header');
  });
});
