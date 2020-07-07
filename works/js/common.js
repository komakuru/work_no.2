$(function(){
	var $body = $("body");
	var $nav = $("#nav");
	var $trigger = $("#tgrNav");
	var $overlay;
	var className = "is_active";
	var duration = 500;
	//ボタンの処理
	$trigger.on("click",function(){
		//非表示の処理
		if( $(this).hasClass(className) ){
			init();
		}else{
		//表示の処理
			$(this).addClass(className);
			$nav.slideDown(duration);
			$overlay = $('<div id="overlay"></div>').appendTo('body');
			$body.css("position","relative");
			
		}
	});
	//overlayクリック処理
	$body.on("click","#overlay",function(){
		init();
	});
	//関数定義
	function init(){
		$trigger.removeClass(className);	
		$nav.slideUp(duration);
		$overlay.remove();
		$body.removeAttr("style");

	}
});