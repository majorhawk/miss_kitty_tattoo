/*************************************************************************
    Template Name: Zman
    Template URI: https://themeforest.net/user/theme_bangla
    Description: A 'Zman – Personal Portfolio Html5 Template' is perfect if you like a clean and modern design. This theme is ideal for Agency, Freelancer, Portfolio, and those who need an easy, attractive and effective way to share their work with clients.
    Author: Theme_Bangle
    Version: 1.0
    Author URI: http://riyad.ninja
    
    
    Note: style js.
*************************************************************************/
/*
    
    00. Preloader
    01. Sticky Header
    02. Section Scroll
    03. Section Smoot Scroll
    04. Parallax Background
    05. Animated Progress
    06. Testimonail
    07. Fan Fact Counter
    08. Masonry
    09. IsoTop Postfolio
    10. Magnific Popup
    11. Google Map
 
==================================================
[ End table content ]
==================================================*/


(function($) {
    'use strict';
    
    var zmanApp = { 
        /* ---------------------------------------------
         00. Preloader
        --------------------------------------------- */
        preloader: function() {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
            var preloader = $('#preloader');
            if (!isMobile) {
                setTimeout(function() {
                    preloader.addClass('preloaded');
                }, 800);
                setTimeout(function() {
                    preloader.remove();
                }, 2000);
            } else {
                preloader.remove();
            }
        },

        /*-------------------------------------------
            01. Sticky Header
        --------------------------------------------- */
        stickyHeader: function() {
            if ($('#sticky_header').length) {
                var stickyMenu = $('.site_navigation').clone().appendTo('#sticky_header');
                $(window).on('scroll', function() {
                    var w = $(window).width();
                    if (w > 991) {
                        if ($(this).scrollTop() > 350) {
                            $('#sticky_header').slideDown(500);
							document.getElementById('logo').src='images/miss_kitty_tattoo_logo2.png';
                        } else {
                            $('#sticky_header').slideUp(500);
							document.getElementById('logo').src='images/miss_kitty_tattoo_logo.png';
                        }
                    }
                });
            } 
            $(".dots_effect > ").on('hover', function(){
                $("span.dot_effect").toggleClass("dot_hover");
            });
        },
    
    
        /*-------------------------------------------
            02. Section Scroll
        --------------------------------------------- */
        sectionScroll: function() {
            var $s_scroll = $('#section_scroller_button');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height() - 700) {
                    $s_scroll
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $s_scroll
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $(".section_scroll").sectionScroller({
                scrollerButton: "#section_scroller_button",
                scrollType: "swing", 
                scrollDuration: 600
            });
        },
        
        /*-------------------------------------------
            03. Section Smoot Scroll
        --------------------------------------------- */
        smootScroll: function() {
            $.scrollIt({
                upKey: 38,                // key code to navigate to the next section
                downKey: 40,              // key code to navigate to the previous section
                easing: 'swing',          // the easing function for animation
                scrollTime: 700,          // how long (in ms) the animation takes
                activeClass: 'active',    // class given to the active nav element
                onPageChange: null,       // function(pageIndex) that is called when page is changed
                topOffset: -63            // offste (in px) for fixed top navigation
            });
        },
    
        /*-------------------------------------------
            04. Parallax Background
        --------------------------------------------- */
        bg_parallax: function () {
            $('.welcome_area > .page_cover').parallax("50%", -0.5);
        },  
            

        /* ---------------------------------------------
            05. Animated Progress
        --------------------------------------------- */
        animated_progress: function () {
            $('.progress_bar > span' ).each(function () {
                var $this = $(this);
                var width = $(this).data('percent');
                $this.css({
                    'transition': 'width 3s'
                });
                setTimeout(function () {
                    $this.appear(function () {
                        $this.css('width', width + '%');
                    });
                }, 500);
            });
        },
    
        /* ---------------------------------------------
            06. Testimonail
        --------------------------------------------- */
        testimonial: function () {
            $('.testimonial_carousel').owlCarousel({
                center: false,
                items: 1,
                autoplay: true,
                singleItem: true,
                smartSpeed:500,
                loop: true,
                margin: 0,
                nav: false,
                dots: true
            }); 
            
        },
        
        /* ---------------------------------------------
            07. Fan Fact Counter
        --------------------------------------------- */
        fan_fact: function () {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        },
    
    
        /* ---------------------------------------------
            08. Masonry
        --------------------------------------------- */
        grid_masonry: function () {
            if ($('#masonry').length > 0) {
                var container = $('#masonry');
                container.imagesLoaded(function () {
                    container.masonry({
                        itemSelector: '.grid'
                    });
                });
            }
        },
    
        /* ---------------------------------------------
            09. IsoTop Postfolio
        --------------------------------------------- */
        portfolio_isotop: function () {
            var $modelisotop = $('.portfolio_items_list');
            $modelisotop.isotope({
                filter: '*',
                animationOptions: {
                    duration: 1000,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.recent_work_nav > li a').on("click", function () {
                $('.recent_work_nav > li a').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $modelisotop.isotope({ 
                    filter: selector,
                    animationOptions: {
                        duration: 1000,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        },
    
        /* ---------------------------------------------
            10. Magnific Popup
        --------------------------------------------- */
        magnific_popup: function () {
            $('.work_item').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, 
                    duration: 300, 
                    easing: 'ease-in', 
                    opener: function (openerElement) {
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        },
    
        /* ---------------------------------------------
         function initializ
         --------------------------------------------- */
        initializ: function() {   
            zmanApp.preloader();
            zmanApp.stickyHeader();
            zmanApp.sectionScroll();
            zmanApp.smootScroll();           
            zmanApp.bg_parallax();       
            zmanApp.animated_progress();       
            zmanApp.testimonial();       
            zmanApp.fan_fact();     
            zmanApp.grid_masonry();     
            zmanApp.portfolio_isotop();     
            zmanApp.magnific_popup();     
        }
    };

    /* ---------------------------------------------
     Document ready function
     --------------------------------------------- */
    $(function() {
        zmanApp.initializ();
    }); 
    
})(jQuery);
