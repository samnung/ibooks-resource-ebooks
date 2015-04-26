window.addEventListener("DOMContentLoaded", function() {
  var word17 = document.getElementById("word17");

  // Listen for ibooksMediaOverlayActive when it occurs on #word17  
  word17.addEventListener("ibooksMediaOverlayActive", function() {
    word17.addClassName("glow");
  }, false);
  
}, false);