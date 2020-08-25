/*
//get the button
//NOTE: this will only add functionality to the FIRST top button on page
var btn = document.getElementsByClassName("top-button")[0];
var threshold = 20; //scrolling threshold

//hide the button unless a certain distance down the page
window.onscroll = scrollFunction();
function scrollFunction() {
    if (document.body.scrollTop() > threshold || document.documentElement.scrollTop() > threshold) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
*/
/*$(window).scroll(function() {
    if($(window).scrollTop() > threshold) {
        $('.top-button')[0].fadeIn();
    } else {
        $('.top-button')[0].fadeOut();
    }
});*//*


//add "to top" functionality
function topFunction() {
    try {
        window.scrollTo({top:0, behavior: "smooth"});
    } catch {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}*/
//functionaity: https://html-online.com/articles/dynamic-scroll-back-top-page-button-javascript/
//styling: https://codepen.io/matthewcain/pen/ZepbeR
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.top-button:first').fadeIn();
    } else {
        $('.top-button:first').fadeOut();
    }
});
$(document).ready(function() {
    $('.top-button:first').click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "smooth");
        return false;
    });

});