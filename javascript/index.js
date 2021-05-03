var x = document.querySelectorAll(".nav-item").length;
for(var y=0; y<x; y++){
  document.querySelectorAll(".nav-item")[y].addEventListener("click", myFunction);
}

function myFunction(){
document.querySelector("button.navbar-toggler").click();
}
