var menu = document.querySelector(".menu"),
    toggle = document.querySelector(".menu-toggle");

function toggleToggle() {
  toggle.classList.toggle("menu-open");
};

function toggleMenu() {
  menu.classList.toggle("active");
};

toggle.addEventListener("click", toggleToggle, false);
toggle.addEventListener("click", toggleMenu, false);

$(document).ready(function () {

  




  $(document).on("click", ".naccs .menu div", function () {
    var numberIndex = $(this).index();

    if (!$(this).is("active")) {
      $(".naccs .menu div").removeClass("active");
      $(".naccs ul li").removeClass("active");

      $(this).addClass("active");
      $(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

      var listItemHeight = $(".naccs ul")
        .find("li:eq(" + numberIndex + ")")
        .innerHeight();
      $(".naccs ul").height(listItemHeight + "px");
    }
  });





  $("#all").click(function () {
    $('input:checkbox').not(this).prop('checked', this.checked);
  });






  // jqueryDatepicker($);

  // $("#datepicker").datepicker({
  //   inline: true,
  //   changeYear: true,
  //   changeMonth: true,
  //   mindate: 0,
  //   minDate: new Date()
  // });

  // jQuery(function ($) {
  //   $.datepicker.regional['ru'] = {
  //     closeText: 'Закрыть',
  //     prevText: '&#x3c;Пред',
  //     nextText: 'След&#x3e;',
  //     currentText: 'Сегодня',
  //     monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  //       'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  //     monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  //       'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  //     dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  //     dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
  //     dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  //     weekHeader: 'Нед',
  //     dateFormat: 'dd.mm.yy',
  //     firstDay: 1,
  //     isRTL: false,
  //     showMonthAfterYear: false,
  //     yearSuffix: '',
  //     mindate: 0,
  //   };
  // $.datepicker.setDefaults($.datepicker.regional['ru']);
// });
// $(function () {
//   $('#datepicker').datepicker($.extend({
//     inline: true,
//     changeYear: true,
//     changeMonth: true,
//     mindate: 0,
//   },
//     $.datepicker.regional['ru']
//   ));
// });




(function ($) {
  $('.js-nav-menu-toggle').on('click', function () {
    $(this).parents('.navigation-menu').toggleClass('navigation-menu--open');
  });

  $('html').on('click', function (e) {
    if (!$(e.target).closest('.js-nav-menu').length &&
      ($('.js-nav-menu').hasClass('navigation-menu--open'))) {
      $('.js-nav-menu').removeClass('navigation-menu--open');
    }
  });
})(jQuery);




$(document).ready(function () {

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });

  $('.scrollup').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 0);
    return false;
  });

});

$('.pickadate').pickadate({
  monthsFull: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' ],
  monthsShort: [ 'Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек' ],
  weekdaysFull: [ 'Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' ],
  weekdaysShort: [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ],
  
  format: 'dd mmmm, yyyy',
  firstDay: 1
});
$('.pickatime').pickatime({
  format: 'HH:i',
});





// var mixer = mixitup('.project__inner-box');

})