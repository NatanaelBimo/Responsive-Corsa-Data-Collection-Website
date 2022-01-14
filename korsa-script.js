$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll-up-butt').addClass("show");
        }else{
            $('.scroll-up-butt').removeClass("show");
        }
    });

    $('.scroll-up-butt').click(function(){
        $('html').animate({scrollTop:0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    })
    
    $('.menu-butt').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-butt i').toggleClass("active");
        $('html').animate({scrollTop:0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu').click(function(){
        $(".navbar .menu").removeClass("active");
        $('.menu-butt i').removeClass("active");
    });
});
