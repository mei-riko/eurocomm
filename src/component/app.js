import $ from 'jquery';

import '../component/slider/slider';
import '../component/input/input';
import '../component/map/map';

$(document).ready(() =>{
  // Плавные скролл
  $(".scroll").click(function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });
  // Fancybox Modal Form
  if( $('[data-fancybox]').length > 0 ){
    $('[data-fancybox]').fancybox({autoFocus: false});
  }
  // Отмена стандартного поведения ссылки
  $('a[data-trigger="click"]').click(function(e){e.preventDefault();})
  // Раскрытие блока
  $('.toggle-item .toggle-item__title').on("click", function(e){
    e.preventDefault();
    let toggle = $(this).parent();
    if( !toggle.hasClass("toggle-item--active")){
      toggle.addClass("toggle-item--active");
      toggle.find(".toggle-item__title").addClass("toggle-item__title--active");
      toggle.find(".toggle-item__content").slideDown();
		}else{
			toggle.removeClass("toggle-item--active");
      toggle.find(".toggle-item__title").removeClass("toggle-item__title--active");
      toggle.find(".toggle-item__content").slideUp();
    }
  });
});