$(document).ready(function(){

    setInterval(function(){
        $.get("title", function(data){
            $("#title").html(data);
        });
    }, 2000);

    setInterval(function(){
        $.get("artist", function(data){
            $("#artist").html(data);
        });
    }, 2000);

    setInterval(function(){
        $.get("status", function(data){
            $("#playpause").html(data);
        });
    }, 1000);

    $("#playpause").click(function(){
        $.get("pause");
    });

    $("#next").click(function(){
        $.get("next");
    });

    $("#previous").click(function(){
        $.get("previous");
    });    


});