// JavaScript Document

 $(function() {
    $(".years1").on("click",function(){
		
		 $(".history1").css("display","block");
		 $(".history2,.history3,.history").css("display","none");
		
		 
	 });
	 
	  $(".years2").on("click",function(){
		
		 $(".history2").css("display","block");
		 $(".history1").css("display","none");
		 $(".history3").css("display","none");
		$(".history4").css("display","none");
	 });
	 
	 $(".years3".).on("click",function(){
		 
		 $(".history3").css("display","block");
	
	 });
	
	 
 });