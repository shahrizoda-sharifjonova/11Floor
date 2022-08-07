import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, {Pagination } from 'swiper';

const swiper = new Swiper();

new Swiper(".intro__swiper", {
    modules: [Pagination],
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".intro__pagination",
      clickable: true,
    },
});

const menu = document.querySelector('.menu');
const headerContent = document.querySelector('.header__content');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    headerContent.classList.toggle('active')
    body.classList.toggle('hidden')
    menu.classList.toggle('active')
})