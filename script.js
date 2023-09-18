const slider=document.querySelector(".img-slide")
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar");
const nextbtn=document.querySelector(".next");
const prevbtn=document.querySelector(".prev");
const slide=document.querySelectorAll(".slide");
const btn=document.querySelectorAll(".btn");
const numbOfSlides=slide.length;
var slideNumb=0;

hamburger.addEventListener("click", mobileMenu);
//humbeger effect on mobile screen
function mobileMenu() {
    navMenu.classList.toggle("nav-open");
    hamburger.classList.toggle("hamburger-open");
  }
//next button
nextbtn.addEventListener("click",()=>{
  
  slide.forEach((slide)=>{
    slide.classList.remove("active")
  });
  btn.forEach((btn)=>{
    btn.classList.remove("active")
  });
  slideNumb++;

  if(slideNumb>(numbOfSlides-1)){
    slideNumb =0;
  }
  slide[slideNumb].classList.add("active");
  btn[slideNumb].classList.add("active");
})

//previous button
prevbtn.addEventListener("click",()=>{
  
  slide.forEach((slide)=>{
    slide.classList.remove("active")
  });
  btn.forEach((btn)=>{
    btn.classList.remove("active")
  });
  slideNumb--;

  if(slideNumb<0){
    slideNumb = numbOfSlides-1;
  }
  slide[slideNumb].classList.add("active");
  btn[slideNumb].classList.add("active");
})
var palySlider;
//autoplay slider
var repeater=()=>{
  palySlider=setInterval(function(){
    slide.forEach((slide)=>{
      slide.classList.remove("active")
    });
    btn.forEach((btn)=>{
      btn.classList.remove("active")
    });
    slideNumb++;
  
    if(slideNumb>(numbOfSlides-1)){
      slideNumb =0;
    }
    slide[slideNumb].classList.add("active");
    btn[slideNumb].classList.add("active");
  },4000);
}
repeater();
//stop the Image autoplay mouse over
slider.addEventListener("mouseover",()=>{
  clearInterval(palySlider);
});
//start the Image autoplay mouse out
slider.addEventListener("mouseout",()=>{
  repeater();
});