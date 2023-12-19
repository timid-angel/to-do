const empty = document.querySelector('.empty');

function deleteItem(nodeItem) {
    nodeItem.remove();
    const listItemsNumber = document.querySelectorAll(".display__item").length;
    if (listItemsNumber == 0) {
        empty.classList.remove('hidden');
    }
    const url = "https://jsonplaceholder.typicode.com/todos/" + nodeItem.dataset.id
    console.log(url)
    fetch(url, {
        method: 'DELETE'
    })

}


export { deleteItem }