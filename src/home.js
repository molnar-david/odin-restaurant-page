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

    const introduction = document.createElement('h2');
    introduction.textContent = "The world's No. 1 (non-fake!) Italian restaurant and pizzeria";

    home.appendChild(introduction);
    content.appendChild(home);
}