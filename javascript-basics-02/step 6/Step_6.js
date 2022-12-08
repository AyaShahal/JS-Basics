let images=document.querySelectorAll("img")

images.forEach(image=> {
    image.addEventListener("mouseover",function(){
        console.log("hey")
        image.src = this.src.replace(".jpg","_2.jpg")
    })
    image.addEventListener("mouseout",function(){
      image.src = this.src.replace("_2.jpg",".jpg")  
})
})
