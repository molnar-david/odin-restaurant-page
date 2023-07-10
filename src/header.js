export default function loadHeader() {
    const header = document.getElementById('header');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Nonfalso';

    const tabs = document.createElement('ul');

    const homeTab = document.createElement('li');
    homeTab.textContent = 'Home';
    const menuTab = document.createElement('li');
    menuTab.textContent = 'Menu';
    const contactTab = document.createElement('li');
    contactTab.textContent = 'Contact';
    tabs.append(homeTab, menuTab, contactTab);

    header.append(restaurantName, tabs);
}