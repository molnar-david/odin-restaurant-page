export default function loadHomePage() {
    const content = document.getElementById('content');
    const home = document.createElement('div');

    const introduction = document.createElement('h2');
    introduction.textContent = "The world's No. 1 (non-fake!) Italian restaurant and pizzeria";

    const img = new Image();
    img.src = '../src/assets/pizza.jpg';

    home.append(introduction, img);
    content.appendChild(home);
}