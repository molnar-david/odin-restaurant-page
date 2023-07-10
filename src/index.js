import loadHeader from './header.js';
import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactPage from './contact.js';

loadHeader();
loadHomePage();

const buttons = document.getElementsByTagName('button');
for (const button of buttons) {
    switch (button.textContent) {
        case 'Home':
        default:
            button.addEventListener('click', loadHomePage);
            break;
        case 'Menu':
            button.addEventListener('click', loadMenuPage);
            break;
        case 'Contact':
            button.addEventListener('click', loadContactPage);
            break;
    }
}
