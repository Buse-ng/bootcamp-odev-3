document.addEventListener("DOMContentLoaded", function(){
    const startButton=document.getElementById("startButton");
    const horses = document.querySelectorAll(".horse")
    
    
    startButton.addEventListener("click", function(){
        startButton.disabled = true;
        horseRace();
    });
    
    function horseRace(){
        const finalLine=document.querySelector(".finalLine");
        
    }

});


