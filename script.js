var string = "This is another text with JS";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
var running = setTimeout(animate, 90);
})();

function chBackcolor(color) {
    document.body.style.background = color;
 }