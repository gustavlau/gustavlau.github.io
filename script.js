var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".nav").classList.add("affix");
    document.getElementById("nav-link-main").style.fontSize="2em";
  } else {
    document.querySelector(".nav").classList.remove("affix");
    document.getElementById("nav-link-main").style.fontSize="1em";
  }
}

let hamburgerMenu = document.getElementById("hamburger");
hamburgerMenu.addEventListener('click',mobileShow);

function mobileShow (){
  let mobileLinks = Array.from(document.querySelector(".nav-links-mobile").children);
  mobileLinks.forEach((mobileLinksChildren)=>{
    if(mobileLinksChildren.classList.contains("nav-hide")){
      mobileLinksChildren.classList.remove("nav-hide");
    } else {
      mobileLinksChildren.classList.add("nav-hide");
    }
  });  
}