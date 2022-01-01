let listBut =document.querySelector('#listBut'),
cancelBut =document.querySelector('#cancelBut'),
nav=document.querySelector('nav');

listBut.addEventListener('click',()=>{
  cancelBut.style.cssText='display:block;'
  listBut.style.display='none'
  nav.style.cssText='display:flex;transform: translateY(0);'
})
cancelBut.addEventListener('click',()=>{
  cancelBut.style.cssText='display:none;'
  listBut.style.display='block'
  nav.style.cssText='transform: translateY(-100em);'
})


// section-6 -----------------
let dot1=document.querySelector('#dot1'),
dot2=document.querySelector('#dot2'),
leftArrBut=document.querySelector('.left-arr'),
rightArrBut=document.querySelector('.right-arr'),
group1=document.querySelector('#group-1'),
group2=document.querySelector('#group-2');

rightArrBut.addEventListener('click',()=>{
  group1.style.cssText='display:none;'
  group2.style.cssText='display:flex;'
  dot2.style.cssText='opacity:1'
  dot1.style.cssText='opacity:0.5'
})
leftArrBut.addEventListener('click',()=>{
  group1.style.cssText='display:flex;'
  group2.style.cssText='display:none;'
  dot2.style.cssText='opacity:0.5'
  dot1.style.cssText='opacity:1'
})
dot2.addEventListener('click',()=>{
  group1.style.cssText='display:none;'
  group2.style.cssText='display:flex;'
  dot2.style.cssText='opacity:1'
  dot1.style.cssText='opacity:0.5'
})
dot1.addEventListener('click',()=>{
  group1.style.cssText='display:flex;'
  group2.style.cssText='display:none;'
  dot2.style.cssText='opacity:0.5'
  dot1.style.cssText='opacity:1'
})


// read more button action----------------------
let readMoreBut=document.querySelectorAll('#readMoreBut');
readMoreBut.forEach((but)=>{
  but.addEventListener('click',()=>{
  alert("Sorry there's NO more")
  })
})


// nav and sections -----------------------
let homeBut =document.querySelector('#homeBut'),
menuBut =document.querySelector('#menuBut'),
coldFoodDrinksBut =document.querySelector('#coldFoodDrinksBut'),
healthyFoodBut =document.querySelector('#healthyFoodBut'),
reviewsBut =document.querySelector('#reviewsBut'),
learnCookingBut =document.querySelector('#learnCookingBut'),
aboutUsBut =document.querySelector('#aboutUsBut');

let firstSection=document.querySelector('.first-section'),
secondSection=document.querySelector('.second-section'),
section3=document.querySelector('.section-3'),
section4=document.querySelector('.section-4'),
section5=document.querySelector('.section-5'),
section6=document.querySelector('.section-6'),
lastSection=document.querySelector('.last-section');

homeBut.addEventListener('click',()=>{
  firstSection.scrollIntoView();
})
menuBut.addEventListener('click',()=>{
  secondSection.scrollIntoView();
})
coldFoodDrinksBut.addEventListener('click',()=>{
  section3.scrollIntoView();
})
healthyFoodBut.addEventListener('click',()=>{
  section4.scrollIntoView();
})
reviewsBut.addEventListener('click',()=>{
  section5.scrollIntoView();
})
learnCookingBut.addEventListener('click',()=>{
  section6.scrollIntoView();
})
aboutUsBut.addEventListener('click',()=>{
  lastSection.scrollIntoView();
})


// to top button -------------
let toTop =document.querySelector('#toTop');

document.addEventListener('scroll',()=>{
  if(window.scrollY>=700){
    toTop.style.cssText='transform: rotateZ(180deg) translateY(0);'
  }else{
    toTop.style.cssText='transform: rotateZ(180deg) translateY(-100px);'
  }
})

toTop.addEventListener('click',()=>{
  window.scrollTo({
    top:0,
  })
})


// header color changing ----------
let header =document.querySelector('header');
document.addEventListener('scroll',()=>{
  if(window.scrollY>=700){
    header.style.cssText='background-color:#0000009e;'
  }else{
    header.style.cssText='background-color:transparent;'
  }
})