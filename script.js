function buzz() {
    var bzzAudio = document.getElementById("buzzing");
    bzzAudio.play();
    var beeBut = document.getElementById("beebutton");
    beeBut.innerHTML = "DEACTIVATE THE BEES"
    beeBut.setAttribute("onclick", "stop();")
    
    setInterval(function() {
        var rando = Math.floor((Math.random() * 5) + 1);
        if (rando == 1) {
            beeBut.style.marginLeft = "100px";
        }
        else if (rando == 2) {
            beeBut.style.marginTop = "200px";
        }
        else if (rando == 3) {
            beeBut.style.marginLeft = "20px";
            beeBut.style.marginTop = "500px";
        }
        else if (rando == 4) {
            beeBut.style.marginLeft = "-100px";
            beeBut.style.marginTop = "-20px"
        }
        else if (rando == 5) {
            beeBut.style.marginLeft = "1000px";
            beeBut.style.marginTop = "-300px";
        }
        else {
            alert("errors")
        }
        
        
        
    }, 50);
}
function stop() {
    alert("YOU CANT DEACTIVATE THE BEES")
}