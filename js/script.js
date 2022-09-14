// mobile menu
function openNav(){
    document.getElementById("sidenav").style.width="50%";
}
function closeNav(){
    document.getElementById("sidenav").style.width="0";
}

$(document).ready(function(){
    // dropdown content
    $(".drop-down-content").hide();
    $(".drop-down").click(function(){
        $(".drop-down-content").toggle();
        document.getElementById("drop-down-btn").style.color="#DF6951";
        document.getElementById("drop-down-btn1").style.color="#DF6951";
    });

    // Slider text
    document.getElementById("slide1").style.background="#000";
    $(".slide1").click(function(){
        $(".slider-heading1").show();
        $(".slider-heading2").hide();
        $(".slider-heading3").hide();
        document.getElementById("slide1").style.background="#000";
        document.getElementById("slide2").style.background="#E5E5E5";
        document.getElementById("slide3").style.background="#E5E5E5";
    });
    $(".slider-heading2").hide();
    $(".slide2").click(function(){
        $(".slider-heading2").show();
        $(".slider-heading1").hide();
        $(".slider-heading3").hide();
        document.getElementById("slide2").style.background="#000";
        document.getElementById("slide1").style.background="#E5E5E5";
        document.getElementById("slide3").style.background="#E5E5E5";
    });
    $(".slider-heading3").hide();
    $(".slide3").click(function(){
        $(".slider-heading3").show();
        $(".slider-heading1").hide();
        $(".slider-heading2").hide();
        document.getElementById("slide3").style.background="#000";
        document.getElementById("slide1").style.background="#E5E5E5";
        document.getElementById("slide2").style.background="#E5E5E5";
    });
        // card+button
        $(".slider-card1").css("z-index","10");
        $(".slider-card1").css("box-shadow","0px 8px 16px 0px rgba(0,0,0,0.2), 8px 0px 16px 0px rgba(0,0,0,0.2)");
        $(".slider-card1").css("border","none");
    $(".slider-card-btn1").click(function(){
        $(".slider-card1").css("z-index","10");
        $(".slider-card1").css("box-shadow","0px 8px 16px 0px rgba(0,0,0,0.2), 8px 0px 16px 0px rgba(0,0,0,0.2)");
        $(".slider-card1").css("border","none");
        $(".slider-card2").css("z-index","-1");
        $(".slider-card2").css("box-shadow","none");
        $(".slider-card2").css("border","1px solid #4E4E73");
        $(".slider-man-img").show();
    });
        $(".slider-card2").css("z-index","-1");
        $(".slider-card2").css("box-shadow","none");
        $(".slider-card2").css("border","1px solid #4E4E73");
    $(".slider-card-btn2").click(function(){
        $(".slider-card2").css("z-index","10");
        $(".slider-card2").css("box-shadow","0px 8px 16px 0px rgba(0,0,0,0.2), 8px 0px 16px 0px rgba(0,0,0,0.2)");
        $(".slider-card2").css("border","none");
        $(".slider-card1").css("z-index","-1");
        $(".slider-card1").css("box-shadow","none");
        $(".slider-card1").css("border","1px solid #4E4E73");
        $(".slider-man-img").hide();
    });
    $(".subscrib-btn").click(function(){
        $(this).css("background","#c23e24")
    });

    // Safari smoth scroll
    $("a").on("click", function(event){
        if(this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },200,
                function(){
                    window.location.hash = hash;
                }
            );
        }
    });

    // Stikey menu class
    $(".js-stikey-menu").waypoint(function(derection){
        if(derection == "down"){
            $(".header-section").addClass("stikey");
        }else{
            $(".header-section").removeClass("stikey");
        };
    })
});