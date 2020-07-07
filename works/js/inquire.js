$(function() {
	
	$(".alert").hide();
	
	$("#submitBtn").click(function(){
		//送信フラグ
		var sendFlag = true;
		
		//１行入力フィールドの処理
		if(!$("#text1").val()){
			$("#textSection1 .alert").show();
			sendFlag = false;
		
		}else{
			$("#textSection1 .alert").hide();
			
		}
		
		//１行入力フィールドの処理
		if(!$("#text2").val()){
			$("#textSection2 .alert").show();
			sendFlag = false;
		
		}else{
			$("#textSection2 .alert").hide();
			
		}
		//１行入力フィールドの処理
		if(!$("#text3").val()){
			$("#textSection3 .alert").show();
			sendFlag = false;
		
		}else{
			$("#textSection3 .alert").hide();
			
		}
		//ラジオボタンの処理
		var radioChk = $('input[name="radio"]:checked').length;
		
		if(radioChk==0){
			$("#radioSection .alert").show();
			sendFlag = false;
		
		}else{
			$("#radioSection .alert").hide();
		}
		
		if(sendFlag == false){
		return false;
		}
	});
});
