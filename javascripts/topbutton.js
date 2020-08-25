//functionaity: https://html-online.com/articles/dynamic-scroll-back-top-page-button-javascript/
//styling: https://codepen.io/matthewcain/pen/ZepbeR
//when using this, make sure to include the following in the html page:
//  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
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