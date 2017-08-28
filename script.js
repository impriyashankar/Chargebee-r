/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    
   
    $("#help-more").hide();
    $("#dev-more").hide();
    $("#prod-list").hide();
    $(".enter-arrow").hide();
    //$(".r-arrow").hide();
    //$("#collapse-menu").hide();
    //$().css();
   // $("#c-menu").addClass("collapse-menu-hide");
  $("#ftr-sch").hover(function(){
      $(this).css("opacity","1.0");
  },function(){
      $(this).css("opacity","0.7");
  });  
$("#devs").click(function(){
    $("#dev-more").slideToggle();
});

$("#help").click(function(){
    $("#help-more").slideToggle();
});
$("#prod-more").click(function(){
   $("#prod-list").slideToggle(); 
});



$(".prod-type").hover(function(){
    if($(this).attr("id") !== "last-prod" )
    {
    
    $(this).animate({"height":"195px","margin-top":"-10px","margin-bottom":"-10px"});
  $(".enter-arrow",this).fadeIn("fast");
   
   //$(".enter-arrow",this).animate("left","100px");
   $("span",this).animate({"left":"10px"});
   $(".prod-type").not(":last").not(this).css({"color":"#b3b3b3","background-color":"#384361"});
   //$(".prod-type").not("#last-prod").css({"color":"#b3b3b3","background-color":"#384361"});
    }
},
function(){
    $(this).animate({"height":"175px","margin-top":"0px","margin-bottom":"0px"});
    /*$(".enter-arrow",this).fadeOut();*/
    $("span",this).animate({"left":"0px"});
    $(".enter-arrow",this).fadeOut("200");
    $(".prod-type").not(":last").not(this).css({"color":"#fff","background-color":"#394564"});
});
$("#collapse-btn").click(function(){
    /*$("#collapse-menu").toggle(function(){
        $(this).animate({"right":"0px"});*/
    $(".p-type").animate({"right":"0px"});
    //$("#collapse-menu").animate({"right":"0px"});
    $("#c-menu").removeClass("collapse-menu-hide");
    $("#c-menu").addClass("collapse-menu-show");
    $("#overlay").addClass("fade-page-show");
    $("body").addClass("for-body");
    $("#test1").addClass("transform");
    
    });
    

$("#close").click(function(){
    //$("#collapse-menu").animate({"right":"-300px"});
    //$("#c-menu").removeClass("collapse-menu-show");
    $("#c-menu").addClass("collapse-menu-hide");
    $("#overlay").removeClass("fade-page-show");
});

$("#sign-btn").hover(function(){
   // $(".r-arrow",this).css("display","inline");
    $(".r-arrow",this).animate({"right":"0px"});
    $(".s-text",this).animate({"right":"10px"});
    /*$(this).css("padding-left","20px");
    $(this).css("padding-right","20px");*/
},function(){
    
    $(".r-arrow",this).animate({"right":"-80px"});
    //$(".r-arrow",this).fadeOut("fast");
    $(".s-text",this).animate({"right":"0px"});
});

$("#ice-btn").hover(function(){
    //$(".r-arrow",this).css("display","inline");
    $(".r-arrow",this).animate({"right":"0px"});
    $(".s-text",this).animate({"right":"10px"});
    /*$(this).css("padding-left","20px");
    $(this).css("padding-right","20px");*/
},function(){
    
    $(".r-arrow",this).animate({"right":"-80px"});
    //$(".r-arrow",this).fadeOut();
    $(".s-text",this).animate({"right":"0px"});
});

$("#ftr-sign").hover(function(){
    //$(".r-arrow",this).css("display","inline");
    $(".r-arrow",this).animate({"right":"0px"});
    $(".s-text",this).animate({"right":"10px"});
    /*$(this).css("padding-left","20px");
    $(this).css("padding-right","20px");*/
},function(){
    
    $(".r-arrow",this).animate({"right":"-80px"});
    //$(".r-arrow",this).fadeOut();
    $(".s-text",this).animate({"right":"0px"});
});

});

$(window).resize(function(){
     var size=$(window).width();
    
  if ((size <= 1100) && ($("#prod-list").css('visibility') !== "hidden"))
{
    //alert("hiii");
$("#last-prod").hide();
}
else
{
$("#last-prod").show();
}  
});

