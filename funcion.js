// JavaScript Document
$(document).on("pagecreate","#page2",function(){
  $("p").on("tap",function(){
    $(this).hide();
  });                       
});

$(document).on("pagecreate","#page3",function(){
  $("p").on("taphold",function(){
    $(this).hide();
  });                       
});

$(document).on("pagecreate","#page4",function(){
  $("p").on("swipe",function(){
    $("span").text("Swipe detected!");
  });                       
});

$(document).on("pagecreate","#page5",function(){
  $("p").on("swipeleft",function(){
    alert("deslizaste a la izquierda!");
  });                       
});

$(document).on("pagecreate","#page6",function(){
  $("p").on("swiperight",function(){
    alert("deslizaste a la derecha!");
  });                       
});