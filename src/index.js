import loadHeader from './header.js';
import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';

function initHomeBtn() {
    const btns = document.getElementsByClassName('home-btn');
    for (const btn of btns) {
        switch (btn.textContent) {
            case 'Our Menu':
            default:
                btn.addEventListener('click', loadMenuPage);
                break;
        }
    }
}

function initHeaderBtns() {
    const btns = document.getElementsByClassName('header-btn');
    for (const btn of btns) {
        switch (btn.textContent) {
            case 'Home':
            default:
                btn.addEventListener('click', () => {
                    loadHomePage();
                    initHomeBtn();
                });
                break;
            case 'Menu':
                btn.addEventListener('click', loadMenuPage);
                break;
            case 'Contact':
                btn.addEventListener('click', loadContactPage);
                break;
        }
    }
}

function initBtns() {
    initHeaderBtns();
    initHomeBtn();
}

loadHeader();
loadHomePage();
initBtns();
