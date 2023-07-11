export default function loadHomePage() {
    const content = document.getElementById('content');
    content.textContent = '';
    
    const btns = document.getElementsByTagName('button');
    for (const btn of btns) {
        if (btn.textContent === 'Home') {
            btn.classList.add('active');
        } else {
            btn. classList.remove('active');
        }
    }

    const home = document.createElement('div');
    home.setAttribute('id', 'home');

    const restaurantName = document.createElement('h2');
    restaurantName.textContent = 'Nonfalso';

    const introduction = document.createElement('h3');
    introduction.textContent = "The world's No. 1 (non-fake!) Italian restaurant and pizzeria";

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Our Menu';
    menuBtn.classList.add('home-btn');

    home.append(restaurantName, introduction, menuBtn);
    content.appendChild(home);
}