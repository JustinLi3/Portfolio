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
});