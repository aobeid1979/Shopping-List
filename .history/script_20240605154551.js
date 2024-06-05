const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList= document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');


function displayItems() {
    const itemsFromStorage = getItemFromStorage();
        itemsFromStorage.forEach((item) => addItemToDom(item));

        checkUI();
    };


function onAddItemSubmit(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    //Validate Input
    if(newItem === '') {
        alert('Please add an item');
        return;
    }
    // Create item DOM element

    addItemToDom(newItem);

    //Add item to local storage
    addItemToLocalStorage(newItem);

    checkUI();

    itemInput.value = '';

}

function addItemToDom(item) {

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    //Create Delete Button

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);

    itemList.appendChild(li);

}


function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function onClickItem(e) {
    
}


function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {

        if (confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();

            checkUI();
        }
        
    };
    
}

function addItemToLocalStorage(item) {
    const itemsFromStorage = getItemFromStorage();

    //Add new item
    itemsFromStorage.push(item);

    //Convert to string
    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemFromStorage() {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    } else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

function clearItems() {
    
    while (itemList.firstChild) {
        
        itemList.removeChild(itemList.firstChild);
    }

    checkUI();
    
}

function filterItems(e) {
    const text = e.target.value.toLowerCase();
    const items = itemList.querySelectorAll('li');

    items.forEach(function(item) {
        const itemName = item.firstChild.textContent.toLowerCase();
        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function checkUI() {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}


function init() {

// Event Listners
    itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', onClickItem);
clearBtn.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);
document.addEventListener('DOMContentLoaded', displayItems);

checkUI();

}

init();

