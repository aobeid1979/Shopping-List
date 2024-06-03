const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList= document.getElementById('item-list');


function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    //Validate Input
    if(itemInput.value === '') {
        alert('Please add an item');
        return;
    }

    console.log(itemInput.value);
}
// Event Listners

itemForm.addEventListener('submit', addItem);
