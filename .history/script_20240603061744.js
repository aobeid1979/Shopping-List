const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList= document.getElementById('item-list');


function addItem(e) {
    e.preventDefault();

    //Validate Input
    if(itemInput.value === '') {
        alert('Please add an item');
        return;
    }
}
// Event Listners

