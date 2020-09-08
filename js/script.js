(function ($) {
    'use strict';

    // Navigation hide on scroll on mobile screen
    $(window).on('scroll', function() {
        $('.navbar-collapse').collapse('hide')
    });

    // Feather Icons
    feather.replace();

    // Counter
    $('.counter').counter();

    // WoW JS Activation
    var wowInit = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        scrollContainer: null
    });
    wowInit.init();

    // Portfolio section 
    $('.portfolio-section').imagesLoaded(function() {
        // Portfolio activation
        var $grid = $('.portfolio-grid').isotope({
            itemSelector: '.portfolio-item',
            percentPosition: true,
        });

        // Portfolio filtering activation
        $('.portfolio-filter li a').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // filter menu class addition  
        $('.portfolio-filter li').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

        // Play Shuffle
        // $('.btn-shuffle').on('click', function () {
        //     $grid.isotope('updateSortData').isotope({
        //         sortBy: 'random'
        //     });
        // });  

        // LOAD MORE BUTTON FOR PORTFOLIO
        $('.pagination-area').on('click', '.load-more', function(event) {
            $('.portfolio-item').removeClass('hidden');
            var $grid = $('.portfolio-grid').isotope();
            $(this).hide();
            $('.pagination-area .load-more-wrapper, .pagination-area-2 .load-more-wrapper').append('<button class="button btn-down" href="javascript:void(0)">No More Items</button>')
            event.preventDefault();
        });
    });

    // Preview Icon
    $('.vendorx-gallery').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });

    /* ---------------------------------------------
     Testimonial Slide
    --------------------------------------------- */
    $('.').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        speed: 1000,
        autoplaySpeed: 2000,
        infinite: true,
        loop: true,
        slidesToShow: 2
    });


    /* ---------------------------------------------
     Back to Top
    --------------------------------------------- */
    $('body').append('<a id="back-to-top" class="to-top-btn" href="#"><i class="fa fa-angle-up"></i></a>');
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('to-top-show');
                } else {
                    $('#back-to-top').removeClass('to-top-show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 1250, 'easeInOutExpo');
        });
    };



})(jQuery)


// Slider Style
$(function () {

    'use strict';

    var animation = (slider) => {

        let image = $(slider + ' .swiper-slide-active img');
        let title = $(slider + ' .title');
        let description = $(slider + ' .description');
        let btn = $(slider + ' .button');

        image.toggleClass('aos-animate');
        title.toggleClass('aos-animate');
        description.toggleClass('aos-animate');
        btn.toggleClass('aos-animate');

        setTimeout(() => {

            image.toggleClass('aos-animate');
            title.toggleClass('aos-animate');
            description.toggleClass('aos-animate');
            btn.toggleClass('aos-animate');

            AOS.refresh();

        }, 100)
    }

    var sliderFull = new Swiper('.slider-full', {

        autoplay: {
            delay: 5000,
        },
        // autplay: false,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false
        },
        on: {
            init: () => {

                animation('.slider-full')

                let pagination = $('.slider-full .swiper-pagination');

                pagination.hide();

                setTimeout(() => {

                    pagination.show();

                }, 2000)

            },
            slideChange: () => {

                animation('.slider-full')
            }
        }
    })

})

