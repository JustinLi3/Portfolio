

$(document).ready(function(){ 
    $("#intro").css("cursor","pointer")
    $("#intro").click(function() {  
        if($("#intro-description").attr("hidden")==null){  
            $("#intro-facecard").removeClass("reveal"); 
            setTimeout(() => {
                $("#intro-description").attr("hidden",true);  
            }, 100);
        } 
        else{            
            $("#intro-facecard").addClass("reveal"); 
            setTimeout(() => {
                $("#intro-description").removeAttr("hidden");   
            }, 100);

        }
       
    }); 
    const text = document.querySelector(".sec-text");
    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Developer";
        }, 0);
        setTimeout(() => {
            text.textContent = "Designer";
        }, 4000);
        setTimeout(() => {
            text.textContent = "Freelancer";
        }, 8000); //1s = 1000 milliseconds
    }
    textLoad();
    setInterval(textLoad, 12000);  

    $(window).scroll(function(){
        $("#welcome-text").css("opacity", 1 - $(window).scrollTop()/500);
        $("#description1").css("opacity", 1 - $(window).scrollTop()/500);
    });
    
});