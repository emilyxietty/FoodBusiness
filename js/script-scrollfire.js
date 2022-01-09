//window.onscroll = function() {scroll()};
function scroll() {
    var t = window.scrollY;
    var nav = document.getElementById("nav");
    
    var image = document.getElementById("cookie");
    if (t > 1300) {
        image.style.transform = "scale(2, 2)";
    }
}