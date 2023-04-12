(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });
    
})(jQuery);

// creation de trois fonction PLAY/PAUSE & STOP & VOLUME
var playbtn = document.getElementById("play")
var stopbtn = document.getElementById("stop")
var volumebtn = document.getElementById("volume")

// Fonction PLAY/PAUSE
playbtn.onclick = function () {
    wavesurfer.playPause();
    play.src.includes("play_music_icon.png")? play.src = "./img/pause_music_icon.png" : play.src = "./img/play_music_icon.png"
}
// Fonction STOP
stopbtn.onclick = function () {
    wavesurfer.stop();
    play.src = "./img/play_music_icon.png"
}
// Fonction VOLUME
volumebtn.onclick = function () {
    wavesurfer.toggleMute();
    volume.src.includes("volume_ON_icon.png")? volume.src = "./img/volume_OFF_icon.png" : volume.src = "./img/volume_ON_icon.png"
}

// Spectre de la musique
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

//Musique
wavesurfer.load('./img/Face_Off_The Rock.mp3');

wavesurfer.on('finish', function () {
    play.src = "./img/play_music_icon.png"
    wavesurfer.stop();
});