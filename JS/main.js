$(document).ready(function () {
	// body...
	$('.btn-works[filter="web"]').click(function() {
		if ($(this).attr('val')=='off') {
			$('.btn-works[filter]').attr('val', 'off');
			$('.btn-img').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.btn-works[filter]').removeClass('focused');
			$(this).addClass('focused');
			$('.filter>div').hide(300);
			$('.filter>div[filter="web"]').show(300);
		}
	});

	$('.btn-works[filter="ud"]').click(function() {
		if ($(this).attr('val')=='off') {
			$('.btn-works[filter]').attr('val', 'off');
			$('.btn-img').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.btn-works[filter]').removeClass('focused');
			$(this).addClass('focused');
			$('.filter>div').hide(300);
			$('.filter>div[filter="ud"]').show(300);
		}
	});

	$('.btn-works[filter="mock"]').click(function() {
		if ($(this).attr('val')=='off') {
			$('.btn-works[filter]').attr('val', 'off');
			$('.btn-img').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.btn-works[filter]').removeClass('focused');
			$(this).addClass('focused');
			$('.filter>div').hide(300);
			$('.filter>div[filter="mock"]').show(300);
		}
	});

	$('.btn-works[filter="all"]').click(function() {
		if ($(this).attr('val')=='off') {
			$('.btn-works[filter]').attr('val', 'off');
			$('.btn-img').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.btn-works[filter]').removeClass('focused');
			$(this).addClass('focused');
			$('.filter>div').show(300);
		}
	});

	$('.btn-img[filter="all"]').click(function() {
		if ($(this).attr('val')=='off') {
			$('.btn-works[filter]').attr('val', 'off');
			$(this).attr('val', 'on');
			$('.btn-works[filter]').removeClass('focused');
			$(this).addClass('focused');
			$('.filter>div').show(300);
		}
	});

							
							// Слайдер 
	  $('.multiple-items').slick({
      // infinite: true,
      dots: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      dotsClass: 'dots-style',
      responsive: [
      	{
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
      		dots: true,
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    }
    ]      
    });



// М Е Н Ю 

	$('ul.menu a[href^="#"').click(function () {
		// body...
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 500);
		$('ul.menu a[href^="#"').css({
			'color':'#212121'
		});
		$(this).css({
			'color':'#004bee'
		});
		return false;

	})

	// КНОПКА ВВЕРХ 

	$(window).scroll(function () {
		// body...
		if ($(this).scrollTop() !=0) 
			$('#toTop').fadeIn();
		else
			$('#toTop').fadeOut();
	});
	$('#toTop').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 500);
	});



// ВЫПАДАЮЩЕЕ МЕНЮ 
	$('.menu-icon').click(function(){
		$('nav').slideToggle(300);
		$('ul.menu').css({
			'display':'flex', 'flex-direction':'column'
		})
		if ($('.menu-icon').html()=='<i class="fas fa-bars"></i>') {
			$(this).html('<i class="fas fa-times"></i>')
		} else {
			$(this).html('<i class="fas fa-bars"></i>')
		}
	});


});