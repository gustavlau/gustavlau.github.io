// var tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })



window.onscroll = ()=> { (myFunction)()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".nav").classList.add("affix");
    document.getElementById("nav-link-main").style.fontSize="2em";
    document.getElementById("nav-link-main").style.fontWeight="bold";

  } else {
    document.querySelector(".nav").classList.remove("affix");
    document.getElementById("nav-link-main").style.fontSize="1em";
    document.getElementById("nav-link-main").style.fontWeight="normal";
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



// new Freezeframe({
//   trigger: 'hover',
//   overlay: false,
//   responsive: true,
//   warnings: false
// });

// let buttonHover =[];
// for(i=1;i<5;i++){
//   buttonHover[i]= new Freezeframe(`.ff${i}`,{
//     trigger:'hover'});
// }


let buttonHover1 = new Freezeframe('.ff1',{
  trigger:'hover'});

let buttonHover2 = new Freezeframe('.ff2',{
  trigger:'hover'});

let buttonHover3 = new Freezeframe('.ff3',{
  trigger:'hover'});

let buttonHover4 = new Freezeframe('.ff4',{
  trigger:'hover'});
      


document.querySelector("#ff1-btn").addEventListener('mouseover',()=>{buttonHover1.start()});
document.querySelector("#ff1-btn").addEventListener('mouseout',()=>{buttonHover1.stop()});

document.querySelector("#ff2-btn").addEventListener('mouseover',()=>{buttonHover2.start()});
document.querySelector("#ff2-btn").addEventListener('mouseout',()=>{buttonHover2.stop()});

document.querySelector("#ff3-btn").addEventListener('mouseover',()=>{buttonHover3.start()});
document.querySelector("#ff3-btn").addEventListener('mouseout',()=>{buttonHover3.stop()});

document.querySelector("#ff4-btn").addEventListener('mouseover',()=>{buttonHover4.start()});
document.querySelector("#ff4-btn").addEventListener('mouseout',()=>{buttonHover4.stop()});