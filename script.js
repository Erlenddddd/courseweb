function click() {
    document.getElementById("links").classList.toggle("linksactive");
    document.getElementById("line1").classList.toggle("line1active");
    document.getElementById("line2").classList.toggle("line2active");
    document.getElementById("line3").classList.toggle("line3active");
  }
  
  document.getElementById("burger").addEventListener("click", click);


  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });