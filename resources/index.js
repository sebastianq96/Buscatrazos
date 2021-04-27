//----------------------Hamburguer menu------------------------------------------------------------------

function checkFunction(){
    document.getElementById("menu-toggle").checked = false;
  }


//-----------------------PARALLAX---------------------------------------------------------------------------
document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll('.layer').forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    
    const x = (window.innerWidth - e.pageX * speed)/100;
    const y = (window.innerHeight - e.pageY * speed)/100;
    
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  })
}


//--------------------- Floating Buttom-------------------------------------------------------------------
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1050) {
    document.getElementById("float-buttom").style.display = "block";
  } else if (window.screen.height<1000) {
    document.getElementById("float-buttom").style.display = "block";
  } else if (document.body.scrollTop < 1050) {
    document.getElementById("float-buttom").style.display = "none";
  }

}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


window.onresize = function(){
  if(window.screen.height<=900){
    console.log("me echiquite")
    document.getElementById("float-buttom").style.display = "block";
    document.getElementById("float-buttom").style.display = "none";
  }
  }

