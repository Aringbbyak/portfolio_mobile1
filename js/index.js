$(document).ready(function(){
   
});

function slide(){
    $("#main_slide").delay(1000).animate({marginLeft:"-100%"},1000,function(){
        $("#main_slide a:first").appendTo( $("#main_slide") );
        $("#main_slide").css("margin-left","0");
    });

}

setInterval("slide()",1000);