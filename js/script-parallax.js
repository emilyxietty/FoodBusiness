function scroll() {
    
    var t = window.scrollY;
    var para = document.getElementById("para");
    var m=-0.30;
    var b = 0;
    
    var newY = m*t + b;
    para.style.backgroundPositionY = newY + "px";
            
            
}