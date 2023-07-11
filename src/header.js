export default function loadHeader() {
    const header = document.getElementById('header');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Nonfalso';

    const tabs = document.createElement('div');
    tabs.setAttribute('id', 'tabs');

    const homeTab = document.createElement('button');
    homeTab.textContent = 'Home';
    homeTab.classList.add('active');

    const menuTab = document.createElement('button');
    menuTab.textContent = 'Menu';


    const contactTab = document.createElement('button');
    contactTab.textContent = 'Contact';
    tabs.append(homeTab, menuTab, contactTab);

    header.append(restaurantName, tabs);
}