$(document).ready(function () {
    $(".opn").on("click", function() {
        $("nav").stop().animate({
            "right" : "0"
        });
    })

    $(".close").on("click", function() {
        $("nav").stop().animate({
            "right" : "-100%"
        })
    })
    var init = 1;
    var fin = 365;

    setInterval(function() {
        init++;
        if(init <= 365){
            if(init < 10){
                $(".con1 .wrap .count").text("00"+init);
            } else if(init < 100){
                $(".con1 .wrap .count").text("0" + init);
            } else {
                $(".con1 .wrap .count").text(init);
            }
        }
    }, 3);
});