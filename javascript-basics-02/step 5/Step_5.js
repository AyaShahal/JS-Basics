let images=document.querySelectorAll("img")
//mages.addEventListener('mouseover',function(){

images.forEach(image=> {
    image.addEventListener("mouseover",function(){
        console.log("hey")
        image.src = this.src.replace(".jpg","_2.jpg")
    })
})