import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, {Pagination, Navigation, FreeMode, Thumbs } from 'swiper';

const swiper = new Swiper();

var swiper1 = new Swiper(".mySwiper", {
  modules: [Thumbs],
  spaceBetween: 18,
  slidesPerView: 4,
  loop: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  modules: [Navigation, Thumbs],
  spaceBetween: 18,
  loop: true,
  navigation: {
    nextEl: ".peak__button-next",
    prevEl: ".peak__button-prev",
  },
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

// const cursor = document.querySelectorAll('.choice__custom');
// const choiseItem = document.querySelectorAll('.choice__swiper-slide');
// choiseItem.forEach(item=>{
//   item.addEventListener('mousemove', e => {
//     cursor.forEach(cursor => {
//       cursor.setAttribute("style", "top: "+(e.clientY)+"px; left: "+(e.clientX)+"px;")
//     });
//   })
// })

const choiseItem = document.querySelectorAll('.choice__swiper-slide');
choiseItem.forEach(item=>{
  const cursor = item.querySelector('.choice__custom');
  item.addEventListener('mousemove', e => {
    const y = e.offsetY;
    const x = e.offsetX - cursor.clientWidth; 
    cursor.setAttribute("style", "top: "+(y)+"px; left: "+ (x)+"px;")
  })
})