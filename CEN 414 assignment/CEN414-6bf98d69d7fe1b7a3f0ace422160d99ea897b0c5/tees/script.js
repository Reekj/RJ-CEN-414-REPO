$(function(){
    console.log("hell")
    
    $(window).scroll(function(){
        stickyNav();
    });
})
var stickyNav = function(){
    var navTop = $("header").offset().top;
    if ($(window).scrollTop() >= navTop){
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
};

stickyNav();

