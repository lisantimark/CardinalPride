
$(document).ready(function(){
    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 50});
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({scrollTop: $(hash).offset().top}, 1500, function(){
                window.location.hash = hash;
            });
        }  // End if
    });
    $(window).scroll(function(){
        var wscroll = $(this).scrollTop();
        if(wscroll > 50){
            $(".navbar").addClass("shrink-nav");
        }
        else{
            $(".navbar").removeClass("shrink-nav");
        }
    });
});

