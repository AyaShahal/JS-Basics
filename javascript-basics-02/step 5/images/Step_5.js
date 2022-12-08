let image=document.querySelectorAll("img")
image.addEventListener('mouseover',function(){
    image.src =this.src.replace(".jpg","_2.jpg")
})