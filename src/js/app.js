import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, {Pagination, Navigation, FreeMode, Thumbs } from 'swiper';

const swiper = new Swiper();

var swiper1 = new Swiper(".mySwiper", {
  modules: [Navigation, Thumbs],
  spaceBetween: 10,
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".peak__button-next",
    prevEl: ".peak__button-prev",
  },
  breakpoints:{
    576:{
      spaceBetween: 0,
      slidesPerView: 3,
      direction: 'horizontal',
    },
    776:{
      direction: 'vertical',
      spaceBetween: 18,
      slidesPerView: 4,
    },
    1200:{
      direction: 'horizontal',
      spaceBetween: 18,
      slidesPerView: 4,
    }, 
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  modules: [Thumbs],
  spaceBetween: 18,
  slidesPerView: 1,
  loop: true,
  thumbs: {
    swiper: swiper1,
  },
});

new Swiper(".intro__swiper", {
    modules: [Pagination],
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".intro__pagination",
      clickable: true,
    },
});

new Swiper(".choice__swiper", {
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  breakpoints:{
    992:{
      modules: [FreeMode],
      slidesPerView: 'auto',
      freeMode: true,
    },
    576:{
      slidesPerView: 2,
    }
  }
});

const menu = document.querySelector('.menu');
const headerContent = document.querySelector('.header__content');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    headerContent.classList.toggle('active')
    body.classList.toggle('hidden')
    menu.classList.toggle('active')
})

const choiseItem = document.querySelectorAll('.choice__swiper-slide');
choiseItem.forEach(item=>{
  const cursor = item.querySelector('.choice__custom');
  item.addEventListener('mousemove', e => {
    const y = e.offsetY;
    const x = e.offsetX - cursor.clientWidth; 
    cursor.setAttribute("style", "top: "+(y)+"px; left: "+ (x)+"px;")
  })
})

const color = document.querySelectorAll('.peak__color');
color.forEach(el=>{
  el.addEventListener('click', (e)=>{
    color.forEach(peakColor =>{
      peakColor.classList.remove('active')
    })
    el.classList.add('active')
  })
})