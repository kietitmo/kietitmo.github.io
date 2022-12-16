$(document).ready(function(){
    $('.main__slider-photo').slick({
        // включить автоматическое переключение слайдов
        autoplay: true,

        // время отображения 3 с до изменения
        autoplaySpeed: 3000,

        // 1 слайд-шоу за раз
        slidesToShow: 1,

        // реагирует на каждую точку останова
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerMode: true,
              }
            },
            {
            breakpoint: 768,
            settings: {
              centerMode: true,
            }
            },
            {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
            }
            },
          ],

        // пользовательские стрелки слайдера
        prevArrow:`<button type='button' class='slick-prev pull-left'><span> ⟨  </span></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><span> ⟩ </span></button>`,
    });
});
