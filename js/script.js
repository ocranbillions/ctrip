$(function() {

    //Toggle countries
    $(".tggl").click(function(){
        $(".countries ul").toggle();
    });

    //Toggle hotel link
    $(".hotel-locations").on("click", "a", function(event){
        $(".hotel-locations a").removeClass("active");
        $(event.target).addClass("active");
    });

    //Toggle flight link
    $(".flights-locations").on("click", "a", function(event){
        $(".flights-locations a").removeClass("active");
        $(event.target).addClass("active");
    });

    //Prevent page from reload
    $("a").click(function(event) {
        event.preventDefault();
    })
});