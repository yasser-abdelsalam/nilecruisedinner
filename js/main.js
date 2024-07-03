

//////////////////////////////////
// Get the button
        const scrollToTopButton = document.querySelector('.scroll-to-top');

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopButton.style.display = "block";
            } else {
                scrollToTopButton.style.display = "none";
            }
        };

        // When the user clicks on the button, scroll to the top of the document
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }





// //////////////////////
     var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            effect: 'slide', // Default swiping effect
         speed: 500, // Match the CSS transition duration
             autoplay: {
                delay: 5000, // Slide every 5 seconds
                disableOnInteraction: false, // Keep autoplay enabled even when user interacts
            },
        });