function createMenuItemGroup(heading) {
    const menuItemGroup = document.createElement('div');
    menuItemGroup.classList.add('menu-item-group');

    const menuItemGroupHeading = document.createElement('h3');
    menuItemGroupHeading.textContent = heading;

    menuItemGroup.appendChild(menuItemGroupHeading);
    return menuItemGroup;
}

function createMenuItem(name, price, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuItemName = document.createElement('h4');
    menuItemName.textContent = name;

    const menuItemPrice = document.createElement('p');
    menuItemPrice.textContent = price;
    menuItemPrice.classList.add('right');

    const menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = description;

    menuItem.append(menuItemName, menuItemPrice, menuItemDescription);
    return menuItem;
}

export default function loadMenuPage() {
    const content = document.getElementById('content');
    content.textContent = '';

    const btns = document.getElementsByTagName('button');
    for (const btn of btns) {
        if (btn.textContent === 'Menu') {
            btn.classList.add('active');
        } else {
            btn. classList.remove('active');
        }
    }

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const pizza = createMenuItemGroup('Pizza');
    pizza.append(
        createMenuItem(
            'Margherita',
            '$10',
            'organic tomato sauce, fresh mozzarella'
        ),
        createMenuItem(
            'Carnivora',
            '$15',
            'organic sauce, fresh mozzarella, sweet italian sausage, pancetta, soppressata'
        ),
    );

    const pasta = createMenuItemGroup('Pasta');
    pasta.append(
        createMenuItem(
            'Spaghetti carbonara',
            '$20',
            'homemade spaghetti, pancetta, fresh cream and egg sauce'
        ),
        createMenuItem(
            "Penne all'Arrabbiata",
            '$20',
            'Homemade, organic tomatoes, spicy marianara sauce'
        ),
    );

    const beverages = createMenuItemGroup('Beverages');
    beverages.append(
        createMenuItem(
            'San Benegrino mineral water',
            '$5',
            "world's No. 1 mineral water"
        ),
        createMenuItem(
            "Espresso",
            '$5 - $7',
            'black / with sugar and/or organic milk'
        ),
    );

    menu.append(pizza, pasta, beverages)
    content.appendChild(menu);
}