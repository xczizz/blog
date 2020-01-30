$(document).ready(function () {
 $(".post-body img").each(function(){
     var img_title = $(this).attr("alt");
     if(img_title != ""){
         var html = "<div class='image-caption-border'><div class='image-caption'>"+ img_title +"</div></div>";
         $(this).after(html);
     }
 })
})