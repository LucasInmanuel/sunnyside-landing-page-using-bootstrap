$(function(){

	$('img').mousedown(function(){
		return false
	});

	$('a[class=copy-protect]').click(function(){
		return false
	});

	$(window).resize(function(){
		setTimeout(function(){
			location.reload();
		},1000);
	});

	initMediaQuery();
	menuMobile();
	
	function menuMobile(){

		var menuDisplay = $('.mobile-menu ul').css('display');

		$('.mobile-menu').click(function(){
				$('.mobile-menu').find('ul').show(300);
		});

		
		$('.mobile-menu span').click(function(e){
				$('.mobile-menu').stop().find('ul').hide(300);
				e.stopPropagation();
		});

	}


	function initMediaQuery(){
 		
 		var windowSize = $(window).innerWidth();
 		var header = $('header');
 		var mosaicosImg = $('section.mosaicos a img');
 		var galeryImg = $('section.galery-images img');
 		
 		if(windowSize < 530){
			header.removeClass('bg-header-desktop').addClass('bg-header-mobile');

			mosaicosImg.each(function(){
				var mosaicoImgSplit = $(this).attr('src').split('/');
				$(this).attr('src',mosaicoImgSplit[0]+'/'+'mobile/'+mosaicoImgSplit[2]);
			});

			galeryImg.each(function(){
				var galeryImgSplit = $(this).attr('src').split('/');
				$(this).attr('src',galeryImgSplit[0]+'/'+'mobile/'+galeryImgSplit[2]);
			});
		}

	};

});