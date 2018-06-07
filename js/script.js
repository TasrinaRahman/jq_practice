function myWork() {
    document.getElementById("demo").innerHTML="Yahoo!Got it";
}

$(document).ready(function(){
    $("#btn").click(function(){
         $("#btn").fadeOut(3000);
    });
    
     $(".ctm").fadeTo(2000,0.3,function(){
         alert("Yahoo,Got It!");
    });
    
     $(".tog").click(function(){
         $(".text").toggle(2000);
    });
    
     $("#flip").click(function(){
         $("#panel").slideToggle("slow");
    });
    
    $("li:odd").addClass("odd");
    $("li:even").addClass("even");
    $("li:first").addClass("first");
    $("li:last").addClass("last");
    $("li:nth").addClass("nth");
    
});
