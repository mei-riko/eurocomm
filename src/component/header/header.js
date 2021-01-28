import $ from 'jquery';

$(document).ready(() =>{
    $(".header .header__nav").on("click", function(){
        if( !$(this).hasClass("header__nav--active")){
            $(this).addClass("header__nav--active");
            $(".navbar-mobile").addClass("navbar-mobile--active");
        }else{
            $(this).removeClass("header__nav--active");
            $(".navbar-mobile").removeClass("navbar-mobile--active");
        }
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        let navActive = $(".navbar-mobile.navbar-mobile--active"); // элемент
        if (!navActive.is(e.target) // клик был не по блоку
            && navActive.has(e.target).length === 0 // и не по его дочерним элементам
            && !$(".header .header__nav").is(e.target) ) { 
                $(".navbar-mobile").removeClass("navbar-mobile--active");
            }
    });
});