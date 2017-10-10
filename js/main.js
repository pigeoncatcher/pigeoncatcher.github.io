$(document).ready(function(){
    $("#chat-hide").click(function(){
        $("#chat").animate({height: "0px"});
        $("#side-chat").animate({height: "0px"});
        $("#chat-show").animate({opacity: 1},50);

    });
    $("#chat-show").click(function(){
        $("#side-chat").animate({height: "450px"},50);
        $("#chat").animate({height: "410px"},500);
        $("#chat-show").animate({opacity: 0},50);

    });
});
