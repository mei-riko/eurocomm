!function(e){var t={};function o(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,o),l.l=!0,l.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)o.d(n,l,function(t){return e[t]}.bind(null,l));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=jQuery},function(e,t,o){"use strict";var n,l=o(0),r=(n=l)&&n.__esModule?n:{default:n};o(2),o(3),(0,r.default)(document).ready((function(){(0,r.default)(".scroll").click((function(){return(0,r.default)("html, body").animate({scrollTop:(0,r.default)((0,r.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,r.default)("[data-fancybox]").length>0&&(0,r.default)("[data-fancybox]").fancybox({autoFocus:!1}),(0,r.default)('a[data-trigger="click"]').click((function(e){e.preventDefault()})),(0,r.default)(".toggle-item .toggle-item__title").on("click",(function(e){e.preventDefault();var t=(0,r.default)(this).parent();t.hasClass("toggle-item--active")?(t.removeClass("toggle-item--active"),t.find(".toggle-item__title").removeClass("toggle-item__title--active"),t.find(".toggle-item__content").slideUp()):(t.addClass("toggle-item--active"),t.find(".toggle-item__title").addClass("toggle-item__title--active"),t.find(".toggle-item__content").slideDown())}))}))},function(e,t,o){"use strict";var n,l=o(0),r=(n=l)&&n.__esModule?n:{default:n};(0,r.default)(document).ready((function(){(0,r.default)(".slider").length>0&&(0,r.default)(".slider.slider_index").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,autoplay:!1})}))},function(e,t,o){"use strict";var n,l=o(0),r=(n=l)&&n.__esModule?n:{default:n};(0,r.default)(document).ready((function(){(0,r.default)(".phone").length>0&&(0,r.default)(".phone").inputmask({mask:"+7 999 999 99 99",placeholder:" ",showMaskOnHover:!0,onincomplete:function(){(0,r.default)(this).closest("form").addClass("error-phone"),(0,r.default)(this).addClass("error"),(0,r.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер")},oncomplete:function(){(0,r.default)(this).closest("form").removeClass("error-phone"),(0,r.default)(this).removeClass("error"),(0,r.default)(this).siblings(".error_phone").removeClass("error").html("")}}),(0,r.default)("input.phone").on("keydown",(function(e){if(13===e.keyCode&&!(0,r.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,r.default)(this).blur(),!1}))}))}]);