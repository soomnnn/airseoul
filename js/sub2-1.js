// JavaScript Document

 $(function() {
    $(".years1").on("click",function(){
	$(".years1 p").css("text-decoration","underline").css("color","#000");
		$(".years2 p,.years3 p,.years4 p").css("color","#999").css("text-decoration","none");
		 $(".history1").css("display","block");
		 $(".history2").css("display","none");
		 $(".history3").css("display","none");
		$(".history4").css("display","none");
		
		});
	
	 $(".years2").on("click",function(){
		$(".years2 p").css("text-decoration","underline").css("color","#000");
		 $(".years1 p,.years3 p,.years4 p").css("color","#999").css("text-decoration","none");
		 $(".history2").css("display","block");
		 $(".history1").css("display","none");
		 $(".history3").css("display","none");
		 $(".history4").css("display","none");
		});
	 
	 $(".years3").on("click",function(){
		$(".years3 p").css("text-decoration","underline").css("color","#000");
		 $(".years2 p,.years1 p,.years4 p").css("color","#999").css("text-decoration","none");
		 $(".history3").css("display","block");
		 $(".history1").css("display","none");
		 $(".history2").css("display","none");
		 $(".history4").css("display","none");
		});
	 
	 $(".years4").on("click",function(){
		$(".years4 p").css("text-decoration","underline").css("color","#000");
		 $(".years2 p,.years3 p,.years1 p").css("color","#999").css("text-decoration","none");
		 $(".history4").css("display","block");
		 $(".history1").css("display","none");
		 $(".history3").css("display","none");
		 $(".history2").css("display","none");
		});
 });