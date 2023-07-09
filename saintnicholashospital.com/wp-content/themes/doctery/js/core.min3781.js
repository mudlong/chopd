"use strict";jQuery.fn.thsn_is_bound=function(type){if(this.data('events')!==undefined){if(this.data('events')[type]===undefined||this.data('events')[type].length===0){return!1}
return(-1!==$.inArray(fn,this.data('events')[type]))}else{return!1}};var thsn_sticky_header=function(){if(jQuery('.thsn-header-sticky-yes').length>0){var offset_px=0;if(jQuery('#wpadminbar').length>0&&(self===top)){offset_px=jQuery('#wpadminbar').height()}
jQuery('.thsn-header-menu-area.thsn-header-sticky-yes').parent().css('height',jQuery('.thsn-header-menu-area.thsn-header-sticky-yes').height());if(jQuery(document).width()>thsn_js_variables.responsive){jQuery('.thsn-header-sticky-yes').stick_in_parent({'parent':'body','spacer':!1,'offset_top':offset_px,'sticky_class':'thsn-sticky-on'}).addClass('thsn-sticky-applied')}else{if(jQuery('.thsn-header-sticky-yes').hasClass('thsn-sticky-applied')){jQuery('.thsn-header-sticky-yes').trigger("sticky_kit:detach").removeClass('thsn-sticky-applied')}}}}
var thsn_toggleSidebar=function(){jQuery(".thsn-navbar > div").toggleClass("active");if(jQuery('.thsn-navbar > div > .closepanel').length==0){jQuery('.thsn-navbar > div').append("<span class='closepanel'><i class='thsn-base-icon-cancel'></i></span>");jQuery('.thsn-navbar > div > .closepanel').on('click',function(){jQuery('.nav-menu-toggle').trigger('click')})}}
var thsn_sorting=function(){jQuery('.thsn-sortable-yes').each(function(){var boxes=jQuery('.thsn-element-posts-wrapper',this);var links=jQuery('.thsn-sortable-list a',this);boxes.isotope({animationEngine:'best-available'});links.on('click',function(e){var selector=jQuery(this).data('sortby');if(selector!='*'){var selector='.'+selector}
boxes.isotope({filter:selector,itemSelector:'.thsn-ele',layoutMode:'fitRows'});links.removeClass('thsn-selected');jQuery(this).addClass('thsn-selected');e.preventDefault()})})}
var thsn_back_to_top=function(){var btn=jQuery('.scroll-to-top');jQuery(window).scroll(function(){if(jQuery(window).scrollTop()>300){btn.addClass('show')}else{btn.removeClass('show')}});btn.on('click',function(e){e.preventDefault();jQuery('html, body').animate({scrollTop:0},'300')})}
var thsn_navbar=function(){if(!jQuery('ul#thsn-top-menu > li > a[href="#"]').thsn_is_bound('click')){jQuery('ul#thsn-top-menu > li > a[href="#"]').click(function(){return!1})}
jQuery('.thsn-navbar > div > ul li:has(ul)').append("<span class='sub-menu-toggle'><i class='thsn-base-icon-down-open-big'></i></span>");jQuery('.thsn-navbar li').hover(function(){if(jQuery(this).children("ul").length==1){var parent=jQuery(this);var child_menu=jQuery(this).children("ul");if(jQuery(parent).offset().left+jQuery(parent).width()+jQuery(child_menu).width()>jQuery(window).width()){jQuery(child_menu).addClass('thsn-nav-left')}else{jQuery(child_menu).removeClass('thsn-nav-left')}}});jQuery(".nav-menu-toggle").on("click tap",function(){thsn_toggleSidebar()});jQuery('.sub-menu-toggle').on('click',function(){if(jQuery(this).siblings('.sub-menu, .children').hasClass('show')){jQuery(this).siblings('.sub-menu, .children').removeClass('show');jQuery('i',jQuery(this)).removeClass('thsn-base-icon-up-open-big').addClass('thsn-base-icon-down-open-big')}else{jQuery(this).siblings('.sub-menu, .children').addClass('show');jQuery('i',jQuery(this)).removeClass('thsn-base-icon-down-open-big').addClass('thsn-base-icon-up-open-big')}
return!1});jQuery('.nav-menu-toggle').on('click',function(){jQuery('.thsn-navbar ul.menu > li > a').on('click',function(){if(jQuery(this).attr('href')=='#'&&jQuery(this).siblings('ul.sub-menu, ul.children').length>0){jQuery(this).siblings('.sub-menu-toggle').trigger('click');return!1}})})}
var thsn_lightbox=function(){var i_type='image';jQuery('a.thsn-lightbox, a.thsn-lightbox-video, .thsn-lightbox-video a, .thsn-lightbox a').each(function(){if(jQuery(this).hasClass('thsn-lightbox-video')||jQuery(this).closest('.elementor-element').hasClass('thsn-lightbox-video')){i_type='iframe'}else{i_type='image'}
jQuery(this).magnificPopup({type:i_type})})}
var thsn_video_popup=function(){jQuery('.thsn-popup').on('click',function(event){event.preventDefault();var href=jQuery(this).attr('href');var title=jQuery(this).attr('title');window.open(href,title,"width=600,height=500")})}
var thsn_testimonial=function(){jQuery('.thsn-testimonial-active').each(function(){var ele_parent=jQuery(this).closest('.thsn-element-posts-wrapper');jQuery('.themesion-ele.themesion-ele-testimonial',ele_parent).on('mouseover',function(){jQuery('.themesion-ele.themesion-ele-testimonial',ele_parent).removeClass('thsn-testimonial-active');jQuery(this).addClass('thsn-testimonial-active')})})}
var thsn_search_btn=function(){jQuery(function(){jQuery('.thsn-header-search-btn').on("click",function(event){event.preventDefault();jQuery(".thsn-header-search-form-wrapper").addClass("open");jQuery('.thsn-header-search-form-wrapper input[type="search"]').focus()});jQuery(".thsn-search-close").on("click keyup",function(event){jQuery(".thsn-header-search-form-wrapper").removeClass("open")})})}
var thsn_gallery=function(){jQuery("div.thsn-gallery").each(function(){jQuery(this).lightSlider({item:1,auto:!0,loop:!0,controls:!1,speed:1500,pause:5500})})}
var thsn_center_logo_header_class=function(){if(jQuery('#masthead.thsn-header-style-5 ul#thsn-top-menu').length>0){var has_class=jQuery('#masthead.thsn-header-style-5 ul#thsn-top-menu > li').hasClass('thsn-logo-append');if(has_class==!1){var total_li=jQuery('#masthead.thsn-header-style-5 ul#thsn-top-menu > li').length;var li=Math.floor(total_li/2);jQuery('#masthead.thsn-header-style-5 ul#thsn-top-menu > li:nth-child('+li+')').addClass('thsn-logo-append')}}}
var thsn_selectwrap=function(){jQuery("select:not(#rating)").each(function(){jQuery(this).wrap("<div class='thsn-select'></div>")})}
var thsn_circle_progressbar=function(){jQuery('.thsn-circle-outer').each(function(){var this_circle=jQuery(this);var emptyFill_val="rgba(0, 0, 0, 0)";var thickness_val=10;var fill_val=this_circle.data('fill');if(typeof this_circle.data('emptyfill')!=='undefined'&&this_circle.data('emptyfill')!=''){emptyFill_val=this_circle.data('emptyfill')}
if(typeof this_circle.data('thickness')!=='undefined'&&this_circle.data('thickness')!=''){thickness_val=this_circle.data('thickness')}
if(typeof this_circle.data('filltype')!=='undefined'&&this_circle.data('filltype')=='gradient'){fill_val={gradient:[this_circle.data('gradient1'),this_circle.data('gradient2')],gradientAngle:Math.PI/4}}
if(typeof jQuery.fn.circleProgress=="function"){var digit=this_circle.data('digit');var before=this_circle.data('before');var after=this_circle.data('after');var c_width=this_circle.data('width');var digit=Number(digit);var short_digit=(digit/100);jQuery('.thsn-circle',this_circle).circleProgress({value:0,size:c_width,startAngle:-Math.PI/4*2,thickness:thickness_val,emptyFill:emptyFill_val,fill:fill_val}).on('circle-animation-progress',function(event,progress,stepValue){this_circle.find('.thsn-circle-number').html(before+Math.round(stepValue*100)+after)})}
this_circle.waypoint(function(direction){if(!this_circle.hasClass('completed')){if(typeof jQuery.fn.circleProgress=="function"){jQuery('.thsn-circle',this_circle).circleProgress({value:short_digit})};this_circle.addClass('completed')}},{offset:'85%'})})}
var thsn_carousel=function(){jQuery(".themesion-element-viewtype-carousel").each(function(){var carouselElement=jQuery(this);jQuery('.thsn-ele',carouselElement).removeClass(function(index,className){return(className.match(/(^|\s)col-md-\S+/g)||[]).join(' ')}).removeClass(function(index,className){return(className.match(/(^|\s)col-lg-\S+/g)||[]).join(' ')});var columns=jQuery(this).data('columns');var loop=jQuery(this).data('loop');if(columns=='1'){var responsive_items=['1','1','1','1','1']}else if(columns=='2'){var responsive_items=['2','2','2','2','1']}else if(columns=='3'){var responsive_items=['3','2','2','2','1']}else if(columns=='4'){var responsive_items=['4','4','3','2','1']}else if(columns=='5'){var responsive_items=['5','4','3','2','1']}else if(columns=='6'){var responsive_items=['6','4','3','2','1']}else{var responsive_items=['3','3','3','2','1']}
var margin_val=30;if(jQuery(carouselElement).data('margin')!=''){margin_val=jQuery(carouselElement).data('margin')}
var posts_wrapper_class='.thsn-element-posts-wrapper';if(jQuery(carouselElement).hasClass('thsn-element-team-style-1')){posts_wrapper_class='.thsn-team-1-carousel-area > .thsn-team-1-inner > .row'}
var val_nav=jQuery(carouselElement).data('nav');if(val_nav=='above'){val_nav=!1}
var car_options={loop:jQuery(carouselElement).data('loop'),autoplay:jQuery(carouselElement).data('autoplay'),center:jQuery(carouselElement).data('center'),nav:val_nav,dots:jQuery(carouselElement).data('dots'),autoplaySpeed:jQuery(carouselElement).data('autoplayspeed'),autoplayTimeout:jQuery(carouselElement).data('autoplayspeed')+5000,navSpeed:jQuery(carouselElement).data('autoplayspeed'),dotsSpeed:jQuery(carouselElement).data('autoplayspeed'),dragEndSpeed:jQuery(carouselElement).data('autoplayspeed'),margin:30,items:columns,responsiveClass:!0,responsive:{1199:{items:responsive_items[0],},991:{items:responsive_items[1],},767:{items:responsive_items[2],},575:{items:responsive_items[3],},0:{items:responsive_items[4],}}};if(typeof margin_val=="string"&&margin_val!=''){margin_val=margin_val.replace('px','');margin_val=parseInt(margin_val);car_options.margin=margin_val}
var thsn_owl=jQuery(posts_wrapper_class,carouselElement).removeClass('row multi-columns-row').addClass('owl-carousel').owlCarousel(car_options);jQuery('.thsn-carousel-prev',carouselElement).click(function(event){event.preventDefault();thsn_owl.trigger('prev.owl.carousel',[jQuery(carouselElement).data('autoplayspeed')])});jQuery('.thsn-carousel-next',carouselElement).click(function(event){event.preventDefault();thsn_owl.trigger('next.owl.carousel',[jQuery(carouselElement).data('autoplayspeed')])})})};var thsn_menu_count=function(){if(jQuery('ul#thsn-top-menu > li').length>0||jQuery('div#thsn-top-menu > ul > li').length>0){if(jQuery('ul#thsn-top-menu > li').length>0){var total_li=jQuery('ul#thsn-top-menu > li').length}
if(jQuery('div#thsn-top-menu > ul > li').length>0){var total_li=jQuery('div#thsn-top-menu > ul > li').length}
if(total_li>6){jQuery('#site-navigation').addClass('thsn-bigger-menu')}}}
var thsn_number_rotate=function(){jQuery(".thsn-number-rotate").each(function(){var self=jQuery(this);var delay=(self.data("appear-animation-delay")?self.data("appear-animation-delay"):0);var animation=self.data("appear-animation");if(jQuery(window).width()>959){self.html('0');self.waypoint(function(direction){if(!self.hasClass('completed')){var from=self.data('from');var to=self.data('to');var interval=self.data('interval');self.numinate({format:'%counter%',from:from,to:to,runningInterval:2000,stepUnit:interval,onComplete:function(elem){self.addClass('completed')}})}},{offset:'85%'})}else{if(animation=='animateWidth'){self.css('width',self.data("width"))}}})};var thsn_img_size_correction=function(){setTimeout(function(){jQuery("img").each(function(){var thisimg=jQuery(this);var p_width=jQuery(this).parent().width();var width=jQuery(this).attr('width');var height=jQuery(this).attr('height');if((typeof width!==typeof undefined&&width!==!1)&&(typeof height!==typeof undefined&&height!==!1)){var ratio=height/width;jQuery(this).data('thsn-ratio',ratio);var real_width=jQuery(this).width();var new_height=Math.round(real_width*ratio)}})},100)};var thsn_tabs_element=function(){var tabs='';var tab_number='';jQuery('.thsn-tabs').each(function(){tabs=jQuery(this);jQuery('.thsn-tab-link',tabs).on('click',function(){if(!jQuery(this).hasClass('thsn-tab-li-active')){jQuery('.thsn-tab-link',tabs).removeClass('thsn-tab-li-active');jQuery(this).addClass('thsn-tab-li-active');tab_number=jQuery(this).data('thsn-tab');jQuery('.thsn-tab-content',tabs).removeClass('thsn-tab-active');jQuery('.thsn-tab-content-'+tab_number,tabs).addClass('thsn-tab-active')}});jQuery('.thsn-tab-content-title',tabs).on('click',function(){tab_number=jQuery(this).data('thsn-tab');jQuery('li.thsn-tab-link[data-thsn-tab="'+tab_number+'"]').trigger('click')})})};var thsn_set_team_right_column=function(){setTimeout(function(){jQuery('.thsn-element-team-style-1').each(function(){var thisele=jQuery(this);if(jQuery(this).closest('.elementor-element.elementor-section-stretched.elementor-section-full_width')&&jQuery(this).hasClass('themesion-element-viewtype-carousel')){var body_width=jQuery('body').outerWidth();var container_width=jQuery('.thsn-container',thisele).outerWidth();var margin_left=(body_width-container_width)/2;jQuery('.thsn-team-1-carousel-area',thisele).css('margin-left',margin_left)}})},100)};jQuery(window).resize(function(){thsn_set_team_right_column();setTimeout(function(){thsn_sticky_header()},100);thsn_img_size_correction()});jQuery(document).ready(function(){thsn_set_team_right_column();thsn_tabs_element();thsn_sorting();thsn_back_to_top();thsn_sticky_header();thsn_navbar();thsn_lightbox();thsn_video_popup();thsn_testimonial();thsn_search_btn();thsn_center_logo_header_class();thsn_selectwrap();thsn_menu_count();setTimeout(function(){thsn_carousel()},100);thsn_img_size_correction();thsn_number_rotate();setTimeout(function(){thsn_sticky_header()},100)});jQuery(window).on('load',function(){thsn_sorting();thsn_gallery();thsn_sticky_header();thsn_circle_progressbar()});