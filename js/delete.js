const empty = document.querySelector('.empty');
const displaySec = document.querySelector('.display__container');

function deleteItem(nodeItem) {
    nodeItem.remove();
    const listItemsNumber = document.querySelectorAll(".display__item").length;
    displaySec.hidden = false;
    if (listItemsNumber == 0) {
        empty.classList.remove('hidden');
        displaySec.hidden = true;
    }
    const url = "https://jsonplaceholder.typicode.com/todos/" + nodeItem.dataset.id
    console.log(url)

    fetch(url, {
        method: 'DELETE'
    })
        .then(response => console.log(response))
        .catch(err => console.log(err))

}


export { deleteItem }