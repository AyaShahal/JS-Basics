let anchor = document.querySelectorAll('a')
let p = document.querySelector("#texte")
anchor.forEach(lnk=>{
   lnk.addEventListener('click',function(){
    if (lnk.innerText == "Hide"){
        p.style.display="none"
    }else{
        p.style.display="block"
    }
   })
})