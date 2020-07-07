$(function(){
	var dir = -1;
	
	var interval = 4000;
	
	var duration = 700;
	
	var timer;
	
	var width;
  
	var height;
  if(window.innerWidth < 750){
	  width = window.innerWidth;
  }else{
	  width = 750;
  }
  height = $("#mainVisual img").height();
  
  $("#mainVisual").css({"width":width, "height":height});
  
  $("#mainVisuale ul").prepend($("#mainVisual li:last-child"));

  $("#mainVisual ul").css("left", -width);

  timer = setInterval(slideTimer, interval);


  // 前へ戻るボタン
  $("#prevBtn").click(function(){

    dir = 1;

    // タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    // 初回の関数実行
    slideTimer();
  });

  // 次へ進むボタン
  $("#nextBtn").click(function(){
    // スクロール方向の切り替え（左）
    dir = -1;

    // タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);

    // 初回の関数実行
    slideTimer();
  });

	//リサイズ時の処理
	$(window).resize(function(){
		if( window.innerWidth < 750 ){
			//innerWidth-18にすると横スクロールバーが出ない
			width = window.innerWidth;
		}else{
			width = 750;
		}
console.log(width);
		height = $("#mainVisual img").height();
		$("#mainVisual").css({"width":width, "height":height});
		
		$("#mainVisual ul").css("left",-width);
		
		clearInterval(timer);
		timer = setInterval(slideTimer, interval);
		
	});


  function slideTimer(){

    if(dir == -1){

      $("#mainVisual ul").animate({"left" : "-=" + width +"px"}, duration, function(){

        $(this).append($("#mainVisual li:first-child"));


        $(this).css("left", -width);
      });
    }else{

      $("#mainVisual ul").animate({"left" : "+=" + width + "px"}, duration, function(){

        $(this).prepend($("#mainVisuale li:last-child"));


        $(this).css("left", -width);


        dir = -1;
      });
    }
  }
});
