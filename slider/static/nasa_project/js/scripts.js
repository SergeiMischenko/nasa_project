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
        // Получаем оригинальный URL изображения и индекс
        currentIndex = $sliderItems.index(this);
        const originalSrc = $(this).data('original-src');

        $('#modalImage').attr('src', originalSrc);
        $('#imageModal').modal('show');
    });

    // Функция для обновления изображения в модальном окне
    function updateModalImage(index) {
        const originalSrc = $sliderItems.eq(index).data('original-src');
        $('#modalImage').attr('src', originalSrc);
    }

    // Обработчики кнопок «влево» и «вправо»
    $('#prevImage').on('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : $sliderItems.length - 1;
        updateModalImage(currentIndex);
    });

    $('#nextImage').on('click', function() {
        currentIndex = (currentIndex < $sliderItems.length - 1) ? currentIndex + 1 : 0;
        updateModalImage(currentIndex);
    });
});
