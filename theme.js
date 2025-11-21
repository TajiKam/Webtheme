// Morenex Minimal Luxe - basic interactions
document.addEventListener('DOMContentLoaded', function(){
  // basic mobile nav toggle (placeholder)
  var btn = document.querySelector('.nav-toggle');
  if(btn){
    btn.addEventListener('click', function(){ document.body.classList.toggle('nav-open'); });
  }
  console.log('Morenex theme scripts loaded');
});
