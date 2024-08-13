window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./js/modules/tabs'),
        calc = require('./js/modules/calc'),
        cards = require('./js/modules/cards'),
        forms = require('./js/modules/forms'),
        modal = require('./js/modules/modal'),
        slider = require('./js/modules/slider'),
        timer = require('./js/modules/timer');
    
    tabs();
    calc();
    cards();
    forms();
    modal();
    slider();
    timer();

});

