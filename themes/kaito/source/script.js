'use strict';

(() => {
    function ready(fn) {
        if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") fn();
        else document.addEventListener('DOMContentLoaded', fn);
    }

    function $(sel){
        return document.querySelector(sel);
    }

    function $$(sel){
        return document.querySelectorAll(sel);
    }

    function applyTheme(name){
        let old = $('link#theme'); if(old != null) old.remove();
        let link = document.createElement('link');
        link.id = "theme";
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = `/style.${name}.css`;
        document.head.appendChild(link);
    }

    localStorage.theme = localStorage.theme || 'gray';
    applyTheme(localStorage.theme);

    ready(() => {
        $$('.theme-type').forEach(e => {
            if(e.id == null) return;
            let me = e.id.split('-')[1];
            if(localStorage.theme == me) {
                e.classList.add('active');
            }
            e.onclick = () => {
                $('.theme-type#theme-' + localStorage.theme).classList.remove('active');
                e.classList.add('active');
                localStorage.theme = me;
                applyTheme(me);
            }
        });
        $('body').classList.add('ready');
    });
})();
