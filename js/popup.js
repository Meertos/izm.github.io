$(document).ready(function() {
	$overlay 			= $('.overlay'),
	$popup				= $('.popup-feedback'),
	$popupRepair	= $('.popup-repair'),
	$btn 					= $('.btn-close'),
	$callPopup 		= $('.feedback'),
	$nav 					= $('nav'),
	$repair 			= $('.repair1').find('.content'),
	$advant				= $('.main').find('.content');

	// $repair = $('.repair').offset().top;	

	$('.loading').hide();
	$('body').css({
		overflow: 'auto'
	});


	$callPopup.click(function(event) {
		if($isMenuTriggered != false) $('.top-menu').css('transform', 'translateX(-1000px)');
		$overlay.show();
		$popup.css({
			"left": "50%"
		});
		$('body').css({
			overflow: 'hidden'
		});
	});

	$('.top-menu > li').click(function() {
		$('.top-menu > input').prop('checked', false);
	});

	$btn.click(function(event) {
		$overlay.hide();
		$('body').css('overflow', 'auto');
	});

	$repair.mouseenter(function() {
		$(this).find('img').css('transform', 'scale(1.3)');
	});

	$repair.mouseleave(function() {
		$(this).find('img').css('transform', 'scale(1)');
	});

	$height = 0;
	$repair.each(function() {
		$blockHeight = parseInt($(this).height());
		if($blockHeight > $height) $height = $blockHeight;
	});
	$repair.height($height);

	$repair.click(function() {
		$(this).css('height', 'auto');
		$(this).find('ul').slideDown(700);
	});

	$repair.mouseleave(function() {
		$(this).find('img').css('transform', 'scale(1)');
	});

	$height = 0;
	$advant.find('.text').each(function() {
		$blockHeight = parseInt($(this).height());
		if($blockHeight > $height) $height = $blockHeight;
	});
	$advant.find('.text').height($height);

	// $repair.click(function() {
	// 	// $title = $(this).find('.title').text();
	// 	// console.log($title);
	// 	// $overlay.show();
	// 	// $popupRepair.show();
	// 	// $popupRepair.find('.title').text($title);
	// 	$(this).find('ul').show();
	// 	console.log($repair.length);
	// });

	// $space = $nav.offset().top;

	// $(window).scroll(function() {
	// 	if($(this).scrollTop() > $space) {
	// 		console.log('ПОЕХАЛИ');
	// 		$nav.addClass('top-nav');
	// 	}

	// 	else {
	// 		$nav.removeClass('top-nav');
	// 	}
	// });

	// var margin = -200;
	// $('a').on("click", function(e) {
	// 	$('html, body').stop().animate({ scrollTop: $(this.hash).offset().top + '200px'}, 1000);
	// 	e.preventDefault();
	// });
	// $('a').click(function() {
	// 	$('html, body').animate({
	// 		scrollTop: $($(this).attr("href")).offset().top+margin+"px"
	// 	}, {
	// 		duration: 1000,
	// 		easing: "swing"
	// 	});
	// 	console.log($('nav').children('li'));
	// 	$('nav').children('li').removeClass('active');
	// 	return false;
	// });

	// $('nav li').click(function() {
	// 	if(!$(this).hasClass('active')) {
	// 		$(this).parents('nav').find('.active').removeClass('active');
	// 		$(this).addClass('active');
	// 		console.log('сработало');
	// 	}
	// });

	// $('li').click(function() {
	// 	console.log('клик');
	// 	$(this).find('ol').toggle();
	// 	console.log($(this));
	// 	return false;
	// });

	// $('#repair').on('click', 'li', function() {
	// 	console.log('клик');
	// });

	$('.slider').slick({
		infinite: true,
		speed: 350,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrow: true
	});

	$('#number').mask("+7 (999) 999-99-99");

	$isMenuTriggered = false;

	$('.call-menu').click(function() {
		if($isMenuTriggered !=true) {
			$('.top-menu').css('transform', 'translateX(0)');
			$isMenuTriggered = true;
		}
		else {
			$('.top-menu').css('transform', 'translateX(-1000px)');
			$isMenuTriggered = false;
		}
	});
});