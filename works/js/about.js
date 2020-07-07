$(function(){
	scroll_effect();
	//スクロール時
	$(window).scroll(function(){
		scroll_effect();
	});
	//関数定義
	function scroll_effect(){
		$(".effect").each(function(){
			var elmPos = $(this).offset().top;
			var srlTop = $(window).scrollTop();
			var wh = $(window).height();
			var difference =330;
			
			if( srlTop > elmPos - wh +difference){
				$(this).addClass("effect-scroll");
			}
		});
	}
});
