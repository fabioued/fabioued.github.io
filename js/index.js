'use strict';
$(window).on("load", function() {
	var preload = $('.preloader');
	var lines = $('.lines-grid');
	preload.find('.spinner').fadeOut(function(){
		preload.fadeOut();
		lines.addClass('loaded');
	});
});



$(function () {

	
	var width = $(window).width();
	var height = $(window).height();

	/* Menu Mobile */

	$('.header').on('click', '.menu-btn', function(){
		if($('.header').hasClass('opened')) {
			$('.header').removeClass('opened');
		} else {
			$('.header').addClass('opened');
		}
	});



	/* Header Menu Desktop */
	
	if($('#home-area').length) {
		$('.main-nav').on('click', 'a', function(){


			var lines_grid = $('.lines-grid');
			var id = $(this).attr('href');
			var area_items = $('.area-inner');
			var area_item = $(id);
			var menu_items = $('.main-nav li');
			var menu_item = $(this).closest('li');
			
			if(!menu_item.hasClass('active') & $('#home-area').length) {

				/* close area items */
				menu_items.removeClass('active');
				lines_grid.removeClass('loaded');

				/* open area item */
				menu_item.addClass('active');
				setTimeout(function() {
					lines_grid.addClass('loaded');
					$(area_items).removeClass('active');
					$(area_item).addClass('active');
				}, 1000);
			}
		
			return false;
		});
	}


	/* Header Menu Inner Page */
	$('.main-nav').on('click', 'a', function(){

		if(!$('#home-area').length) {
			location.href = '/patrick/' + $(this).attr('href');
		}
	
		return false;
	});

	var url_hash = location.hash;
	var sectionElem = $(url_hash);
	if(url_hash.indexOf('#') == 0 && url_hash.indexOf('-area') != -1 && sectionElem.length){
		$('.main-nav li').removeClass('active');
		$('.main-nav a[href="'+url_hash+'"]').parent().addClass('active');

		$('.lines-grid').removeClass('loaded');
		$('.area-inner').removeClass('active');

		$(url_hash).addClass('active');
	}


/*
		Typed Title
	*/

	$('.typed-title').typed({
		stringsElement: $('.typing-title'),
		backDelay: 1000, /* Delay in text change */
		typeSpeed: 0, /* Typing speed */
		loop: true
	});

});


$(window).on('load', function() {
		// Masonry grid
		$('.pt-portfolio-items').isotope();

		// Portfolio Category Menu
		$('.cat-nav li').on('click', function() {
			$('.cat-nav li').removeClass("active");
			$(this).addClass("active");
			var selector = $(this).attr('data-filter');
			$('.pt-portfolio-items').isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});
		});
	});    

$(window).on('load', function(){
	"use strict";
    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller();
    $('#bar4').barfiller();
    $('#bar5').barfiller();
});

// Mobile menu
$('.menu-toggle').on('click', function() { 
    $('.header').toggleClass('mobile-menu-hide');
    $('.menu-toggle').toggleClass('open');
    $('.page-wrapper').toggleClass('bring-image');
    $('.content-wrapper').toggleClass('holo');
});

