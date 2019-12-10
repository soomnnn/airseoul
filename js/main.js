
$(document).ready(function(){
    $('#reser_journey_type > div').click(function(){
        var target = $(this)
      if(!target.hasClass("on")){
        $('#reser_journey_type > div').removeClass("on")
          target.addClass("on")
      } 
        
    });	
	
	
	$("#header_menu nav").on("mouseover",function(){
         $(".drop_inner").slideDown(300);
         $("#drop_sub").fadeIn(250);
         
    });   
   
   $("#header_menu").on("mouseleave",function(){
        $(".drop_inner").slideUp(300);
        $("#drop_sub").fadeOut(250);
    });
	
		
});
		
// JavaScript Document
//$(function(){
//	
//	 // 충돌방지
//   var $j144 = jQuery.noConflict();   
//
//    $j144(document).ready(function($){    
//		$('#popupDatepicker').datepick();
//		$('#popupDatepicker2').datepick();
//		});
//	function showDate(date) {
//	alert('The date chosen is ' + date);
//}
    
	

