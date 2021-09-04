var imgs = Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.getElementById("boxContainer");
var innerBox = document.getElementById("innerBox");
var Close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentIndex = 0 ;
for(var i =0 ; i< imgs.length ; i++){
    imgs[i].addEventListener("click",function(eventInfo){
        boxContainer.style.display= "flex";
        var imgSrc= eventInfo.target.getAttribute("src")
        innerBox.style.backgroundImage= "url("+imgSrc + ")"
        currentIndex = imgs.indexOf(eventInfo.target)
   
     })
}
Close.addEventListener("click",closeSlider)
function closeSlider(){
    boxContainer.style.display = "none";
}
next.addEventListener("click", nextSlider)
function nextSlider(){
    currentIndex++;
    if(currentIndex== imgs.length){
        currentIndex=0
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = "url(" + imgSrc + ")"
}
prev.addEventListener("click", prevSlider)
function prevSlider(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length -1
    }
    var imgSrc = imgs[currentIndex].getAttribute("src");
    innerBox.style.backgroundImage = "url(" + imgSrc + ")"
}
document.addEventListener("keyup", function(event){
       
    if(event.code == "ArrowRight"){
        nextSlider()
    }
    else if (event.code == "ArrowLeft"){
        prevSlider()
    }
    else if (event.code == "Escape"){
      closeSlider()
    }
})
