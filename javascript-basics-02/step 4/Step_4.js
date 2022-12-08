let button =document.querySelector("button")
let name= document.querySelector("#name")
let surname= document.querySelector("#surname")
let city= document.querySelector("#city")

button.addEventListener("click" ,function(){
   name.value=""
   surname.value=""
   city.value=""
})

