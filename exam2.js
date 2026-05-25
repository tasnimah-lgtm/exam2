
// Part 3 Question 3


window.addEventListener("load",function(){
    console.log("Tasnimah")})


// Part 3 Question 4

document.querySelector("h1").addEventListener("click",function(){
  console.log("Removing the h1")
    this.style.display = "none"
  })


// Part 3 Question 5
document.querySelector("figure:nth-child(4) figcaption").addEventListener("mouseover",function(){
   console.log("Border remains until page is reloaded")
  this.style.color="green"
  this.style.border="15 px solid green"
  })



// Part 3 Question 6
 
document.querySelector("Toggle button").addEventListener("focus",function(){
  console.log("Background color changes to white when Toggle button is in focus")
  this.style.color="white"
  this.style.border = "none"

})

document.querySelector("Toggle button").addEventListener("blur",function(){
  console.log("Background color changes to black when Toggle button loses focus")
  this.style.color="black"
  this.style.border = "none"

})


// Part 3 Question 7

 function change( { 
    document.
        getElementById("style").
        getElementsByTagName("style").
        mainSection.style.backgroundImage = "url('images/leaves.jpg')";

 })




// Part 3 Question 8

 
// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
})

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
 

