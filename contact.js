//Selecting side navbar,menuicon
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closeicon=document.getElementById("close-icon")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0;
})
closeicon.addEventListener("click",function(){
    sidenav.style.right="-50%";
})