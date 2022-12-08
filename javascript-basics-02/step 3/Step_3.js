
let x =document.querySelector("div")
let input = document.querySelector("#name");
input.addEventListener("change",function(){
   x.innerText=input.value
  })