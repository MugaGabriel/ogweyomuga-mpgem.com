
const hamburger = document.querySelector(".hamburger");
    const navmenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navmenu.classList.toggle("active");
    })




    //testimonial...................................
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
  
    function updateSlider() {
      document.getElementById('slideContainer').style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlider();
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlider();
    }




// blog filter =====================================
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}