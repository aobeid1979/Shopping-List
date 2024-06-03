const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList= document.getElementById('item-list');


function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    //Validate Input
    if(newItem === '') {
        alert('Please add an item');
        return;
    }

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));

    //Create Delete Button

    const button = createButton('remove-item btn-link text-red');
    console.log(button);

}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createI
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;


// Event Listners

itemForm.addEventListener('submit', addItem);
