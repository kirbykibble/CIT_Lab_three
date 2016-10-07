function buzz() {
    
    myAudio = document.getElementById("buzzing");
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    myAudio.play();
    
    var beeBut = document.getElementById("beebutton");
    beeBut.innerHTML = "DEACTIVATE THE BEES"
    beeBut.setAttribute("onclick", "stop();")
    beeBut.style.backgroundSize = "500px 288px";
    document.getElementById("bees").style.animationDuration = "0.5s";
    
    setInterval(function() {
        beeBut.style.marginLeft = ((Math.round(Math.random()) * 1000) - 500) + "px";
        beeBut.style.marginTop = ((Math.round(Math.random()) * 1000) - 500) + "px";
    }, 50);
}
function stop() {
    alert("YOU CANT DEACTIVATE THE BEES")
    var bee = document.createElement("div");
    document.body.appendChild(bee);
    bee.setAttribute("ID", "beebutton")
    bee.setAttribute("onclick", "stop();")
    bee.innerHTML = "DEACTIVATE THE BEES"
    bee.style.backgroundSize = "500px 288px";
    
    setInterval(function() {
        bee.style.marginLeft = ((Math.round(Math.random()) * 1000) - 500) + "px";
        bee.style.marginTop = ((Math.round(Math.random()) * 1000) - 500) + "px";
    }, 50);
}