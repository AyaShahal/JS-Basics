let input1 =document.querySelector("#password")
let input2 = document.querySelector("#confirmation")
let button = document.querySelector("button")
button.addEventListener('click',function(){
    if (input1.value != input2.value){
        input1.style="border-color :red";
        input2.style="border-color :red";
    }
})