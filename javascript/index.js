var x = document.querySelectorAll(".nav-item").length;
for(var y=0; y<x; y++){
  document.querySelectorAll(".nav-item")[y].addEventListener("click", myFunction);
}

function myFunction(){
  if(document.querySelector("nav button").ariaExpanded==="true"){
document.querySelector("button.navbar-toggler").click();
}
}
document.addEventListener("click", myFunction);
