!function(e){var t={};function o(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t){e.exports=jQuery},function(e,t,o){"use strict";var a,r=o(0),i=(a=r)&&a.__esModule?a:{default:a};o(2),o(3),o(4),o(5),(0,i.default)(document).ready((function(){(0,i.default)(".scroll").click((function(){return(0,i.default)("html, body").animate({scrollTop:(0,i.default)((0,i.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,i.default)("[data-fancybox]").length>0&&(0,i.default)("[data-fancybox]").fancybox({autoFocus:!1}),(0,i.default)('a[data-trigger="click"]').click((function(e){e.preventDefault()})),(0,i.default)(".toggle-item .toggle-item__title").on("click",(function(e){e.preventDefault();var t=(0,i.default)(this).parent();t.hasClass("toggle-item--active")?(t.removeClass("toggle-item--active"),t.find(".toggle-item__title").removeClass("toggle-item__title--active"),t.find(".toggle-item__content").slideUp()):(t.addClass("toggle-item--active"),t.find(".toggle-item__title").addClass("toggle-item__title--active"),t.find(".toggle-item__content").slideDown())}))}))},function(e,t,o){"use strict";var a,r=o(0),i=(a=r)&&a.__esModule?a:{default:a};(0,i.default)(document).ready((function(){(0,i.default)(".slider").length>0&&(0,i.default)(".slider.slider_index").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,dots:!1,autoplay:!1})}))},function(e,t,o){"use strict";var a,r=o(0),i=(a=r)&&a.__esModule?a:{default:a};(0,i.default)(document).ready((function(){(0,i.default)(".phone").length>0&&(0,i.default)(".phone").inputmask({mask:"+7 999 999 99 99",placeholder:" ",showMaskOnHover:!0,onincomplete:function(){(0,i.default)(this).closest("form").addClass("error-phone"),(0,i.default)(this).addClass("error"),(0,i.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер")},oncomplete:function(){(0,i.default)(this).closest("form").removeClass("error-phone"),(0,i.default)(this).removeClass("error"),(0,i.default)(this).siblings(".error_phone").removeClass("error").html("")}}),(0,i.default)("input.phone").on("keydown",(function(e){if(13===e.keyCode&&!(0,i.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,i.default)(this).blur(),!1}))}))},function(e,t,o){"use strict";var a,r=o(0),i=(a=r)&&a.__esModule?a:{default:a};(0,i.default)(document).ready((function(){(0,i.default)(".header .header__nav").on("click",(function(){(0,i.default)(this).hasClass("header__nav--active")?((0,i.default)(this).removeClass("header__nav--active"),(0,i.default)(".navbar-mobile").removeClass("navbar-mobile--active")):((0,i.default)(this).addClass("header__nav--active"),(0,i.default)(".navbar-mobile").addClass("navbar-mobile--active"))})),(0,i.default)(document).mouseup((function(e){var t=(0,i.default)(".navbar-mobile.navbar-mobile--active");t.is(e.target)||0!==t.has(e.target).length||(0,i.default)(".header .header__nav").is(e.target)||(0,i.default)(".navbar-mobile").removeClass("navbar-mobile--active")}))}))},function(e,t,o){"use strict";var a,r=o(0),i=(a=r)&&a.__esModule?a:{default:a};(0,i.default)(document).ready((function(){if(mapboxgl.accessToken="pk.eyJ1Ijoid2Vic29obyIsImEiOiJja2d0YnJleGMwOWs4MnJvNjZmeHQ0ZHd5In0.O3SaifC5NcA4dP8eWN1O1w",(0,i.default)("#map").length>0){var e=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/light-v10",center:[12,30],zoom:1}),t=new mapboxgl.NavigationControl;e.addControl(t,"top-left");[{type:"Feature",geometry:{type:"Point",coordinates:[25.286389,42.725351]},properties:{title:"Bulgaria",description:"Origins"}},{type:"Feature",geometry:{type:"Point",coordinates:[24.744553,46.192021]},properties:{title:"Romania",description:"Origins"}},{type:"Feature",geometry:{type:"Point",coordinates:[25.8441,56.896888]},properties:{title:"Latvia",description:"Baltic Sea countries | Origins"}},{type:"Feature",geometry:{type:"Point",coordinates:[25.660789,58.564388]},properties:{title:"Estonia",description:"Baltic Sea countries | Origins"}},{type:"Feature",geometry:{type:"Point",coordinates:[23.600189,55.508473]},properties:{title:"Lithuania",description:"Baltic Sea countries | Origins"}},{type:"Feature",geometry:{type:"Point",coordinates:[99.505405,61.698653]},properties:{title:"Russia",description:"Origins"}},{type:"Feature",geometry:{type:"Point",coordinates:[31.482771,49.02753]},properties:{title:"Ukraine",description:"Origins"}},{type:"Feature",geometry:{type:"Point",coordinates:[-99.115868,36.952915]},properties:{title:"North America",description:"Origins"}},{type:"Feature",geometry:{type:"Point",coordinates:[-53.373061,-8.626851]},properties:{title:"South America",description:"Origins"}}].forEach((function(t){var o=document.createElement("div");o.className="map-marker-1",new mapboxgl.Marker(o).setLngLat(t.geometry.coordinates).addTo(e),new mapboxgl.Marker(o).setLngLat(t.geometry.coordinates).setPopup(new mapboxgl.Popup({offset:25}).setHTML("<p>"+t.properties.title+'</p><p class="text-small mb-0">'+t.properties.description+"</p>")).addTo(e)})),[{type:"Feature",geometry:{type:"Point",coordinates:[-7.309735,30.863677]},properties:{title:"Morocco",description:"Destinations"}},{type:"Feature",geometry:{type:"Point",coordinates:[9.602442,34.773985]},properties:{title:"Tunis",description:"Destinations"}},{type:"Feature",geometry:{type:"Point",coordinates:[17.468477,27.747254]},properties:{title:"Libya",description:"Destinations"}},{type:"Feature",geometry:{type:"Point",coordinates:[29.90523,26.112189]},properties:{title:"Egypt",description:"Destinations"}},{type:"Feature",geometry:{type:"Point",coordinates:[56.30792,20.114063]},properties:{title:"Oman",description:"Destinations"}},{type:"Feature",geometry:{type:"Point",coordinates:[45.725533,22.848295]},properties:{title:"Saudi Arabia",description:"Destinations"}}].forEach((function(t){var o=document.createElement("div");o.className="map-marker-2",new mapboxgl.Marker(o).setLngLat(t.geometry.coordinates).addTo(e),new mapboxgl.Marker(o).setLngLat(t.geometry.coordinates).setPopup(new mapboxgl.Popup({offset:25}).setHTML("<p>"+t.properties.title+'</p><p class="text-small mb-0">'+t.properties.description+"</p>")).addTo(e)}))}if((0,i.default)("#mapOffice").length>0){var o=new mapboxgl.Map({container:"mapOffice",style:"mapbox://styles/mapbox/light-v10",center:[6.1493,46.200767],zoom:14}),a=new mapboxgl.NavigationControl;o.addControl(a,"top-left");[{type:"Feature",geometry:{type:"Point",coordinates:[6.1493,46.200767]},properties:{title:"Head Office",description:"EURO COMM SA, 4 Place du Bourg de Four, 1204 Geneva, Switzerland"}}].forEach((function(e){var t=document.createElement("div");t.className="map-marker-1",new mapboxgl.Marker(t).setLngLat(e.geometry.coordinates).addTo(o),new mapboxgl.Marker(t).setLngLat(e.geometry.coordinates).setPopup(new mapboxgl.Popup({offset:25}).setHTML('<p class="text-bold mb-0">'+e.properties.title+'</p><p class="text-small mb-0">'+e.properties.description+"</p>")).addTo(o)}))}}))}]);