(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    contactUsButton
    //Header:'Contact Us' Button --> contactUs.html
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('contactUsButton');
    
        button.addEventListener('click', function() {
            const newUrl = 'contactUs.html';
            window.location.href = newUrl;
        });
    });

    //Home: 'Start Now' Button --> Simulation.html
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('startNowButton');
    
        button.addEventListener('click', function() {
            const currentUrl = window.location.href;
            const newUrl = currentUrl.includes('home.html') ? 'simulation.html' : 'home.html';
    
            window.location.href = newUrl;
        });
    });

    //Home: 'Quiz Time' Button --> quiz.html
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('quizTimeButton');
    
        button.addEventListener('click', function() {
            const currentUrl = window.location.href;
            const newUrl = currentUrl.includes('home.html') ? 'quiz.html' : 'home.html';
    
            window.location.href = newUrl;
        });
    });

    //Home: 'Quiz Time' Button --> quiz.html
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('quizTimeButton');
    
        button.addEventListener('click', function() {
            const currentUrl = window.location.href;
            const newUrl = currentUrl.includes('home.html') ? 'quiz.html' : 'home.html';
    
            window.location.href = newUrl;
        });
    });

    //Home: 'Figure Out' Button --> howToReport.html
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('figureOutButton');
    
        button.addEventListener('click', function() {
            const currentUrl = window.location.href;
            const newUrl = currentUrl.includes('home.html') ? 'howToReport.html' : 'home.html';
    
            window.location.href = newUrl;
        });
    });

    //Home: 'View All' Button --> course.html
    document.addEventListener('DOMContentLoaded', function() {
        const button = document.getElementById('viewAllButton');
    
        button.addEventListener('click', function() {
            const currentUrl = window.location.href;
            const newUrl = currentUrl.includes('home.html') ? 'course.html' : 'home.html';
    
            window.location.href = newUrl;
        });
    });
    //Contact Us: Successfully Submitted
    document.addEventListener('DOMContentLoaded', function() {
        const contactForm = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');
    
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
    
            // Here you can add your code to handle form submission, for example, sending the form data to a server
    
            // Show success message
            successMessage.style.display = 'block';
    
            // Reset the form after submission
            contactForm.reset();
        });
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

