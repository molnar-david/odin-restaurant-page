export default function loadContactPage() {
    const content = document.getElementById('content');
    const contact = document.createElement('div');

    const tel = document.createElement('p');
    tel.textContent = 'Tel: 123 456 789';

    const email = document.createElement('p');
    email.textContent = 'E-mail: info@nonfalso.com'

    const address = document.createElement('p');
    address.textContent = 'Address: -';

    contact.append(tel, email, address);
    content.appendChild(contact);
}