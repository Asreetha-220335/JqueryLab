$(document).ready(function(){
    // css()
    $("#b1").click(function(){
        $("#text").css("color","red");
    });
    // addClass()
    $("#b2").click(function(){
        $("#text").addClass("highlight");
    });
    // removeClass()
    $("#b3").click(function(){
        $("#text").removeClass("highlight");
    });
    // toggleClass()
    $("#b4").click(function(){
        $("body").toggleClass("dark");
    });
    // hasClass()
    $("#b5").click(function(){
    if($("#text").hasClass("highlight"))
    alert("Highlight applied");
    else
    alert("Highlight not applied");
    });

});