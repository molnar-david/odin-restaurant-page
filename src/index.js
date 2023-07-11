import loadHeader from './header.js';
import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';

loadHeader();
loadHomePage();

const btns = document.getElementsByTagName('button');
for (const btn of btns) {
    switch (btn.textContent) {
        case 'Home':
        default:
            btn.addEventListener('click', loadHomePage);
            break;
        case 'Menu':
            btn.addEventListener('click', loadMenuPage);
            break;
        case 'Contact':
            btn.addEventListener('click', loadContactPage);
            break;
    }
}
