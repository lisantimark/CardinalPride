
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

function runModal(option) {
    if (option == 1){
        var modal = document.getElementById('exterior-modal');
        var span = document.getElementsByClassName("close")[0];
    }

    if (option == 2){
        var modal = document.getElementById('interior-modal');
        var span = document.getElementsByClassName("close")[1];
    }

    if (option == 3){
        var modal = document.getElementById('kitchen-bath-modal');
        var span = document.getElementsByClassName("close")[2];
    }

    if (option == 4){
        var modal = document.getElementById('oddjobs-modal');
        var span = document.getElementsByClassName("close")[3];
    }

    modal.style.display = "block";
    span.onclick = function () {
        modal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function loadPage() {
    test = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}

