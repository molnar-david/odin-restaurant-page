export default function loadHeader() {
    const header = document.getElementById('header');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'Nonfalso';

    const tabs = document.createElement('div');

    const homeTab = document.createElement('button');
    homeTab.textContent = 'Home';

    const menuTab = document.createElement('button');
    menuTab.textContent = 'Menu';


    const contactTab = document.createElement('button');
    contactTab.textContent = 'Contact';
    tabs.append(homeTab, menuTab, contactTab);

    header.append(restaurantName, tabs);
}