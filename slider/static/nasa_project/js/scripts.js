$(document).ready(function() {
    // Инициализация слайдера
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: true
    });

    // Переменная для хранения индекса текущего изображения
    let currentIndex = 0;
    const $sliderItems = $('.slider-for .slider-item img');

    $sliderItems.on('click', function() {
        // Получаем URL изображения и индекс
        currentIndex = $sliderItems.index(this);
        const imgSrc = $(this).attr('src');

        $('#modalImage').attr('src', imgSrc);
        $('#imageModal').modal('show');
    });

    // Функция для обновления изображения в модальном окне
    function updateModalImage(index) {
        const imgSrc = $sliderItems.eq(index).attr('src');
        $('#modalImage').attr('src', imgSrc);
    }

    // Обработчик для кнопки «влево»
    $('#prevImage').on('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : $sliderItems.length - 1;
        updateModalImage(currentIndex);
    });

    // Обработчик для кнопки «вправо»
    $('#nextImage').on('click', function() {
        currentIndex = (currentIndex < $sliderItems.length - 1) ? currentIndex + 1 : 0;
        updateModalImage(currentIndex);
    });
});
