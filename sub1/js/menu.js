// JavaScript Document
$(function(){
	$("#header_menu nav").on("mouseover",function(){
         $(".drop_inner").slideDown(300);
         $("#drop_sub").fadeIn(250);
         
    });   
   
   $("#header_menu").on("mouseleave",function(){
        $(".drop_inner").slideUp(300);
        $("#drop_sub").fadeOut(250);
    });
	
});