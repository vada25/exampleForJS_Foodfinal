import tabs from './js/modules/tabs';
import calc from './js/modules/calc';
import cards from './js/modules/cards';
import forms from './js/modules/forms';
import modal from './js/modules/modal';
import slider from './js/modules/slider';
import timer from './js/modules/timer';
import {openModal} from './js/modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    calc();
    cards();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal');
    slider({
        container: '.offer__slider', 
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        wrapper: '.offer__slider-wrapper',
        totalCounter: '#total',
        currentCounter: '#current',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    });
    timer('.timer', '2024-09-15');
});

document.getElementById('#hi');