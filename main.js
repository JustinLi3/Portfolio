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
    $(window).scroll(function(){
        $("#welcome-text").css("opacity", 1 - $(window).scrollTop()/500);
        $("#description1").css("opacity", 1 - $(window).scrollTop()/500);  
        $("#about-me-title").css("opacity", 3 - $(window).scrollTop()/450);  
        $("#description2").css("opacity", 3 - $(window).scrollTop()/450); 
        $("#slideshow").css("opacity", 3 - $(window).scrollTop()/450); 

    });
    document.querySelector('#contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        e.target.elements.name.value = '';
        e.target.elements.email.value = '';
        e.target.elements.message.value = '';
    });

    const text = document.querySelector(".sec-text");
    const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Developer";
        }, 0);
        setTimeout(() => {
            text.textContent = "Designer";
        }, 3000);
        setTimeout(() => {
            text.textContent = "Freelancer";
        }, 6000); //1s = 1000 milliseconds
    }
    textLoad();
    setInterval(textLoad, 9000);  

    
});