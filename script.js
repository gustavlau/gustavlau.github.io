var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})



window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".nav").classList.add("affix");
    document.getElementById("nav-link-main").style.fontSize="2em";
  } else {
    document.querySelector(".nav").classList.remove("affix");
    document.getElementById("nav-link-main").style.fontSize="1em";
  }
}